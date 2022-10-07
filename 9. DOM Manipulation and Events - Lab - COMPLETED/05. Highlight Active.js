function focused() {
  let boxes = Array.from(document.getElementsByTagName("input"));
  boxes.forEach((el) => {
    el.addEventListener("focus", colorBox);
  });
  boxes.forEach((el) => {
    el.addEventListener("blur", notColoredBox);
  });
  function colorBox(e) {
    e.currentTarget.parentNode.classList.toggle("focused");
  }
  function notColoredBox(e) {
    e.currentTarget.parentNode.classList.toggle("focused");
  }
}
