function solution(num) {
  return function (newNum) {
    return newNum + num;
  };
}
let add5 = solution(8);
console.log(add5(2));
console.log(add5(3));
