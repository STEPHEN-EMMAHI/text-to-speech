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

  // get the speech API
  const SPEECH = new SpeechSynthesisUtterance(TEXT_AREA_VALUE);

  // if text area value is empty, do nothing
  if (TEXT_AREA_VALUE === "") {
    return;
  }

  // change listen to speaking(||)
  listen.textContent = "||";

  // speak
  window.speechSynthesis.speak(SPEECH);

  // if it has finished speaking, the change the || to Listen
  SPEECH.onend = () => {
    listen.textContent = "Listen";
  };
}
