function sortArr(arr, criteria) {
  arr.sort((a, b) => {
    if (criteria === "asc") {
      return a - b;
    } else {
      return b - a;
    }
  });
  return arr;
}
sortArr([14, 7, 17, 6, 8], "asc");
sortArr([14, 7, 17, 6, 8], "desc");
