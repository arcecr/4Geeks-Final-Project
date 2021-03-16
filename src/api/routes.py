from flask import Flask, request, jsonify, url_for, Blueprint
from api.utils import APIException

from marshmallow import ValidationError
from sqlalchemy import or_
from api.models import db, User, Follower, UserGame, Message
from api.serializer import UserSchema, UserGameSchema, MessageSchema


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
        "message": "Successful operation"
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

    return jsonify({
        "access_token": "secret" # JWT User Token
    }), 200


@api.route('/users/follow', methods=['POST', 'DELETE'])
def followUser():
    if not request.data or request.is_json is not True: raise APIException('Missing JSON object', status_code=400)

    data = request.json

    user_id = data.get("user_id", None)
    username = data.get("username", None)

    if not user_id: raise APIException("Missing data for user_id field.", status_code=422)
    if not username: raise APIException("Missing data for username field.", status_code=422)

    fromUser = User.query.get(1) # Current JWT User
    
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
def userGames():
    ########################################
    if request.method == "GET":
        userGames = UserGame.query.filter_by(user_id=1).all() # Current JWT User

        return jsonify(UserGameSchema(many=True, exclude=['id']).dump(userGames)), 200
    ########################################

    if not request.data or request.is_json is not True: raise APIException('Missing JSON object', status_code=400)

    data = request.json

    gameId = data.get("game_id", None)
    if not gameId: raise APIException("Missing data for game_id field.", status_code=422)

    hasGame = UserGame.query.filter_by(user_id=1, game_id=gameId).first() # Current JWT User

    ########################################
    if request.method == "POST":
        if hasGame: raise APIException("You already have this game in your list", status_code=409)

        newUserGame = UserGame(user_id=1, game_id=gameId) # Current JWT User
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
def profileUser(username):
    if not username:
        username = User.query.filter_by(id=1).first().username # Check with JWT Token

    userQuery = User.query.filter_by(username=username).first()

    if not userQuery: raise APIException("User profile not found", status_code=404)

    return jsonify(UserSchema().dump(userQuery)), 200


@api.route('/user/check', methods=['GET'])
def checkUserToken():
    pass


@api.route('/user/profile', methods=['PUT'])
def updateUserProfile():
    pass


@api.route('/users/message', methods=['POST'])
def sendMessage():
    pass


@api.route('/users/resetpassword', methods=['POST'])
def resetPassword():
    pass


@api.route('/users/resetpassword/<token>', methods=['POST'])
def resetPasswordWithToken(token):
    pass