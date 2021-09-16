from wtforms import Form, BooleanField, StringField, validators



class apiRequest(Form):
    name = StringField('Name')
    year = StringField('Birth Year')
    email = StringField('Email')
    color = StringField('Color')