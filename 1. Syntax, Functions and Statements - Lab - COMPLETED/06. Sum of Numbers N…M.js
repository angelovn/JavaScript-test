function sum(n, m) {
  let sum = 0;
  let start = Number(n);
  let end = Number(m);
  for (let str = start; str <= end; str++) {
    sum += str;
  }
  console.log(sum);
}
sum("1", "5");
