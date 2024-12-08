import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const UserMessage = ({ message }) => {
  return (
    <div className="user-message">
      <span className="message">{message}</span>
      <span className="icon">
        <FontAwesomeIcon icon={faUser} />
      </span>
    </div>
  );
};

export default UserMessage;
