from flask import Blueprint, request, jsonify
from app.services.chatbot_service import chat_with_bot

def chatbot():
    try:
        data = request.json
        user_input = data.get("message", "")

        if not user_input:
            return jsonify({"error": "Message is required"}), 400

        response = chat_with_bot(user_input)
        return jsonify({"response": response}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
