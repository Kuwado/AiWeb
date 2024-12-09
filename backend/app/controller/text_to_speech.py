from flask import request, jsonify, send_file
from app.services.text_to_speech_service import text_to_speech
from gtts import gTTS
import os

def generate_audio():
    try:
        # Nhận dữ liệu từ request
        data = request.json
        text = data.get('message', '')

        if not text:
            return jsonify({"error": "Text is required"}), 400

        file_path = text_to_speech(text)

        return send_file(file_path, mimetype="audio/mpeg")

    except Exception as e:
        return jsonify({"error": str(e)}), 500