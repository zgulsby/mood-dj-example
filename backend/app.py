from flask import Flask, request, jsonify
from flask_cors import CORS

# TODO: add imports to call the model here

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
    playlist = get_playlist_by_mood(mood)

    return jsonify({"mood": mood, "playlist": playlist})

def get_playlist_by_mood(mood):

    # TODO: make a call to our model to generate the playlist based on the mood
    # For now, we will return a static playlist
    playlist = [
        {"title": "Never Meant", "artist": "American Football"},
        {"title": "The Summer Ends", "artist": "American Football"},
        {"title": "Honestly?", "artist": "American Football"},
        {"title": "Stay Home", "artist": "American Football"},
        {"title": "For Sure", "artist": "American Football"},
        {"title": "The Night I Drove Alone", "artist": "Citizen"},
        {"title": "Your Graduation", "artist": "Modern Baseball"},
        {"title": "Twin Size Mattress", "artist": "The Front Bottoms"},
        {"title": "Constant Headache", "artist": "Joyce Manor"},
        {"title": "I Miss You", "artist": "Blink-182"},
    ]

    return playlist

if __name__ == "__main__":
    app.run(port=3001, debug=True)