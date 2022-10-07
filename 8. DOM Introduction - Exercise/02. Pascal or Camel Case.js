function solve() {
  let input = document.getElementById("text").value.toLowerCase();
  let namingConvention = document.getElementById("naming-convention").value;
  let output = document.getElementById("result");
  let splitted = input.split(" ");
  let arr = [];
  switch (namingConvention) {
    case "Camel Case":
      splitted.forEach((el, i) => {
        let firstLetter = el[0];
        let sliced = el.slice(1);
        if (i === 0) {
          firstLetter = firstLetter.toLowerCase();
        } else {
          firstLetter = firstLetter.toUpperCase();
        }
        let text = firstLetter + sliced;
        arr.push(text);
      });
      let n = arr.join("");
      output.innerHTML = n;
      break;
    case "Pascal Case":
      splitted.forEach((el, i) => {
        let slice = el.slice(1);
        let firstL = el[0];
        firstL = firstL.toUpperCase();
        let text = firstL + slice;
        arr.push(text);
      });
      let m = arr.join("");
      output.innerHTML = m;
      break;
    default:
      output.innerText = "Error!";
      break;
  }
}
