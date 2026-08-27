import { convertTextToSpeech } from "../model/speech.js";
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
