function processOddPosition(arr) {
  let oddElements = [];
  let i = 0;
  for (let el of arr) {
    if (i % 2 !== 0) {
      oddElements.push(el);
    }
    i++;
  }
  //? forEach() return undefined
  let odd = oddElements.map((el) => el * 2).reverse();
  return odd;
}
// console.log(processOddPosition([10, 15, 20, 25]));
console.log("-----------------");
console.log(processOddPosition([3, 0, 10, 4, 7, 3]));
