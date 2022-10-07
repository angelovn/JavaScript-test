function extractText() {
  let list = document.getElementById("items");
  let arr = list.children;
  let newArr = Array.from(arr);
  let area = document.getElementById("result");
  //? innerText is only one string (the text of the element)
  //**Basically, innerText is aware of the rendered appearance of text, while textContent is not.
  area.textContent = newArr.map((x) => x.innerText).join("\n");
}
