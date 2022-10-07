function editElement(htmlEl, stringMatch, replacer) {
  let sentence = htmlEl.innerText;
  let pattern = new RegExp(stringMatch, "g");
  let text = sentence.replace(pattern, replacer);
  htmlEl.innerText = text;
}
