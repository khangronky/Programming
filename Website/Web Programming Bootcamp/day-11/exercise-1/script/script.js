function togglePattern() {
  let pattern = document.querySelector("#pattern");
  if (pattern.style.display == "") pattern.style.display = "block";
  else if (pattern.style.display == "block") pattern.style.display = "";
}