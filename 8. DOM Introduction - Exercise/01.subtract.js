function subtract() {
  let firstNumber = document.getElementById("firstNumber");
  let secondNumber = document.getElementById("secondNumber");
  let result = document.getElementById("result");
  let num1 = Number(firstNumber.value);
  let num2 = Number(secondNumber.value);
  let text = document.createElement("p");
  text.innerText = num1 - num2;
  result.appendChild(text);
}
