export function convertTextToSpeech() {
  const TEXT_AREA = document.getElementById("text");

  // check if there is a voice playing already and stop it.
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  // get the speech object
  const SPEECH = new SpeechSynthesisUtterance(TEXT_AREA.value);

  // finall speak
  if (TEXT_AREA.value === "") return;
  else {
    // speak
    window.speechSynthesis.speak(SPEECH);
  }
}
