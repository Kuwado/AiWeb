from llama_cpp import Llama

# Khởi tạo mô hình
llm = Llama(model_path="./models/pytorch_model.bin")


print("Chatbot đã sẵn sàng. Nhập 'thoát' hoặc 'exit' để kết thúc.\n")

while True:
    # Nhập câu hỏi từ người dùng
    user_input = input("Bạn: ")
    
    # Kiểm tra điều kiện thoát
    if user_input.lower() in ["thoát", "exit", "bye"]:
        print("Chatbot: Tạm biệt! Chúc bạn một ngày tốt lành!")
        break
    
    # Tạo phản hồi từ mô hình
    prompt = f"""<|im_start|>system
You are a helpful chatbot.
<|im_end|>
<|im_start|>user
{user_input}<|im_end|>
<|im_start|>assistant"""

    output = llm.create_completion(
        prompt=prompt,
        max_tokens=500,        # Số token tối đa cho phản hồi
        stop=["<|im_end|>"],   # Dừng khi gặp chuỗi "<|im_end|>"
        stream=True            # Stream phản hồi theo từng token
    )

    print("Chatbot:", end=" ", flush=True)
    # In phản hồi từng token
    for token in output:
        print(token["choices"][0]["text"], end="", flush=True)
    print("\n")  # Xuống dòng sau khi in phản hồi
