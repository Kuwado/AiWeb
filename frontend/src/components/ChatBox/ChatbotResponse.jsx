import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

const ChatbotResponse = ({ message }) => {
  return (
    <div className="chat-response">
      <span className="icon">
        <FontAwesomeIcon icon={faBrain} />
      </span>
      <span className="message">{message}</span>
    </div>
  );
};

export default ChatbotResponse;
