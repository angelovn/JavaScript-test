function deleteByEmail() {
  let rows = Array.from(document.getElementsByTagName("tr"));
  rows.shift();
  let inputFieldVal = document.querySelector("input").value;
  let result = document.getElementById("result");
  rows.forEach((el, i) => {
    if (el.innerText.includes(inputFieldVal)) {
      el.remove();
      result.innerText = "Deleted.";
    } else {
      result.innerText = "Not found.";
    }
  });
}
