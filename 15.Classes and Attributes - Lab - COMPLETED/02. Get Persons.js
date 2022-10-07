function getPersons() {
  let personObjArr = [];
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }
  let person = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
  let person1 = new Person("SoftUni");
  let person2 = new Person("Stephan", "Johnson", 25);
  let person3 = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");
  personObjArr.push(person, person1, person2, person3);
  return personObjArr;
}
let personsObj = getPersons();
for (let el of personsObj) {
  console.log(el.toString());
}
