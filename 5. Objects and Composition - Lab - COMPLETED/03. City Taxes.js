// When executed as an object method, the context is a reference to the parent object
// function cityTaxes(name, population, treasury) {
//   return {
//     name,
//     population,
//     treasury,
//     taxRate: 10,
//     collectTaxes() {
//       this.treasury += Math.floor(this.population * this.taxRate);
//     },
//     applyGrowth(percentage) {
//       this.population += Math.floor((this.population * percentage) / 100);
//     },
//     applyRecession(percentage) {
//       this.treasury -= Math.floor((this.population * percentage) / 100);
//     },
//   };
// }
// function cityTaxes(name, population, treasury) {
//   let town = {
//     name,
//     population,
//     treasury,
//     taxRate: 10,
//     collectTaxes() {
//       town.treasury += Math.round(town.population * town.taxRate);
//     },
//     applyGrowth(percentage) {
//       town.population += Math.round((town.population * percentage) / 100);
//     },
//     applyRecession(percentage) {
//       percentage -= Math.round((town.treasury * percentage) / 100);
//     },
//   };
//   return town;
// }
function foo(n, p, t) {
  class City {
    constructor(n, p, t) {
      this.name = n;
      this.population = p;
      this.treasury = t;
      this.taxRate = 10;
    }

    collectTaxes = () =>
      Math.round((this.treasury += this.population * this.taxRate));
    applyGrowth = (p) =>
      Math.round((this.population += (this.population * p) / 100));
    applyRecession = (p) =>
      Math.round((this.treasury -= (this.treasury * p) / 100));
  }

  return new City(n, p, t);
}
const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
city.applyGrowth(5);
city.applyRecession(10);
city.collectTaxes();
city.applyGrowth(5);
city.applyRecession(10);
console.log(city.treasury);
console.log(city.population);
console.log(city);

// const city = cityTaxes("Tortuga", 7000, 15000);
// console.log(city);
