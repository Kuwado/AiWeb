import ChatbotResponse from "./ChatbotResponse";
import "./ChatBox.css";
import UserMessage from "./UserMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ChatBox = ({ messages = [] }) => {
  return (
    <div className="chat-box">
      <div className="box-body">
        {messages.length === 0 ?? <h2>Xin chào bạn</h2>}
        <ChatbotResponse message="hell dhgd ddo ddd ddde dfffd dd rrf rrr rderf rfr rfr rfrfr dhgd ddo ddd ddde dfffd dd rrf rrr rderf rfr rfr rfrfr" />
        <UserMessage message="hell dhgd ddo ddd ddde dfffd dd rrf rrr rderf rfr rfr rfrfr dhgd ddo ddd ddde dfffd dd rrf rrr rderf rfr rfr rfrfr" />
      </div>
      <div className="box-input">
        <input
          type="text"
          name="question"
          id="question"
          placeholder="Bạn muốn hỏi gì?"
        />
        <button type="button" className="send-btn">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
