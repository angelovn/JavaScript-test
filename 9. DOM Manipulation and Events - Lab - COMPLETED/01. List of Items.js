function addItem() {
  let inputFieldVal = document.getElementById("newItemText").value;
  let list = document.getElementById("items");
  let listItem = document.createElement("li");
  listItem.innerText = inputFieldVal;
  list.appendChild(listItem);
}
