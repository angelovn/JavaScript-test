function biggerHalf(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b;
  });
  return sorted.slice(arr.length / 2);
}
biggerHalf([4, 7, 2, 5]);
console.log("------------");
biggerHalf([3, 19, 14, 7, 2, 19, 6]);
