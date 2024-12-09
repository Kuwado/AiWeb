import { useState } from "react";
import axios from "axios";
import { marked } from "marked";

import ChatbotResponse from "./ChatbotResponse";
import "./Chatbot.css";
import UserMessage from "./UserMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  console.log(messages);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("http://localhost:5000/chatbot", {
        message: input,
      });

      const botMessage = {
        role: "bot",
        content: response.data.response || "Không có phản hồi.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const formatText = (text) => {
    return marked(text);
  };

  return (
    <div className="chatbot">
      <div className="box-body">
        {messages.length === 0 && (
          <h2 style={{ textAlign: "center" }}>Xin chào bạn</h2>
        )}

        {messages.length > 0 &&
          messages.map((message, index) => {
            return message.role === "user" ? (
              <UserMessage key={index} message={message.content} />
            ) : (
              <ChatbotResponse
                key={index}
                message={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: formatText(message.content),
                    }}
                  />
                }
              />
            );
          })}
      </div>

      <div className="box-input">
        <input
          type="text"
          name="question"
          id="question"
          placeholder="Bạn muốn hỏi gì?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button type="button" className="send-btn" onClick={handleSend}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
