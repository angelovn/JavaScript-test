function toggle() {
  let button = document.getElementsByClassName("button")[0];
  let text = document.getElementById("extra");
  if (text.style.display === "none") {
    text.style.display = "block";
    button.innerText = "Less";
  } else {
    text.style.display = "none";
    button.innerText = "More";
  }
}
