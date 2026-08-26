let voices = [];
let select_lang = document.getElementById("speech-lang");

export function allvoices() {
  // clear existing options to prevent duplicates option entries
  // if onvoicechanged fires multiple times.
  select_lang.innerHTML = "";

  // get the voices
  voices = window.speechSynthesis.getVoices();

  // loop through each voice returned and turn it into a selectable
  // option.
  voices.forEach((voice, index) => {
    // get the options
    const OPTION = new Option(`${voice.name} ${voice.lang}`, index);
    // add the voice options to the select area
    select_lang.add(OPTION);
  });
}

// listen for async voice loading to prevent the voices from
// failing to load
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = allvoices;
}

allvoices();

export function convertTextToSpeech() {
  // get the text area
  const TEXT_AREA = document.getElementById("text");

  // if the voice is speaking remove voice
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  // get the new sound object
  const SPEECH = new SpeechSynthesisUtterance(TEXT_AREA.value);

  // attach the selected voice to to the user's choice
  if (voices.length > 0) {
    const selectedVoiceIndex = select_lang.value;
    SPEECH.voice = voices[selectedVoiceIndex];
  }

  window.speechSynthesis.speak(SPEECH);
}
