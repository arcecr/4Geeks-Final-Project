from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

import enum

class Gender(enum.Enum):
    Male = "male"
    Female = "female"


class User(db.Model):
    id = db.Column(db.Integer, unique=True, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    name = db.Column(db.String(80), nullable=False)
    gender = db.Column(db.Enum(Gender))
    birthday = db.Column(db.Date, nullable=False)
    is_active = db.Column(db.Boolean(), nullable=False)
    
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
        db.UniqueConstraint('user_from_id', 'user_to_id'),
        db.CheckConstraint('user_from_id <> user_to_id')
    )
    id = db.Column(db.Integer, unique=True, primary_key=True)
    user_from_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    user_to_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    
    user_from = db.relationship("User", foreign_keys=user_from_id, backref="following")
    user_to = db.relationship("User", foreign_keys=user_to_id, backref="followers")

    def __repr__(self):
        return '<Follow from=%r to=%r>' % (self.user_from.username, self.user_to.username)


class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_from_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    user_to_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    content = db.Column(db.String(250), nullable=False)
    created_date = db.Column(db.DateTime, nullable=False)

    user_from = db.relationship("User", foreign_keys=user_from_id)
    user_to = db.relationship("User", foreign_keys=user_to_id)

    def __repr__(self):
        return '<Message from=%r to=%r>' % (self.user_from.username, self.user_to.username)