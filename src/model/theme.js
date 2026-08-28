export function systemThemeChange(e) {
  if (e.matches) {
    darkMode();
  } else {
    lightMode();
  }
}

function lightMode() {
  const CONTAINER = document.querySelector(".overall-container");
  const H1 = document.querySelector(".heading");
  const LABEL = document.querySelector(".label");

  // add color to required elements
  H1.classList.remove("text-white");
  H1.classList.add("text-zinc-900");

  LABEL.classList.remove("text-white");
  LABEL.classList.add("text-zinc-900");

  CONTAINER.classList.remove("bg-zinc-900");
  CONTAINER.classList.add("bg-white");
}

function darkMode() {
  const CONTAINER = document.querySelector(".overall-container");
  const H1 = document.querySelector(".heading");
  const LABEL = document.querySelector(".label");

  // add color to required elements
  H1.classList.remove("text-zinc-900");
  H1.classList.add("text-white");

  LABEL.classList.remove("text-zinc-900");
  LABEL.classList.add("text-white");

  CONTAINER.classList.remove("bg-white");
  CONTAINER.classList.add("bg-zinc-900");
}
