import { clearText } from "../model/clear.js";
import {
  allVoices,
  convertTextToSpeech,
  populateVoices,
} from "../model/speech.js";
import { systemThemeChange } from "../model/theme.js";

// click to listen to text
const LISTEN_BTN = document.querySelector(".listen-speech");
LISTEN_BTN.addEventListener("click", convertTextToSpeech);

// change light and dark mode theme
const DARK_MODE = window.matchMedia("(prefers-color-scheme: dark)");
// run immediately on page load
systemThemeChange(DARK_MODE);
// add event listener when theme change
DARK_MODE.addEventListener("change", systemThemeChange);

// click clear to clear all the contents in the text area
const CLEAR = document.querySelector(".clear-all");
CLEAR.addEventListener("click", clearText);

// mobile browsers do not fire onvoiceChange.
// call it directly incase of different browser's loading
// synchronously
const SELECT_FIELD = document.getElementById("speech-lang");
SELECT_FIELD.addEventListener("focus", () => {
  if (allVoices.length === 0) {
    populateVoices();
  }
});
