export let allVoices = [];
const SELECT_FIELD = document.getElementById("speech-lang");
let currenSpeech = null;

/* PopulateVoices Function */
export function populateVoices() {
  // clear the previous field
  SELECT_FIELD.innerHTML = "";

  allVoices = window.speechSynthesis.getVoices();
  // retrieve all available voice
  allVoices.forEach((voice, index) => {
    const status = voice.localService ? "" : " (Online)";
    let option = new Option(`${voice.name} - ${voice.lang} ${status}`, index);

    if (voice.default) {
      option.selected = true;
    }
    SELECT_FIELD.append(option);
  });
}

// populate when the browser fires the event
window.speechSynthesis.onvoiceschanged = populateVoices;

/* === */
/* convertTextToSpeech Function */
export function convertTextToSpeech() {
  let listen = document.querySelector(".listen-speech");
  const TEXT_AREA = document.getElementById("text");
  const TEXT_AREA_VALUE = TEXT_AREA.value;

  // if text is already speaking before click, then cancel text
  // and do nothing
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    listen.textContent = "Listen";
    return;
  }

  // get the speechSynthesisUtterance API
  currenSpeech = new SpeechSynthesisUtterance(TEXT_AREA_VALUE);

  // if text area value is empty, do nothing
  if (TEXT_AREA_VALUE === "") {
    return;
  }

  const selectIndexField = SELECT_FIELD.value;
  if (allVoices[selectIndexField]) {
    currenSpeech.voice = allVoices[selectIndexField];
  }

  // change listen to speaking(||)
  listen.textContent = "||";

  currenSpeech.onerror = (event) => {
    console.log("Speech Synthesis Error", event.error);
    alert(`Voice failed to speak: ${event.error}`);
    listen.textContent = "Listen";
  };

  // if it has finished speaking, the change the || to Listen
  currenSpeech.onend = () => {
    listen.textContent = "Listen";
  };

  //  default speaking
  window.speechSynthesis.speak(currenSpeech);
}
