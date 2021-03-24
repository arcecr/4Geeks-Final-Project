import os
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.utils import APIException

from marshmallow import ValidationError
from sqlalchemy import or_
from api.models import db, User, Follower, UserGame, Message
from api.serializer import UserSchema, UserGameSchema, MessageSchema

from flask_jwt_extended import create_access_token, jwt_required, current_user, get_jwt_identity
from datetime import timedelta
from urllib.parse import urlparse

from flask_mail import Message

api = Blueprint('api', __name__)

@api.route('/users/register', methods=['POST'])
def signUpUser():
    if not request.data or request.is_json is not True: raise APIException('Missing JSON object', status_code=400)

    data = request.json
    userSchema = UserSchema()

    try: user = userSchema.load(data)
    except ValidationError as err: raise APIException(err.messages, status_code=422)

    usernameEmailCheck = User.query.filter(or_(User.username == user.username, User.email == user.email)).first()
    if usernameEmailCheck: raise APIException("Already exist other user with same username or email", status_code=409)

    user.gen_hash_password()

    db.session.add(user)
    db.session.commit()

    return jsonify({
        "message": "Successful operation",
        "user_data": UserSchema().dump(user)
    }), 201


@api.route('/users/login', methods=['POST'])
def logInUser():
    if not request.data or request.is_json is not True: raise APIException('Missing JSON object', status_code=400)
    
    data = request.json

    username = data.get("username", None)
    password = data.get("password", None)

    if not username: raise APIException("Username is required", status_code=422)
    if not password: raise APIException("Password is required", status_code=422)

    user = User.query.filter(or_(User.username == username, User.email == username)).first()

    if not user: raise APIException("Wrong username or password", 401)
    if not user.verify_password(password): raise APIException("Wrong username or password", 401)

    expiration = timedelta(days=2)
    access_token = create_access_token(identity=user, expires_delta=expiration)

    return jsonify({
        "access_token": access_token
    }), 200


@api.route('/users/follow', methods=['POST', 'DELETE'])
@jwt_required()
def followUser():
    if not request.data or request.is_json is not True: raise APIException('Missing JSON object', status_code=400)

    data = request.json

    user_id = data.get("user_id", None)
    username = data.get("username", None)

    if not user_id: raise APIException("Missing data for user_id field.", status_code=422)
    if not username: raise APIException("Missing data for username field.", status_code=422)

    fromUser = User.query.get(current_user.id)

    if user_id == fromUser.id: raise APIException("You can't follow yourself", status_code=404)
    
    toUser = User.query.filter(User.id == user_id, User.username == username).first()
    if not toUser: raise APIException("User not found", status_code=404)

    checkFollow = Follower.query.filter_by(follower_id=fromUser.id, followed_id=toUser.id).one_or_none()
    
    ###############################
    if request.method == "POST":
        if checkFollow: raise APIException("You are already follow this user", status_code=409)

        newFollow = Follower(follower=fromUser, followed=toUser)

        db.session.add(newFollow)
        db.session.commit()

        return jsonify({ "message": "Successful operation" }), 200
    ###############################
    if request.method == "DELETE":
        if not checkFollow: raise APIException("You are not following this user", status_code=409)

        db.session.delete(checkFollow)
        db.session.commit()

        return jsonify(), 204


@api.route('/user/games', methods=['GET', 'POST', 'DELETE'])
@jwt_required()
def userGames():
    ########################################
    if request.method == "GET":
        userGames = UserGame.query.filter_by(user_id=current_user.id).all()

        return jsonify(UserGameSchema(many=True, exclude=['id']).dump(userGames)), 200
    ########################################

    if not request.data or request.is_json is not True: raise APIException('Missing JSON object', status_code=400)

    data = request.json

    gameId = data.get("game_id", None)
    if not gameId: raise APIException("Missing data for game_id field.", status_code=422)

    hasGame = UserGame.query.filter_by(user_id=current_user.id, game_id=gameId).first()

    ########################################
    if request.method == "POST":
        if hasGame: raise APIException("You already have this game in your list", status_code=409)

        newUserGame = UserGame(user_id=current_user.id, game_id=gameId)
        db.session.add(newUserGame)
        db.session.commit()

        return jsonify({ "message": "Successful operation" }), 201
    ########################################
    if request.method == "DELETE":
        if not hasGame: raise APIException("You not have this game in your list", status_code=409)

        db.session.delete(hasGame)
        db.session.commit()

        return jsonify(), 204


