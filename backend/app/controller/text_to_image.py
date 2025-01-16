from flask import request, jsonify, send_file
from app.services.text_to_image_service import text_to_image
from gtts import gTTS
import os
import asyncio


def generate_image():
    try:
        # Nhận dữ liệu từ request
        data = request.json
        text = data.get("message", "")

        if not text:
            return jsonify({"error": "Text is required"}), 400

        image_url = asyncio.run(text_to_image(text))

        return jsonify({"imageUrl": image_url}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500
