from gtts import gTTS
import os
import uuid

def text_to_speech(text, lang='vi'):
    """
    Chuyển văn bản thành âm thanh và lưu vào file mp3.
    """
    try:
        # Tạo tên file ngẫu nhiên để lưu
        file_name = f"{uuid.uuid4()}.mp3"
        # file_path = os.path.join("output", file_name)

        # Chuyển đổi văn bản thành giọng nói
        tts = gTTS(text=text, lang='vi', slow=False)
        file_path = "output.mp3"
        tts.save(file_path)

        return file_path
    except Exception as e:
        raise ValueError(f"Error in text-to-speech conversion: {str(e)}")