@api.route('/user/profile', defaults={'username': None})
@api.route('/user/profile/<username>')
@jwt_required(optional=True)
def profileUser(username):
    if not username and get_jwt_identity(): username = User.query.get(current_user.id).username 

    userQuery = User.query.filter_by(username=username).one_or_none()

    if not userQuery: raise APIException("User profile not found", status_code=404)

    return jsonify(UserSchema(exclude=['email', 'is_active']).dump(userQuery)), 200


@api.route('/user/check', methods=['GET'])
@jwt_required()
def checkUserToken(): return jsonify(get_jwt_identity()), 200


@api.route('/users/message', methods=['POST'])
@jwt_required()
def sendMessage():
    if not request.data or request.is_json is not True: raise APIException('Missing JSON object', status_code=400)

    data = request.json
    messageSchema = MessageSchema()

    try: message = messageSchema.load(data)
    except ValidationError as err: raise APIException(err.messages, status_code=422)

    fromUser = User.query.get(current_user.id)
    message.sender_user_id = fromUser.id

    toUser = User.query.filter_by(id=message.receiver_user_id).one_or_none()
    if not toUser: raise APIException("User not found to send message", status_code=404)

    message.receiver_user_id = toUser.id
    
    db.session.add(message)
    db.session.commit()

    return jsonify({
        "message": "Successful operation"
    }), 201


@api.route('/users/forgot_password', methods=['POST'])
def forgotPassword():
    if not request.data or request.is_json is not True: raise APIException('Missing JSON object', status_code=400)

    body = request.json

    # Verificar si llegó el parametro email
    email = body.get("email")
    if not email: raise APIException("Missing data for email field", status_code=422)

    # Buscar coincidencia de usuario con el mismo email
    userQuery = User.query.filter_by(email=email).one_or_none()

    # Si existe el usuario con ese email
    #########################################################
    if userQuery:
        expiration = timedelta(minutes=15)
        token = create_access_token(identity=userQuery, expires_delta=expiration)
        token = token.replace(".", "$")

        msg = Message("[BeGamer] Reset Your Password",
            sender="begamer.appcr@gmail.com",
            recipients=[userQuery.email]
        )

        msg.html = 'This link is only valid for 15 minutes. To reset your password, visit the following link: <a href="{url}">Click Here!</>'\
            .format(url=urlparse('{url}/change_password/{token}'.format(url=os.environ.get('FRONTEND_URL'), token=token)).geturl())

        current_app.mail.send(msg)
    ########################################################

    return jsonify({
        "message": "An email has been sent with instructions to reset your password"
    }), 200


@api.route('/users/change_password', methods=['POST'])
@jwt_required()
def changePassword():
    if not request.data or request.is_json is not True: raise APIException('Missing JSON object', status_code=400)

    # Verificar si existe el usuario con el Id que se recibe con el JWT Token
    userQuery = User.query.filter_by(id=current_user.id).one_or_none()
    if not userQuery: raise APIException("User not found", status_code=404)

    body = request.json

    password = body.get("password")
    confirmPassword = body.get("confirm_password")

    # Verificar que las passwords estén y que sean iguales
    if not password and not confirmPassword: raise APIException("Missing data for password or confirm_password field", status_code=422)
    if password != confirmPassword: raise APIException("Your password and confirmation password do not match", status_code=400)

    # Generar nueva contraseña y actualizar
    userQuery.gen_hash_password(password)
    db.session.commit()

    return jsonify(), 204
