import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faImage,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link
        to="/chatbot"
        className={`sidebar-item ${
          location.pathname === "/chatbot" ? "active" : ""
        }`}
      >
        <div className="icon">
          <FontAwesomeIcon icon={faCommentDots} />
        </div>
        <div className="title">Chatbot</div>
      </Link>

      <Link
        to="/text-to-speech"
        className={`sidebar-item ${
          location.pathname === "/text-to-speech" ? "active" : ""
        }`}
      >
        <div className="icon">
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
        <div className="title">Văn bản thành giọng nói</div>
      </Link>

      <Link
        to="/text-to-image"
        className={`sidebar-item ${
          location.pathname === "/text-to-image" ? "active" : ""
        }`}
      >
        <div className="icon">
          <FontAwesomeIcon icon={faImage} />
        </div>
        <div className="title">Văn bản thành hình ảnh</div>
      </Link>
    </div>
  );
};

export default Sidebar;
