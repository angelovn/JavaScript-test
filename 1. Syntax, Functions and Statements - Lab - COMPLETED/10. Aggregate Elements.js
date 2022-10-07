function aggregateEl(arr) {
  let sum = 0;
  for (el of arr) {
    sum += el;
  }
  console.log(sum);

  let sum1 = 0;
  for (let el of arr) {
    sum1 += 1 / el;
  }
  console.log(sum1);

  let concat = "";
  for (let el of arr) {
    concat += String(el);
  }
  console.log(concat);
}
aggregateEl([1, 2, 3]);
// aggregateEl([2, 4, 8, 16]);
