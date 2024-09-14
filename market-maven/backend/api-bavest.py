import os
import requests
import json
import time
import datetime
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

def to_json(obj):
    return json.dumps(obj, default=lambda obj: obj.__dict__)

#access api token 
with open(os.path.dirname(__file__) + '/api-config.json') as api_config_file:
    config = json.load(api_config_file)
api_key = config['api_key']

app = Flask(__name__)
#allow for port accessibility
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# payload = { "symbol": "DJIA" }
# headers = {
#     "accept": "application/json",
#     "content-type": "application/json",
#     "x-api-key": api_key
# }

# response = requests.post("https://api.bavest.co/v0/stock/news", json=payload, headers=headers)
# # Parse the JSON response
# parsed_data = response.json()

# @app.route('/get-news', methods=['GET', 'OPTIONS'])
# @cross_origin()
# def get_news():
#     articles = [] #store teams
#     articles = json.loads(response.text)
#     articles_dom = []
#     for i in range(10):
#         articles_dom.append(articles[i])
#         articles_dom[i]['text'] = (articles_dom[i]['text'][0:100] if len(articles_dom[i]['text']) > 100 else articles_dom[i]['text']) + '...'
    
#     return to_json(articles_dom)

curr_time = int(time.time())
prev_time = int(time.time()) - 115200
freq = "1"

payload = {
    "symbol": "AAPL",
    "from": prev_time,
    "to": curr_time,
    "resolution": freq,
    "currency": "USD"
  }
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "x-api-key": api_key
}

response = requests.post("https://api.bavest.co/v0/candle", json=payload, headers=headers)

parsed_data = response.json()

@app.route('/get-prices', methods=['GET', 'OPTIONS'])
@cross_origin()
def get_price():

    price = json.loads(response.text)
    
    return to_json(price)

if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host="0.0.0.0", port=5000, debug=True)