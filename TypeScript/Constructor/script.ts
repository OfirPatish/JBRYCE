class Car {
  private _licensePlate: string;
  private _model: string;
  private _type: string;
  private _color: string;
  private _year: number;
  private _engineType: string;
  private _engineSpeed: number;

  constructor(
    licensePlate: string,
    model: string,
    type: string,
    color: string,
    year: number,
    engineType: string,
    engineSpeed: number
  ) {
    this._licensePlate = licensePlate;
    this._model = model;
    this._type = type;
    this._color = color;
    this._year = year;
    this._engineType = engineType;
    this._engineSpeed = engineSpeed;
  }

  get licensePlate(): string {
    return this._licensePlate;
  }

  set licensePlate(value: string) {
    this._licensePlate = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get engineSpeed(): number {
    return this._engineSpeed;
  }

  set engineSpeed(value: number) {
    this._engineSpeed = value;
  }

  get engineType(): string {
    return this._engineType;
  }

  set engineType(value: string) {
    this._engineType = value;
  }

  public printDetails(): void {
    console.log(
      `License Plate: ${this.licensePlate}\nModel: ${this.model}\nType: ${this.type}\nColor: ${this.color}\nYear: ${this.year}\nEngine Type: ${this.engineType}\nEngine Speed: ${this.engineSpeed}`
    );
  }

  public accelerateTo(speed: number): void {
    if (speed > this._engineSpeed) {
      console.log(`Accelerating to ${speed}`);
      let currentSpeed = this._engineSpeed;
      while (currentSpeed < speed) {
        currentSpeed++;
        console.log(`Current speed: ${currentSpeed}`);
      }
      this._engineSpeed = speed;
    } else {
      console.log(`Cannot accelerate to ${speed}, it's either equal or less than current engine speed.`);
    }
  }

  public slowDownTo(speed: number): void {
    if (speed < this._engineSpeed) {
      console.log(`Slowing down to ${speed}`);
      let currentSpeed = this._engineSpeed;
      while (currentSpeed > speed) {
        currentSpeed--;
        console.log(`Current speed: ${currentSpeed}`);
      }
      this._engineSpeed = speed;
    } else {
      console.log(`Cannot slow down to ${speed}, it's either equal or greater than current engine speed.`);
    }
  }

  public stop(): void {
    this.slowDownTo(0);
  }
}

let car = new Car("851-26-802", "Mazda", "2", "Silver", 2022, "V6", 0);
car.printDetails();
console.log("\n");

car.accelerateTo(100);
console.log("\n");

car.slowDownTo(50);
console.log("\n");

car.stop();
