import Chatbot from "./Chatbot/Chatbot";
import TextToSpeech from "./TextToSpeech";
import TextToImage from "./TextToImage/TextToImage";

const pages = {
  chat: <Chatbot />,
  textToSpeech: <TextToSpeech />,
  textToImage: <TextToImage />,
};

export default pages;
