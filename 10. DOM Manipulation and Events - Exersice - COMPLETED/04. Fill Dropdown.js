function addItem() {
  //? WHAT IS THE DIFFERENCE BETWEEN appendChild and append
  //?* A DOM document is a hierarchical collection of nodes
  //?* Nodes have types, the element type being one of them. The element is represented by a tag in the HTML document.
  //? A node is a part of the DOM every single tree el is a node and there are different types of nodes comment node text node document node element node and so on. The element is an HTML tag which in itself is a element node
  //? Having both node.childNodes and node.children lets you choose the collection of children you'd like to access: all children nodes or only children being elements.
  //? HTMLCollection is live that means that if a new element comes in the DOM the list will update automatically, but the NodeList [can also be live] but it is more static won't update
  //? Write debugger in the script for debugging in browser
  let selectMenu = document.getElementById("menu");
  let newText = document.getElementById("newItemText");
  let newItem = document.getElementById("newItemValue");
  let newOption = document.createElement("option");
  let optionText = document.createTextNode(newText.value);
  newOption.appendChild(optionText);
  newOption.setAttribute("value", newItem.value);
  selectMenu.appendChild(newOption);
  newText.value = "";
  newItem.value = "";
}
