//? new throw Error try and catch
function subSum(input, startIndex, endIndex) {
  if (!Array.isArray(input)) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > input.length) {
    endIndex = input.length;
  }
  let sum = input.slice(startIndex, endIndex + 1).reduce((acc, val) => {
    val = Number(val);
    if (!typeof val) {
      return NaN;
    }
    return acc + val;
  }, 0);
  console.log(sum);
  return sum;
}
subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, "twenty", 30, 40], 0, 2);
subSum([], 1, 2);
subSum("text", 0, 2);
