import { convertTextToSpeech } from "../model/speech.js";

// click to listen to text
const LISTEN_BTN = document.querySelector(".listen-speech");
LISTEN_BTN.addEventListener("click", convertTextToSpeech);
