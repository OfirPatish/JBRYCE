class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

let myCar = new Car("Toyota", "Corolla", 2005);
console.log(myCar);

class SportsCar extends Car {
  constructor(brand, model, year, topSpeed) {
    super(brand, model, year);
    this.topSpeed = topSpeed;
  }

  displayCarInfo() {
    return `This is a ${this.brand} ${this.model} from ${this.year} with a top speed of ${this.topSpeed} km/h.`;
  }
}

let mySportsCar = new SportsCar("Ferrari", "488 GTB", 2015, 330);
console.log(mySportsCar.displayCarInfo());
