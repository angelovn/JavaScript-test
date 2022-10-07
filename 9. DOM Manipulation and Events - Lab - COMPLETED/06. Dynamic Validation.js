function validate() {
  let input = document.getElementById("email");
  function checkEmail(e) {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/g.test(e.target.value);
    if (pattern) {
      e.target.className = "";
      return true;
    } else {
      e.target.className = "error";
      return false;
    }
  }
  input.addEventListener("change", checkEmail);
}
