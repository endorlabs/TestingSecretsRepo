from flask import Flask, json
import requests

app = Flask(__name__)

@app.route("/")
def hello_world():
    ak_flask_token="ak-sec-1234567890"
    return "<p>Flask says Hello!!</p>"

@app.route("/ditto")
def ditto():
    res = requests.get("https://pokeapi.co/api/v2/pokemon/ditto")
    return res.text

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
