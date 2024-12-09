from groq import Groq

# Khóa API
client = Groq(api_key="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")

def chat_with_bot(user_input):
    messages = [{"role": "user", "content": user_input}]
    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=messages,
        temperature=1,
        max_tokens=1024,
        top_p=1,
        stream=False,
        stop=None,
    )
    return completion.choices[0].message.content
