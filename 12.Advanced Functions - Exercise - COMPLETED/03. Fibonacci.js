function getFibonacci() {
  let f1 = 0;
  let f2 = 1;
  return () => {
    let result = f1 + f2;
    f1 = f2;
    f2 = result;
    return f1;
  };
}
let fib = getFibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
