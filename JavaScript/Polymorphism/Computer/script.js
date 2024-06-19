class Computer {
  constructor(cpuMemory, diskMemory, processorModel, price, warrantyYears) {
    this.cpuMemory = cpuMemory;
    this.diskMemory = diskMemory;
    this.processorModel = processorModel;
    this.price = price;
    this.warrantyYears = warrantyYears;
  }

  set cpuMemory(value) {
    if (value < 4 || value > 16) {
      throw new Error("CPU Memory should be between 4 and 16");
    }
    this._cpuMemory = value;
  }

  get cpuMemory() {
    return this._cpuMemory;
  }

  set diskMemory(value) {
    if (value < 200 || value > 3000) {
      throw new Error("Disk Memory should be between 200 and 3000");
    }
    this._diskMemory = value;
  }

  get diskMemory() {
    return this._diskMemory;
  }

  set processorModel(value) {
    this._processorModel = value;
  }

  get processorModel() {
    return this._processorModel;
  }

  set price(value) {
    if (value < 800 || value > 20000) {
      throw new Error("Price should be between 800 and 20000");
    }
    this._price = value;
  }

  get price() {
    return this._price;
  }

  set warrantyYears(value) {
    if (value < 0 || value > 5) {
      throw new Error("Warranty Years should be between 0 and 5");
    }
    this._warrantyYears = value;
  }

  get warrantyYears() {
    return this._warrantyYears;
  }

  purchaseEquipment() {
    return "Offer: Purchase headphones for your new computer!";
  }

  printDetails() {
    return `CPU Memory: ${this.cpuMemory}\nDisk Memory: ${this.diskMemory}\nProcessor Model: ${this.processorModel}\nPrice: ${this.price}\nWarranty Years: ${this.warrantyYears}\n`;
  }

  executeActions() {
    return `${this.printDetails()}\n${this.purchaseEquipment()}`;
  }
}

// let computer = new Computer(8, 500, "Intel Core i5", 1500, 2);

class DesktopComputer extends Computer {
  constructor(cpuMemory, diskMemory, processorModel, price, warrantyYears, isMouseWireless, screenSize) {
    super(cpuMemory, diskMemory, processorModel, price, warrantyYears);
    this.isMouseWireless = isMouseWireless;
    this.screenSize = screenSize;
  }

  set isMouseWireless(value) {
    this._isMouseWireless = value;
  }

  get isMouseWireless() {
    return this._isMouseWireless;
  }

  set screenSize(value) {
    if (value < 11 || value > 18) {
      throw new Error("Screen Size should be between 11 and 18");
    }
    this._screenSize = value;
  }

  get screenSize() {
    return this._screenSize;
  }

  purchaseEquipment() {
    return "Offer: Purchase a computer desk for your new desktop computer!";
  }

  printDetails() {
    return `${super.printDetails()}Is Mouse Wireless: ${this.isMouseWireless}\nScreen Size: ${this.screenSize}\n`;
  }

  executeActions() {
    return `${this.printDetails()}\n${this.purchaseEquipment()}`;
  }
}

// let desktopComputer = new DesktopComputer(8, 500, "Intel Core i5", 1500, 2, true, 15);

class Laptop extends Computer {
  constructor(
    cpuMemory,
    diskMemory,
    processorModel,
    price,
    warrantyYears,
    chargingHours,
    batteryPercentage,
    isTouchScreen
  ) {
    super(cpuMemory, diskMemory, processorModel, price, warrantyYears);

    this.chargingHours = chargingHours;
    this.batteryPercentage = batteryPercentage;
    this.isTouchScreen = isTouchScreen;
  }

  set chargingHours(value) {
    if (value < 1 || value > 9) {
      throw new Error("Charging Hours should be between 1 and 9");
    }
    this._chargingHours = value;
  }

  get chargingHours() {
    return this._chargingHours;
  }

  set batteryPercentage(value) {
    if (value < 0 || value > 100) {
      throw new Error("Battery Percentage should be between 0 and 100");
    }
    this._batteryPercentage = value;
  }

  get batteryPercentage() {
    return this._batteryPercentage;
  }

  set isTouchScreen(value) {
    this._isTouchScreen = value;
  }

  get isTouchScreen() {
    return this._isTouchScreen;
  }

  purchaseEquipment() {
    return `Offer: Purchase a laptop bag for your new laptop! \n${super.purchaseEquipment()}`;
  }

  chargeLaptop() {
    return `Battery is ${this.batteryPercentage === 100 ? "fully charged" : "not fully charged"}`;
  }

  printDetails() {
    return `${super.printDetails()}Charging Hours: ${this.chargingHours}\nBattery Percentage: ${
      this.batteryPercentage
    }\nIs Touch Screen: ${this.isTouchScreen}\n`;
  }

  executeActions() {
    return `${super.executeActions()}\n${this.chargeLaptop()}`;
  }
}

// let laptop = new Laptop(8, 500, "Intel Core i5", 1500, 2, 2, 100, true);

let computers = new Array(10);

for (let index = 0; index < computers.length; index++) {
  if (index % 2 === 0) {
    computers[index] = new Laptop(8, 500, "Intel Core i5", 1500, 2, 2, 100, true);
  } else {
    computers[index] = new DesktopComputer(16, 1000, "Intel Core i7", 2000, 3, true, 11);
  }
}

for (let computer of computers) {
  console.log(`Computer [${computers.indexOf(computer)}] is an instance of ${computer.constructor.name}`);
  console.log(computer.executeActions());
}
