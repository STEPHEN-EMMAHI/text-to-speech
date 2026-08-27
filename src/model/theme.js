export function systemThemeChange(e) {
  if (e.matches) {
    darkMode();
  } else {
    lightMode();
  }
}

function lightMode() {}

function darkMode() {
  const CONTAINER = document.querySelector(".container");
  const H1 = document.querySelector(".heading");

  // remove the black text on h1 and add the white text on h1
  H1.classList.add("text-white");
  H1.classList.remove("text-zinc-900");

  // add the remove the white background on body and add the white text on h1
  CONTAINER.classList.remove("bg-white");
  CONTAINER.classList.add("bg-zinc-900");
}
