function equalNeighbors(arr) {
  let pairs = 0;
  for (let row = 0; row < arr.length; row++) {
    let currentRow = arr[row];
    let rowNum = Math.min(row, 1);
    for (let col = 0; col < currentRow.length; col++) {
      let colNum = Math.min(col, 1);
      let currentNumber = arr[row][col];
      if (colNum !== 0 && col !== currentRow.length - 1) {
        if (
          arr[row][col + colNum] === currentNumber ||
          arr[row][col - colNum] === currentNumber
        ) {
          pairs++;
        }
      }
      if (rowNum !== 0 && row !== arr.length - 1) {
        if (
          arr[row + rowNum][col] === currentNumber &&
          arr[row - rowNum][col] === currentNumber
        ) {
          pairs += 2;
        } else {
          if (
            arr[row + rowNum][col] === currentNumber ||
            arr[row - rowNum][col] === currentNumber
          ) {
            pairs++;
          }
        }
      }
      if (row === 0) {
        if (arr[row + 1][col] === currentNumber) {
          pairs++;
        }
      }
      if (row === arr.length - 1) {
        if (arr[row - rowNum][col] === currentNumber) {
          pairs++;
        }
      }
      if (col === 0) {
        if (arr[row][col + 1] === currentNumber) {
          pairs++;
        }
      }
      if (col === currentRow.length - 1) {
        if (arr[row][col - colNum] === currentNumber) {
          pairs++;
        }
      }
    }
  }
  return pairs / 2;
}
// equalNeighbors([
//   ["2", "3", "4", "7", "0"], //7
//   ["4", "0", "5", "3", "4"],
//   ["2", "3", "5", "4", "2"],
//   ["9", "8", "7", "5", "4"],
// ]);
console.log("------------------");
// equalNeighbors([
//   ["test", "yes", "yo", "ho"],
//   ["well", "done", "yo", "6"],
//   ["not", "done", "yet", "5"],
// ]);
console.log("--------------");
equalNeighbors([
  ["2", "2", "5", "7", "4"],
  ["4", "0", "5", "3", "4"],
  ["2", "5", "5", "4", "2"],
]);
console.log("------------------");
// equalNeighbors([
//   ["test", "yes", "yo", "ho"],
//   ["well", "done", "yo", "6"],
//   ["not", "done", "yet", "5"],
// ]);
