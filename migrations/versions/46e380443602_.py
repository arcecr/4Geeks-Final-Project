"""empty message

Revision ID: 46e380443602
Revises: efae95867efe
Create Date: 2021-03-10 15:54:58.874802

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '46e380443602'
down_revision = 'efae95867efe'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('message_user_from_id_key', 'message', type_='unique')
    op.drop_constraint('message_user_to_id_key', 'message', type_='unique')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint('message_user_to_id_key', 'message', ['user_to_id'])
    op.create_unique_constraint('message_user_from_id_key', 'message', ['user_from_id'])
    # ### end Alembic commands ###
