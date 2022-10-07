function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  function onClick() {
    let inputArr = document.getElementsByTagName("textarea")[0].value;
    let res = [];
    let arr = JSON.parse(inputArr);
    let avgSalary = 0;
    let highestAvgSalary = 0;
    let restaurants = {};
    arr.forEach((el) => {
      let [foodRes, ...rest] = el.split(" - ");
      let workers = rest.join(" ").split(", ");
      if (!restaurants.hasOwnProperty(foodRes)) {
        restaurants[foodRes] = {};
      }
      workers.forEach((el) => {
        let [worker, wage] = el.split(" ");
        wage = Number(wage);
        avgSalary += wage;
        if (!restaurants.hasOwnProperty(worker)) {
          restaurants[foodRes][worker] = wage;
        } else {
          restaurants[foodRes][worker] = wage;
        }
      });
      avgSalary /= workers.length;
      if (highestAvgSalary < avgSalary) {
        highestAvgSalary = avgSalary.toFixed(2);
        restaurants[foodRes].highestAvg = highestAvgSalary;
      }
      res.push(restaurants);
      avgSalary = 0;
    });
    console.log(res);
  }
}

[
  "PizzaHut - Peter 500, George 300, Mark 800",
  "TheLake - Bob 1300, Joe 780, Jane 660",
];

//? This points to the current instance of a class (the object being made).
//* The constructor function creates and initializes a new object
//? something = some is setting property to the class but over the constructor function
//* Accessor Properties are methods that mimic values.
//? Set
// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
//   get diameter() {
//     return 2 * this.radius;
//   }
//   set diameter(value) {
//     this.radius = value / 2;
//   }
//   get area() {
//     return Math.PI * this.radius ** 2;
//   }
// }
// let c = new Circle(2);
// //? The setter needs to have value or it will be read
// c.diameter = 2;
// console.log(`Radius: ${c.radius}`);
// console.log(`Diameter: ${c.diameter}`);
// console.log(`Area: ${c.area}`);

//? WeakMap WeakSet ...
