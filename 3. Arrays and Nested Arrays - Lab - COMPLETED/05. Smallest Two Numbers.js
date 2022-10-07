function smallestTwo(arr) {
  let small = [];
  let smallestNum = 0;
  let i = 0;
  for (let el of arr) {
    if (i >= 2) {
      break;
    }
    i++;
    smallestNum = Math.min(...arr);
    let index = arr.indexOf(smallestNum);
    arr.splice(index, 1);
    small.push(smallestNum);
  }
  console.log(small.join(" "));
}
smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);
