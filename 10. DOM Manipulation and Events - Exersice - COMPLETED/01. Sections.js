function create(words) {
  let parentDiv = document.getElementById("content");
  words.forEach((el) => {
    let childDiv = document.createElement("div");
    let divParagraph = document.createElement("p");
    divParagraph.innerText = el;
    divParagraph.style.display = "none";
    childDiv.appendChild(divParagraph);
    parentDiv.appendChild(childDiv);
    childDiv.addEventListener("click", (e) => {
      divParagraph.style.display = "block";
    });
  });
}
