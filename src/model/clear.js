export function clearText() {
  let text_area = document.getElementById("text");

  if (text_area.value !== "") {
    text_area.value = "";
  } else return;
}
