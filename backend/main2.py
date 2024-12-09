from flask import Flask, request, jsonify
from groq import Groq
from flask_cors import CORS
from app.controller.chatbot import chatbot

# Tạo ứng dụng Flask
app = Flask(__name__)
CORS(app)

# Endpoint API
@app.route('/chatbot', methods=['POST'])
def chat():
    chatbot()

# Chạy ứng dụng Flask
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
