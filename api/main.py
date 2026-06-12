import os
import requests
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
# from mongo_client import insert_test_document

load_dotenv(".env.local")
UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.getenv("UNSPLASH_KEY")
# DEBUG=bool(os.getenv("DEBUG", True))

app = Flask(__name__)
CORS(app)
# insert_test_document()

@app.route('/new-image')
def new_image():
    if not UNSPLASH_KEY:
        return jsonify({"error": "UNSPLASH_KEY not set"}), 500

    word = request.args.get('query')
    if not word:
        return jsonify({"error": "Missing query parameter"}), 400

    headers = {
        "Accept-Version": "v1",
        "Authorization": f"Client-ID {UNSPLASH_KEY}"
    }

    try:
        response = requests.get(
            url=UNSPLASH_URL,
            headers=headers,
            params={"query": word},
            timeout=10
        )
        response.raise_for_status()
        return jsonify(response.json())
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5050, debug=True)