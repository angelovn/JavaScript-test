function validate() {
  let emailPattern = /[a-z]+@[a-z]+.[a-z]+/g;
  let inputField = document.getElementById("email");
  inputField.addEventListener("change", (e) => {
    if (!emailPattern.test(inputField.value)) {
      inputField.classList.add("error");
    } else {
      inputField.classList.remove("error");
    }
  });
}
