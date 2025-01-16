import { useState } from "react";
import axios from "axios";
import "./TextToImage.css";

const TextToImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleChangeToImage = async (e) => {
    e.preventDefault();
    if (!text) {
      setError("Vui lòng nhập nội dung");
      return;
    }
    setLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const response = await axios.post("http://localhost:5000/text-to-image", {
        message: text,
      });
      console.log(response);
      setText("");
      setImageUrl(response.data.imageUrl);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tti-page">
      <h1 style={{ color: "#fafafa" }}>Chuyển văn bản thành hình ảnh</h1>

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
        onClick={handleChangeToImage}
      >
        {loading ? "Đang tạo..." : "Chuyển thành hình ảnh"}
      </button>

      {error && <p className="error">{error}</p>}

      {imageUrl && (
        <div className="image">
          <img src={imageUrl} alt="" />
        </div>
      )}
    </div>
  );
};

export default TextToImage;
