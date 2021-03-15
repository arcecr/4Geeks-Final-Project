import os
from flask_admin import Admin

from flask_admin.contrib.sqla import ModelView

from .models import db, User, UserGame, Follower, Message

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'lux'
    admin = Admin(app, name='BeGamer Admin', template_mode='bootstrap4')
    
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(UserGame, db.session))
    admin.add_view(ModelView(Follower, db.session))
    admin.add_view(ModelView(Message, db.session))
