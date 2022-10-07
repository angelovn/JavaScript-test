function magicMatrices(arr) {
  let isNotMagical = false;
  let currentRowSum = 0;
  let currentColSum = 0;
  let previousRow = 0;
  let previousCol = 0;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      let sumRow = arr[row][col];
      let sumCol = arr[col][row];
      currentRowSum += sumRow;
      currentColSum += sumCol;
    }
    if (currentColSum === currentRowSum) {
      if (previousRow && previousCol !== currentColSum && currentRowSum) {
        isNotMagical = true;
        break;
      } else {
        previousRow = currentRowSum;
        previousCol = currentColSum;
        currentRowSum = 0;
        currentColSum = 0;
        continue;
      }
    } else {
      isNotMagical = true;
      break;
    }
  }
  if (isNotMagical) {
    console.log(false);
  } else {
    console.log(true);
  }
}
magicMatrices([[10, 10, 10]]);
console.log("------------------");
// magicMatrices([
//   [10, 10, 10],
//   [5, 10, 10],
//   [15, 5, 10],
// ]);
console.log("---------------");
// magicMatrices([
//   [11, 32, 45],
//   [21, 0, 1],
//   [21, 1, 1],
// ]);
console.log("----------------");
// magicMatrices([
//   [1, 0, 0],
//   [0, 0, 1],
//   [0, 1, 0],
// ]);

// function solve(matrix) {
//   const reduce = (prev, curr) => prev + curr;
//   let sum = matrix[0].reduce(reduce);
//   for (let row = 0; row < matrix.length; row++) {
//     let rowSum = matrix[row].reduce(reduce);
//     if (rowSum !== sum) {
//       return false;
//     }
//     if (row === 0) {
//       for (let col = 0; col < matrix[row].length; col++) {
//         let columSum = 0;
//         for (let i = 0; i < matrix.length; i++) {
//           columSum += matrix[col][i];
//         }
//         if (columSum !== sum) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }
