class Salary {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getMaaser() {
    return this.salary * 0.1;
  }
  getSalaryTax() {
    return this.salary * 0.75;
  }
  getInfo() {
    return `${this.name}: Salary - ${this.salary}, Maaser - ${this.getMaaser().toFixed(
      2
    )}, After Tax - ${this.getSalaryTax().toFixed(2)}`;
  }
}

var john = new Salary("John", 1000);
var jane = new Salary("Jane", 2000);
var mike = new Salary("Mike", 1500);

console.log(john.getInfo());
console.log(jane.getInfo());
console.log(mike.getInfo());
