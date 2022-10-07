function sortingNumbers(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  let sorted = [];

  for (let i = 0; i <= arr.length * 2; i++) {
    for (let small = 0; small < arr.length; small++) {
      let currentSmall = arr[small];
      if (currentSmall < min) {
        min = currentSmall;
      }
    }
    for (let big = 0; big < arr.length; big++) {
      let currentBig = arr[big];
      if (currentBig > max) {
        max = currentBig;
      }
    }
    if (arr.length === 1) {
      sorted.push(arr[0]);
      break;
    } else {
      sorted.push(min, max);
    }
    arr.splice(arr.indexOf(min), 1);
    arr.splice(arr.indexOf(max), 1);
    min = Number.MAX_SAFE_INTEGER;
    max = Number.MIN_SAFE_INTEGER;
  }
  return sorted;
}
console.log(sortingNumbers([22]));

//? 2 63 3 54 9 22 11 21 18 19
