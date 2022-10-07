function autoEngineeringCompany(input) {
  let register = {};
  input.forEach((el) => {
    let [carBrand, carModel, producedCars] = el.split(" | ");
    producedCars = +producedCars;
    if (!register.hasOwnProperty(carBrand)) {
      register[carBrand] = {};
      register[carBrand][carModel] = { producedCars };
    } else if (register[carBrand].hasOwnProperty(carModel)) {
      register[carBrand][carModel].producedCars += producedCars;
    } else if (register.hasOwnProperty(carBrand)) {
      register[carBrand][carModel] = { producedCars };
    }
  });
  for (let cars in register) {
    console.log(`${cars}`);
    for (let models in register[cars]) {
      console.log(`###${models} -> ${register[cars][models].producedCars}`);
    }
  }
}
autoEngineeringCompany([
  "Audi | Q7 | 1000",
  "Audi | Q7 | 100",
  "BMW | X5 | 1000",
  "BMW | X6 | 100",
  "Citroen | C4 | 123",
  "Volga | GAZ-24 | 1000000",
  "Lada | Niva | 1000000",
  "Lada | Jigula | 1000000",
  "Citroen | C4 | 22",
  "Citroen | C5 | 10",
]);
