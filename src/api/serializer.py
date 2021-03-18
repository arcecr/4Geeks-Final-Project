from flask_marshmallow import Marshmallow
from marshmallow_enum import EnumField
from marshmallow import fields

from .models import Gender, User, UserGame, Follower, Message # Models

ma = Marshmallow()

def configure(app):
    ma.init_app(app)


class UserGameSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = UserGame


class UserSchema(ma.SQLAlchemyAutoSchema):
    gender = EnumField(Gender, by_value=True, required=True)
    games = ma.Nested(UserGameSchema, many=True, only=['game_id'])
    followers = ma.List(ma.Nested("FollowerSchema", only=['follower']))
    following = ma.List(ma.Nested("FollowerSchema", only=['followed']))

    class Meta:
        model = User
        load_instance = True

    password = ma.Field(load_only=True, required=True)


class FollowerSchema(ma.SQLAlchemySchema):
    follower = ma.Nested(UserSchema, only=['id', 'username'])
    followed = ma.Nested(UserSchema, only=['id', 'username'])

    class Meta:
        model = Follower


class MessageSchema(ma.SQLAlchemyAutoSchema):
    user_from = ma.Nested(UserSchema, only=['id', 'username'])
    user_to = ma.Nested(UserSchema, only=['id', 'username'])
    class Meta:
        model = Message
        load_instance = True
    
    sender_user_id = fields.Integer()
    receiver_user_id = fields.Integer(required=True)