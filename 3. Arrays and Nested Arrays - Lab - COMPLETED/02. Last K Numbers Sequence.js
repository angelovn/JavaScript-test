function lastNumbersSequence(n, k) {
  let arr = [1];
  for (let i = 1; i < n; i++) {
    let num = Math.min(k, i);
    let sum = 0;
    //? J is the current element in the array and the number is the number of elements that we need to sum to get the new element
    for (let j = i; num >= 1; num--) {
      let curEl = arr[j - num];
      sum += curEl;
    }
    arr.push(sum);
  }
  return arr;
}
lastNumbersSequence(6, 3);
