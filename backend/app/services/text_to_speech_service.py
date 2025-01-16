from gtts import gTTS

def text_to_speech(text, lang='vi'):
    try:
        # Chuyển đổi văn bản thành giọng nói
        tts = gTTS(text=text, lang=lang, slow=False)
        file_path = "output.mp3"
        tts.save(file_path)

        return file_path
    except Exception as e:
        raise ValueError(f"Error in text-to-speech conversion: {str(e)}")
