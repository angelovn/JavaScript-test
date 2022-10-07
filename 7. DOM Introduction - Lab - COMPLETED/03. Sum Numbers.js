function calc() {
  let num1 = document.getElementById("num1");
  let num1Val = Number(num1.value);
  let num2 = document.getElementById("num2");
  let num2Val = Number(num2.value);
  let sum = document.getElementById("sum");
  sum.value = num1Val + num2Val;
}
