import { useState } from "react";
import axios from "axios";
import "./TextToSpeech.css";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleChangeToVoice = async (e) => {
    e.preventDefault();
    if (!text) {
      setError("Vui lòng nhập nội dung");
      return;
    }
    setLoading(true);
    setError(null);
    setAudioUrl(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/text-to-speech",
        { message: text },
        {
          responseType: "blob",
        }
      );
      setText("");
      // Tạo URL cho file audio MP3 từ blob
      const audioBlob = response.data;
      const aUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(aUrl);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tts-page">
      <h1 style={{ color: "#fafafa" }}>Chuyển văn bản thành giọng nói</h1>

      <textarea
        className="text-area"
        value={text}
        onChange={handleTextChange}
        placeholder="Hãy nhập văn bản vào đây"
      />

      <button
        className="change-btn"
        type="button"
        disabled={loading}
        onClick={handleChangeToVoice}
      >
        {loading ? "Đang tạo..." : "Chuyển thành giọng nói"}
      </button>

      {error && <p className="error">{error}</p>}

      {audioUrl && (
        <div className="voice">
          <h2>Giọng nói đã được tạo:</h2>
          <audio controls>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default TextToSpeech;
