function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let input = document.getElementById("searchField");
    let val = input.value;
    let rows = Array.from(document.getElementsByTagName("tr"));
    rows.shift();
    rows.shift();
    rows.forEach((el, i) => {
      let text = el.innerText;
      if (val !== "") {
        if (text.includes(val)) {
          el.className = "select";
        } else {
          el.className = "";
        }
      }
    });
    input.value = "";
    //? if i type val = "" i am only getting the reference of the value not the input field value itself
  }
}
