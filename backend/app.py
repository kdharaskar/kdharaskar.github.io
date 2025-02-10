from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
# Enable CORS so the Next.js frontend can access the API
CORS(app)

def load_resume():
    # Construct the full path to resume.json in the same directory as this file
    json_path = os.path.join(os.path.dirname(__file__), 'resume.json')
    with open(json_path, 'r') as file:
        data = json.load(file)
    return data

@app.route('/api/resume', methods=['GET'])
def get_resume():
    # Load data from the JSON file
    resume_data = load_resume()
    return jsonify(resume_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)