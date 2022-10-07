function colorize() {
  //? teal color
  let table = document.getElementsByTagName("tr");
  let arr = Array.from(table);
  arr.forEach((el, i) => {
    if (i % 2 !== 0) {
      el.style.background = "teal";
    }
  });
}
