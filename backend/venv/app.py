from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/", methods=["GET"])
def home():
    return "🎵 Music Backend is running! ✨"

@app.route("/playlist", methods=["POST"])
def get_playlist():
    data = request.get_json()
    mood = data.get("mood", "neutral")

    playlist = get_playlist_by_mood(mood)

    if not playlist:
        return jsonify({"error": "No playlist found for the given mood."}), 404

    return jsonify({"mood": mood, "playlist": playlist})


def get_playlist_by_mood(mood):
    # TODO: replace me with a call to the the Models API
    # to get the playlist based on the mood
    # For now, we will return a static playlist for demonstration purposes

    playlist = [
      {"title": "Walking on Sunshine", "artist": "Katrina & The Waves"},
      {"title": "Happy", "artist": "Pharrell Williams"},
      {"title": "I Wanna Dance with Somebody", "artist": "Whitney Houston"},
      {"title": "Good Vibrations", "artist": "The Beach Boys"},
      {"title": "Uptown Funk", "artist": "Mark Ronson ft. Bruno Mars"},
      {"title": "Can't Stop the Feeling!", "artist": "Justin Timberlake"},
      {"title": "Shake It Off", "artist": "Taylor Swift"},
      {"title": "Don't Stop Believin'", "artist": "Journey"},
      {"title": "Dancing Queen", "artist": "ABBA"},
      {"title": "I Got You (I Feel Good)", "artist": "James Brown"}
    ]

    return playlist

if __name__ == "__main__":
    app.run(port=3001, debug=True)