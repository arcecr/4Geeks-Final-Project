from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

import enum
import datetime

class Gender(enum.Enum):
    Male = "male"
    Female = "female"


class User(db.Model):
    id = db.Column(db.Integer, unique=True, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    gender = db.Column(db.Enum(Gender, values_callable=lambda obj: [e.value for e in obj]), nullable=False)
    birthday = db.Column(db.Date, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    is_active = db.Column(db.Boolean(), default=True, nullable=False)

    def gen_hash_password(self, password=None):
        if password:
            self.password = generate_password_hash(password, "sha256")
        else:
            self.password = generate_password_hash(self.password, "sha256")

    def verify_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return '<User name=%r>' % self.username


class UserGame(db.Model):
    __table_args__ = (
        db.UniqueConstraint('user_id', 'game_id'),
    )
    id = db.Column(db.Integer, unique=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    game_id = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", backref="games")

    def __repr__(self):
        return '<UserGame id=%r>' % self.game_id


class Follower(db.Model):
    __table_args__ = (
        db.UniqueConstraint('follower_id', 'followed_id'),
        db.CheckConstraint('follower_id <> followed_id')
    )
    id = db.Column(db.Integer, unique=True, primary_key=True)
    follower_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    followed_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)

    follower = db.relationship("User", foreign_keys=follower_id, backref="following")
    followed = db.relationship("User", foreign_keys=followed_id, backref="followers")

    def __repr__(self):
        return '<Follow follower=%r followed=%r>' % (self.follower.username, self.followed.username)


class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    sender_user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    receiver_user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_date = db.Column(db.DateTime, default=datetime.datetime.now, nullable=False)

    sender_user = db.relationship("User", foreign_keys=sender_user_id)
    receiver_user = db.relationship("User", foreign_keys=receiver_user_id)

    def __repr__(self):
        return '<Message sender=%r receiver=%r>' % (self.sender_user.username, self.receiver_user.username)