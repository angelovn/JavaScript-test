function biggestElement(arr) {
  let biggestEl = Number.MIN_SAFE_INTEGER;
  for (let row = 0; row < arr.length; row++) {
    let currentRow = arr[row];
    for (let col = 0; col < currentRow.length; col++) {
      if (arr[row][col] > biggestEl) {
        biggestEl = arr[row][col];
      }
      if (arr[row][col + 1] > biggestEl) {
        biggestEl = arr[row][col + 1];
      }
    }
  }
  //   console.log(biggestEl);
  return biggestEl;
}
biggestElement([
  [3, 5, 17, 12, 91, 5],
  [-1, 7, 4, 33, 6, 22],
  [1, 8, 99, 3, 10, 43],
]);
