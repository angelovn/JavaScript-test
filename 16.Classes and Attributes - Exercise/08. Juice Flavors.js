function juiceFlavors(input) {
  let juices = {};
  let bottles = {};
  input.forEach((el) => {
    let [flavor, quantity] = el.split(" => ");
    quantity = Number(quantity);
    if (!juices.hasOwnProperty(flavor)) {
      juices[flavor] = quantity;
    } else {
      juices[flavor] += quantity;
    }
    if (juices[flavor] >= 1000) {
      while (juices[flavor] >= 1000) {
        if (!bottles.hasOwnProperty(flavor)) {
          bottles[flavor] = 0;
        }
        bottles[flavor] += 1;
        juices[flavor] -= 1000;
      }
    }
  });
  for (let flavors in bottles) {
    console.log(`${flavors} => ${bottles[flavors]}`);
  }
}
juiceFlavors([
  "Orange => 2000",
  "Peach => 1432",
  "Banana => 450",
  "Peach => 600",
  "Strawberry => 549",
]);
