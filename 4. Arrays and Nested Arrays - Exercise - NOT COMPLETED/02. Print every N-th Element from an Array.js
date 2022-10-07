function printNth(arr, nth) {
  let ar = [];
  for (let i = 0; i < arr.length; i += nth) {
    ar.push(arr[i]);
  }
  return ar;
}
printNth(["5", "20", "31", "4", "20"], 2);
