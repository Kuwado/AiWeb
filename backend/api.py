from flask import Flask, request, jsonify
from groq import Groq
from flask_cors import CORS

# Tạo ứng dụng Flask
app = Flask(__name__)
CORS(app)

# Khóa API
client = Groq(
    api_key="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",
)

# Hàm trò chuyện với chatbot
def chat_with_bot(user_input):
    messages = [
        {
            "role": "user",
            "content": user_input
        },
    ]

    # Gửi yêu cầu đến Groq API
    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=messages,
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=False,
        stop=None,
    )

    # Trả về nội dung phản hồi
    return completion.choices[0].message.content

# Endpoint API
@app.route('/chatbot', methods=['POST'])
def chat():
    try:
        # Nhận dữ liệu từ yêu cầu
        data = request.json
        user_input = data.get("message", "")

        if not user_input:
            return jsonify({"error": "Message is required"}), 400

        # Gửi câu hỏi đến chatbot
        response = chat_with_bot(user_input)

        # Trả về phản hồi từ chatbot
        return jsonify({"response": response}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Chạy ứng dụng Flask
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
