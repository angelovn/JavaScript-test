function negativePositive(arr) {
  let positiveNegativeArr = [];
  for (let i = 0; i < arr.length; i++) {
    let currentEl = arr[i];
    //? if(currentEl < 0)
    if (Math.sign(currentEl) === -1) {
      positiveNegativeArr.unshift(currentEl);
    } else {
      positiveNegativeArr.push(currentEl);
    }
  }
  console.log(positiveNegativeArr.join("\n"));
}
// negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);
