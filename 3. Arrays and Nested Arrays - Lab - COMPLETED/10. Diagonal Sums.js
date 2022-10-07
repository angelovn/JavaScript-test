function diagonalSum(arr) {
  let diagonal1 = 0;
  let diagonal2 = 0;
  let dio1 = 0;
  let dio2 = arr.length - 1;
  for (let row = 0; row <= arr.length - 1; row++) {
    let currentRow = arr[row];
    if (arr.length === 1) {
      diagonal1 += currentRow[dio1];
      diagonal2 += currentRow[currentRow.length - 1];
      break;
    }
    diagonal1 += currentRow[dio1];
    diagonal2 += currentRow[dio2];
    dio1++;
    dio2--;
  }
  console.log(diagonal1, diagonal2);
}
// diagonalSum([
//   [20, 40],
//   [10, 60],
// ]);
console.log("--------------");
diagonalSum([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);

// if (arr.length % 2 !== 0) {
// } else {
// }
