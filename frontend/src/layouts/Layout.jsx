import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./Layout.css";
import pages from "../pages";

const Layout = () => {
  return (
    <Router>
      <div className="layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/chatbot" element={pages.chat} />
            <Route path="/text-to-speech" element={pages.textToSpeech} />
            <Route path="/text-to-image" element={pages.textToImage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Layout;
