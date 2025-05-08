from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/", methods=["GET"])
def home():
    return "Backend is running!"

@app.route("/playlist", methods=["POST"])
def get_playlist():
    data = request.get_json()
    mood = data.get("mood", "neutral")
    # Simulate a playlist response based on mood
    playlist = [
        {"title": "Happy Song", "artist": "Artist A"},
        {"title": "Chill Vibes", "artist": "Artist B"},
    ]
    return jsonify({"mood": mood, "playlist": playlist})

if __name__ == "__main__":
    app.run(port=3001, debug=True)