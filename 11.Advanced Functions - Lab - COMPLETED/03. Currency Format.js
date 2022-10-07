//? What is Partially applied arguments
//? Set some of the arguments of a function, without executing it and pass the remaining arguments when a result is needed
//*Example:
// function g(x) {
//   return f(1, x);
// }
// function f(x, y) {
//   return x + y;
// }
// g(2);
function currencyFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) return symbol + " " + result;
  else return result + " " + symbol;
}
function createFormatter(separator, symbol, symbolFirst, formatter) {
  return function (val) {
    return formatter(separator, symbol, symbolFirst, val);
  };
}
let dollarFormatter = createFormatter(",", "$", true, currencyFormatter);
console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));
