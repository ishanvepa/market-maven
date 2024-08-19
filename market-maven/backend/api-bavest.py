import os
import requests
import json
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

payload = { "symbol": "NVDA" }
url = "https://api.bavest.co/v0/sentiment/social"
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "x-api-key": api_key
}

response = requests.post(url, json=payload, headers=headers)
# Parse the JSON response
parsed_data = response.json()

@app.route('/get-sentiment', methods=['GET', 'OPTIONS'])
@cross_origin()
def get_sentiment():
    return to_json(response.text)




if __name__ == '__main__':
    # app.run(debug=True)
    app.run(host="0.0.0.0", port=5000, debug=True)