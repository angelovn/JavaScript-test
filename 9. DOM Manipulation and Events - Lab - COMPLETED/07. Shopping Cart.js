// function solve() {
//   let productsAdded = new Set();
//   let checkOutButton = document.querySelector(".checkout");
//   let addButtonsArr = Array.from(
//     document.querySelectorAll("button.add-product")
//   );
//   let textField = document.querySelector("textarea");
//   textField.innerText = "";
//   addButtonsArr.forEach((el) => {
//     el.addEventListener("click", AddToCart);
//   });
//   function AddToCart(e) {
//     let currentEl = e.currentTarget.parentElement;
//     let priceEl = currentEl.nextElementSibling.innerText;
//     let itemEl = currentEl.previousElementSibling.children[0].innerText;
//     if (!productsAdded.has(itemEl)) {
//       productsAdded.set(itemEl, 0);
//       productsAdded.set(itemEl, productsAdded.get(itemEl) + Number(priceEl));
//       textField.value += `Added ${itemEl} for ${priceEl.toFixed(
//         2
//       )} to the cart.\n`;
//     } else {
//       let sumOfProducts = Number(
//         Array.from(productsAdded.values()).reduce((a, b) => +a + +b, 0)
//       );
//       textField += `You bought ${Array.from(itemEl.keys()).join(
//         ", "
//       )} for ${sumOfProducts.toFixed(2)}`;
//     }
//   }
//   checkOutButton.addEventListener("click", checkOut);
//   function checkOut(e) {
//     textField.innerText += `You bought Tomatoes for ${sumOfProducts.toFixed(
//       2
//     )}.\n`;
//     e.currentTarget.setAttribute("disabled", "");
//     addButtonsArr.forEach((el) => {
//       el.setAttribute("disabled", "");
//     });
//   }
// }
function solve() {
  let button = document.getElementsByTagName("button");
  let textArea = document.getElementsByTagName("textarea")[0];

  // let list = {}
  let list = new Map();

  Array.from(button).forEach((b) => {
    b.addEventListener("click", (e) => {
      if (e.target.className === "add-product") {
        let currentElement = e.target.parentElement;

        let priceElement = currentElement.nextElementSibling.innerHTML;
        let brandElement =
          currentElement.previousElementSibling.children[0].innerHTML;

        // if (!list[brandElement]) {
        if (!list.has(brandElement)) {
          // list[brandElement] = 0
          list.set(brandElement, 0);
        }
        // list[brandElement] += priceElement
        list.set(brandElement, list.get(brandElement) + Number(priceElement));

        textArea.value += `Added ${brandElement} for ${priceElement} to the cart.\n`;
      } else {
        // let totalPrice = Number(Object.values(list).reduce((a,b)=>a+b))
        let totalPrice = Number(
          Array.from(list.values()).reduce((a, b) => +a + +b, 0)
        );
        // textArea.innerHTML+=`You bought ${Object.keys(list).join(', ')} for ${totalPrice.toFixed(2)}.`
        textArea.value += `You bought ${Array.from(list.keys()).join(
          ", "
        )} for ${totalPrice.toFixed(2)}.`;

        // Array.from(button).forEach(b => b.disabled = true)
        let buttons = Array.from(document.querySelectorAll("button"));
        buttons.forEach((button) => (button.disabled = true));
      }
    });
  });
}
