function sumFirstLast(arr) {
  let sum = 0;
  if (arr.length === 1) {
    sum += Number(arr[0]);
  } else {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    sum = first + last;
  }
  console.log(sum);
}
sumFirstLast(["20", "30", "40"]);
