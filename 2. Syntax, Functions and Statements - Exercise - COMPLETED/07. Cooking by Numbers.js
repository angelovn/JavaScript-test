//? ... spread operator
function cookingNumbers(
  number,
  operation1,
  operation2,
  operation3,
  operation4,
  operation5
) {
  let operations = [operation1, operation2, operation3, operation4, operation5];
  for (let el of operations) {
    switch (el) {
      case "chop":
        number /= 2;
        console.log(number);
        break;
      case "dice":
        number = Math.sqrt(number);
        console.log(number);
        break;
      case "spice":
        number += 1;
        console.log(number);
        break;
      case "bake":
        number *= 3;
        console.log(number);
        break;
      case "fillet":
        number -= number * 0.2;
        console.log(number);
        break;
    }
  }
}
// cookingNumbers("32", "chop", "chop", "chop", "chop", "chop");
cookingNumbers(9, "dice", "spice", "chop", "bake", "fillet");
