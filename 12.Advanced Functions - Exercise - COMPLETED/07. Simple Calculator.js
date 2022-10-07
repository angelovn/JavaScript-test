function calculator() {
  let calc = {
    init(selector1, selector2, resultSelector) {
      let num1 = document.querySelector(selector1);
      let num2 = document.querySelector(selector2);
      let result = document.querySelector(resultSelector);
      let arr = [num1, num2, result];
      return arr;
    },
    add() {
      let arr = this.init.call(this, "#num1", "#num2", "#result");
      arr[2].value = Number(arr[0].value) + Number(arr[1].value);
    },
    subtract() {
      let arr = this.init.call(this, "#num1", "#num2", "#result");
      arr[2].value = Number(arr[0].value) - Number(arr[1].value);
    },
  };
  return calc;
}
const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
