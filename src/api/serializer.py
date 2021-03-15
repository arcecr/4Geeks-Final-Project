from flask_marshmallow import Marshmallow
from marshmallow_enum import EnumField

from .models import Gender, User, UserGame, Follower # Models

ma = Marshmallow()

def configure(app):
    ma.init_app(app)


class UserGameSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = UserGame


class UserSchema(ma.SQLAlchemyAutoSchema):
    gender = EnumField(Gender, by_value=True, required=True)
    games = ma.Nested(UserGameSchema, many=True, only=['game_id'])
    followers = ma.List(ma.Nested("FollowerSchema", only=['user_from']))
    following = ma.List(ma.Nested("FollowerSchema", only=['user_to']))

    class Meta:
        model = User
        load_instance = True

    password = ma.Field(load_only=True, required=True)


class FollowerSchema(ma.SQLAlchemySchema):
    follower = ma.Nested(UserSchema, only=['id', 'username'])
    followed = ma.Nested(UserSchema, only=['id', 'username'])

    class Meta:
        model = Follower