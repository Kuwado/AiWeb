from groq import Groq
import os
import datetime

# Khóa API
client = Groq(
    api_key="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",
)

# Đọc dữ liệu từ file resume và job description
with open('resume.txt', 'r') as resume_file:
    resume = resume_file.read()

with open('jobDescription.txt', 'r') as job_description_file:
    jobDescription = job_description_file.read()

# Hàm trò chuyện với chatbot
def chat_with_bot(user_input):
    # Gửi câu hỏi từ người dùng và nhận câu trả lời từ chatbot
    messages = [
        {
            "role": "user",
            "content": user_input
        },
    ]

    # Thực hiện yêu cầu trò chuyện
    completion = client.chat.completions.create(
        # model="llama3-70b-8192",
        model="llama-3.3-70b-versatile",
        messages=messages,
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=False,
        stop=None,
    )

    # Trả về câu trả lời từ chatbot
    return completion.choices[0].message.content

# Vòng lặp trò chuyện, người dùng nhập câu hỏi và chatbot trả lời
while True:
    user_input = input("Bạn: ")
    
    if user_input.lower() in ["thoát", "exit", "bye"]:
        print("Chatbot: Tạm biệt!")
        break
    
    # Gửi câu hỏi của người dùng và nhận câu trả lời từ chatbot
    response = chat_with_bot(user_input)
    
    # In câu trả lời của chatbot ra màn hình
    print("Chatbot:", response)
