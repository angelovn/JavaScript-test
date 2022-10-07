// class Company {
//   constructor() {
//     this.departments = {};
//     this.avgSalaries = {};
//   }
//   addEmployee(name, salary, position, department) {
//     let i = -1;
//     if (!name || !salary || !position || !department) {
//       console.log("Invalid input!");
//     } else if (salary < 0) {
//       console.log("Invalid input!");
//     } else {
//       if (!this.departments.hasOwnProperty(department)) {
//         this.departments[department] = [{ name, salary, position }];
//       } else {
//         this.departments[department].push({ name, salary, position });
//       }
//       i++;
//       return `New employee is hired. Name: ${this.departments[department][i].name}. Position: ${this.departments[department][i].position}`;
//     }
//   }
//   bestDepartment() {
//     let highestAvgSalary = 0;
//     let currentHighestSalary = 0;
//     for (let el in this.departments) {
//       let currentDepartmentName = el;
//       let currentDepartment = this.departments[el];
//       for (let employees of currentDepartment) {
//         highestAvgSalary += employees.salary;
//       }
//       highestAvgSalary /= this.departments[el].length;
//       if (highestAvgSalary > currentHighestSalary) {
//         currentHighestSalary = highestAvgSalary;
//       } else {
//         highestAvgSalary = currentHighestSalary;
//       }
//       highestAvgSalary = 0;
//     }
//   }
// }
class Company {
  constructor() {
    this.departments = {};
    this.aveSalaries = {};
  }

  addEmployee(username, salary, position, department) {
    if (
      [...arguments].some((a) => a === null || a === undefined || a === "") ||
      salary < 0
    ) {
      throw new Error("Invalid input!");
    }

    let user = {
      username: username,
      salary: salary,
      position: position,
    };

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];

      this.aveSalaries[department] = {
        totalEmployees: 0,
        totalSalaries: 0,
        averageSalary: 0,
      };
    }

    this.departments[department].push(user);
    this.aveSalaries[department].totalEmployees += 1;
    this.aveSalaries[department].totalSalaries += salary;

    this.aveSalaries[department].averageSalary =
      this.aveSalaries[department].totalSalaries /
      this.aveSalaries[department].totalEmployees;

    return `New employee is hired. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {
    let result = "";
    let bestDepartment = Object.entries(this.aveSalaries)
      .sort((a, b) => b[1].averageSalary - a[1].averageSalary)
      .shift();

    result += `Best Department is: ${bestDepartment[0]}`;
    result += `\nAverage salary: ${bestDepartment[1].averageSalary.toFixed(2)}`;

    this.departments[bestDepartment[0]].sort(
      (a, b) => b.salary - a.salary || a.username.localeCompare(b.username)
    );

    this.departments[bestDepartment[0]].forEach((user) => {
      result += `\n${user.username} ${user.salary} ${user.position}`;
    });

    return result;
  }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
