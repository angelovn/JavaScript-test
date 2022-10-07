function notify(message) {
  let container = document.querySelector("#notification");
  container.innerText = message;
  container.style.display = "block";
  if (container.style.display === "block") {
    container.addEventListener("click", (e) => {
      container.style.display = "none";
    });
  }
}
