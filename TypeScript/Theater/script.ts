class Cinema {
  private _name: string;
  private _seats: number;
  private _openingHour: number;
  private _closingHour: number;

  constructor(name: string, openingHour: number = 6, closingHour: number = 23, seats?: number) {
    this._name = name;
    this._openingHour = openingHour;
    this._closingHour = closingHour;
    this._seats = seats || 0;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get openingHour(): number {
    return this._openingHour;
  }

  public set openingHour(value: number) {
    if (value < 6 || value > 12) {
      throw new Error("Opening hour must be between 6 and 12.");
    }
    this._openingHour = value;
  }

  public get closingHour(): number {
    return this._closingHour;
  }

  public set closingHour(value: number) {
    if (value < 18 || value > 23) {
      throw new Error("Closing hour must be between 18 and 23.");
    }
    this._closingHour = value;
  }

  public get seats(): number {
    return this._seats;
  }

  public set seats(value: number) {
    if (value < 0) {
      throw new Error("Number of seats cannot be negative.");
    }
    this._seats = value;
  }

  public calculateHoursOpen(): number {
    return this._closingHour - this._openingHour;
  }

  public displayDetails(): void {
    console.log(
      `Name: ${this._name}\nOpening Hour: ${this._openingHour}\nClosing Hour: ${this._closingHour}\nSeats: ${
        this._seats
      }\nHours Open: ${this.calculateHoursOpen()}`
    );
  }
}

let cinema1 = new Cinema("Cinema1");
cinema1.openingHour = 7;
cinema1.closingHour = 22;
cinema1.seats = 100;

let cinema2 = new Cinema("Cinema2");
cinema2.openingHour = 8;
cinema2.closingHour = 23;

cinema1.displayDetails();
console.log("\n");
cinema2.displayDetails();
