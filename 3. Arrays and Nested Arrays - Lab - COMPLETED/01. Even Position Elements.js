function evenPosition(arr) {
  let even = [];
  let i = 0;
  for (let el of arr) {
    if (i % 2 === 0) {
      even.push(el);
    }
    i++;
  }
  console.log(even.join(" "));
}
evenPosition(["20", "30", "40", "50", "60"]);
