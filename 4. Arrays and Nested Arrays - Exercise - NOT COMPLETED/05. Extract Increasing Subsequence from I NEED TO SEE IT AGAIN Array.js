// //? filter() returns true or false
function extractSubset(arr) {
  let max = Number.MIN_SAFE_INTEGER;
  let filtered = arr.filter(biggest);
  function biggest(num) {
    if (num >= max) {
      max = num;
      return true;
    } else {
      return false;
    }
  }
  return filtered;
}
extractSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);

function solve(arr) {
  let newArr = [];
  arr.reduce((previous, next) => {
    if (next >= previous) {
      newArr.push(next);
      previous = next;
    }

    return previous;
  }, Number.MIN_SAFE_INTEGER);
  return newArr;
  //? Initial value is the min_safe_integer so the previous value has something in the beginning so it doesn't stay undefined
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
