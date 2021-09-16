from flask import Flask, json, jsonify, render_template, request
from random import randint
from forms import apiRequest
app = Flask(__name__)
import requests

@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

@app.route('/api/get-lucky-num', methods=['GET', 'POST'])
def get_lucky_num():
    num = randint(1,100)
    year = request.args.get('year', 1990)
    print(request.args,'args***')
    print(request.form,'form***')
    trivia_data = requests.get(f'http://numbersapi.com/{num}/trivia')
    year_data = requests.get(f'http://numbersapi.com/{year}/year')
    data = { 'num': {
        'fact': trivia_data.text,
        'num' : num },
        'year': {
            'fact': year_data.text,
            'year': year
        }}
    return jsonify(data=data)