function carFactory(obj) {
  let car = {};
  car.model = obj.model;
  if (obj.power <= 90 && obj.power < 120) {
    car.engine = { power: 90, volume: 1800 };
  } else if (obj.power <= 120 && obj.power > 90) {
    car.engine = { power: 120, volume: 2400 };
  } else if (obj.power <= 200 && obj.power > 120) {
    car.engine = { power: 200, volume: 3500 };
  }
  if (obj.carriage === "hatchback") {
    car.carriage = { type: obj.carriage, color: obj.color };
  } else {
    car.carriage = { type: obj.carriage, color: obj.color };
  }
  let wheels = obj.wheelsize;
  if (wheels % 2 === 0) {
    wheels = 2 * Math.floor(wheels / 2) + 1 - 2;
  }
  car.wheels = [wheels, wheels, wheels, wheels];
  return car;
}
carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 16,
});
