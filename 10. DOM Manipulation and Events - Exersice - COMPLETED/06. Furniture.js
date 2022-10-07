function solve() {
  let checkedCount = 0;
  let finalMessage = "";
  let avgDecorationFac = 0;
  let totalPrice = 0;
  let boughtFurniture = [];
  let buyBtn = document.getElementsByTagName("button")[1];
  let table = document.querySelector(".table");
  let furnitureList = document.querySelector("#exercise textarea");
  let generateBtn = document.querySelector("#exercise button");
  generateBtn.addEventListener("click", (e) => {
    let furnitureObjs = furnitureList.value;
    let JsonFurniture = JSON.parse(furnitureObjs);
    JsonFurniture.forEach((el) => {
      let img = el.img;
      let prc = el.price;
      let n = el.name;
      let decFac = el.decFactor;
      let tbody = document.getElementsByTagName("tbody")[0];
      let information = document.createElement("tr");
      let pictureVal = document.createElement("td");
      let image = document.createElement("img");
      image.src = img;
      pictureVal.appendChild(image);
      information.appendChild(pictureVal);
      let nameVal = document.createElement("td");
      nameVal.innerHTML = `<p>${n}</p>`;
      information.appendChild(nameVal);
      let priceVal = document.createElement("td");
      priceVal.innerHTML = `<p>${prc}</p>`;
      information.appendChild(priceVal);
      let decorationFactorVal = document.createElement("td");
      decorationFactorVal.innerHTML = `<p>${decFac}</p>`;
      information.appendChild(decorationFactorVal);
      let checkBoxVal = document.createElement("td");
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBoxVal.appendChild(checkBox);
      information.appendChild(checkBoxVal);
      table.appendChild(information);
      tbody.appendChild(information);
    });
  });
  buyBtn.addEventListener("click", (e) => {
    let checkedBoxes = Array.from(document.querySelectorAll("td input"));
    checkedBoxes.shift();
    checkedBoxes.forEach((el) => {
      if (el.checked) {
        let row = el.parentElement.parentElement;
        let rowArr = Array.from(row.children);
        rowArr.shift();
        rowArr.pop();
        rowArr.forEach((el, i) => {
          let curr = el.firstChild.innerText;
          if (i === 0) {
            boughtFurniture.push(curr);
          } else if (i === 1) {
            totalPrice += Number(curr);
          } else {
            avgDecorationFac += Number(curr);
            checkedCount++;
          }
        });
      }
    });
    let firstSentence = `Bought furniture: ${boughtFurniture.join(", ")}`;
    let secondsSentence = `Total price: ${totalPrice.toFixed(2)}`;
    let thirdSentence = `Average decoration factor: ${
      avgDecorationFac / checkedCount
    }`;
    let arr = [firstSentence, secondsSentence, thirdSentence];
    let finalResult = document.getElementsByTagName("textarea")[1];
    finalResult.value += arr.join("\n");
  });
}
