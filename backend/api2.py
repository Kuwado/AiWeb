from gtts import gTTS
import os

text = "Chúc bạn một ngày tốt lành nhó"
tts = gTTS(text=text, lang='vi', slow=False)
tts.save("output.mp3")
os.system("start output.mp3")  # Để phát file trên hệ điều hành Windows
