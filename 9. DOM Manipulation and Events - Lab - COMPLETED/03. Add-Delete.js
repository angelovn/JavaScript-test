function addItem() {
  let ulList = document.getElementById("items");
  let inputFieldVal = document.getElementById("newItemText").value;
  let listItem = document.createElement("li");
  let link = document.createElement("a");
  link.innerText = "[Delete]";
  link.href = "#";
  listItem.innerText = inputFieldVal;
  ulList.appendChild(listItem);
  listItem.appendChild(link);
  //? current is the one that the mouse is over and currentTarget is the one that the EventListener is attached to
  //   link.addEventListener("click", (e) => e.target.parentNode.remove());
  link.addEventListener("click", deleteItem);
  function deleteItem() {
    listItem.remove();
  }
}
