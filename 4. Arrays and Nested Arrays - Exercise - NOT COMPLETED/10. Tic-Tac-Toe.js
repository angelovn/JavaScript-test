function ticTacToe(arr) {
  //? X first O second
  let ticToe = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let turns = 1;
  let counterX = 0;
  let counterO = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentCoordinates = arr[i];
    let [row, col] = currentCoordinates.split(" ");
    row = Number(row);
    col = Number(col);
    if (turns % 2 !== 0) {
      ticToe[row][col] = "X";
      if (counterX === 3) {
        break;
      }
      if (ticToe[row][col]) {
      }
      turns++;
    } else {
      ticToe[row][col] = "O";
      if (counterO === 3) {
        break;
      }
      turns++;
    }
  }
  for (let k of ticToe) {
    console.log(k.join("\t"));
  }
}
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
