class Theater {
  private _name: string;
  private _seatNumber: number;
  private _openHours: number;
  private _closingHours: number;

  constructor(name: string, seatNumber: number, openHours: number, closingHours: number) {
    this._name = name;
    this._seatNumber = seatNumber;
    this._openHours = openHours;
    this._closingHours = closingHours;
  }

  public get name(): string {
    return this._name;
  }

  public set setName(value: string) {
    this._name = value;
  }

  public get seatNumber(): number {
    return this._seatNumber;
  }

  public set setSeatNumber(value: number) {
    if (value < 0) {
      throw new Error("Seat number must be a positive value");
    }
    this._seatNumber = value;
  }

  public get openHours(): number {
    return this._openHours;
  }

  public set setOpenHours(value: number) {
    if (value < 6 || value > 12) {
      throw new Error("Open hours must be a full number between 6 and 12");
    }
    if (this._closingHours && value >= this._closingHours) {
      throw new Error("Open hours must be less than closing hours");
    }
    this._openHours = value;
  }

  public get closingHours(): number {
    return this._closingHours;
  }

  public set setClosingHours(value: number) {
    if (value < 18 || value > 23) {
      throw new Error("Closing hours must be a full number between 18 and 23");
    }
    if (this._openHours && value <= this._openHours) {
      throw new Error("Closing hours must be greater than open hours");
    }
    this._closingHours = value;
  }

  public calculateOpenHours(): number {
    return this._closingHours - this._openHours;
  }

  public printTheaterDetails(): void {
    console.log(
      `Theater name: ${this._name}, Number of seats: ${this._seatNumber}, Open hours: ${this._openHours}, Closing hours: ${this._closingHours}`
    );
  }
}

let theater = new Theater("PVR", 100, 6, 23);
theater.setName = "AMC";
theater.setSeatNumber = 200;
theater.setOpenHours = 7;
theater.setClosingHours = 22;
theater.printTheaterDetails();
console.log(theater.calculateOpenHours());
