function sumTable() {
  let table = document.getElementsByTagName("td");
  let arr = Array.from(table);
  let sum = 0;
  arr.length = arr.length - 2;
  arr.forEach((el, i) => {
    if (i % 2 !== 0) {
      let num = Number(el.innerText);
      sum += num;
    }
  });
  let allSum = document.getElementById("sum");
  allSum.innerText = sum;
  console.log(arr);
}
