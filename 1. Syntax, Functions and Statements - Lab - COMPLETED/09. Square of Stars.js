function square(size = 5) {
  let result = "";
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      result += "* ";
    }
    console.log(result);
    result = "";
  }
}
square(2);
