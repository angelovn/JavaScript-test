function storeCatalogue(arr) {
  let products = {};
  let sorted = arr.sort((a, b) => {
    return a.localeCompare(b);
  });
  for (let el of sorted) {
    let [name, price] = el.split(" : ");
    products[name] = price;
  }
  let currentL = "";
  for (let el in products) {
    let newLetter = el[0];
    if (newLetter === currentL) {
      console.log(` ${el}: ${products[el]}`);
    } else {
      console.log(newLetter);
      console.log(` ${el}: ${products[el]}`);
    }
    currentL = el[0];
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
