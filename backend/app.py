from llama_cpp import Llama

# # Tương tác với chatbot
# while True:
#     prompt = input("Bạn: ")
#     if prompt.lower() in ["thoát", "exit", "bye"]:
#         print("Chatbot: Tạm biệt!")
#         break
#     response = llm(prompt)
#     print("Chatbot:", response["choices"][0]["text"])

llm = Llama(model_path="./models/vitral-7b-chat.Q4_K_M.gguf",
            n_gpu_layers=0, n_ctx=4096)

output = llm.create_completion("""<|im_start|>system
You are a helpful chatbot.
<|im_end|>
<|im_start|>user
Hello, tell me where can I learn Python?<|im_end|>
<|im_start|>assistant""", max_tokens=500,  stop=["<|im_end|>"], stream=True)

for token in output:
    print(token["choices"][0]["text"], end='', flush=True)