//? Object.entries() , Object.keys() etc...
function townPopulation(arr) {
  let town = {};
  for (el of arr) {
    let [name, population] = el.split(" <-> ");
    population = Number(population);
    if (town.hasOwnProperty(name)) {
      town[name] += population;
    } else {
      town[name] = population;
    }
  }
  for (let el in town) {
    console.log(`${el} : ${town[el]}`);
  }
}
// townPopulation([
//   "Sofia <-> 1200000",
//   "Montana <-> 20000",
//   "New York <-> 10000000",
//   "Washington <-> 2345000",
//   "Las Vegas <-> 1000000",
// ]);
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
