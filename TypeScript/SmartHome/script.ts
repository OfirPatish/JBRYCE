class Endpoint {
  private _name: string;
  private _number: number;

  constructor(name: string, number: number) {
    if (number < 1 || number > 13) {
      throw new Error("Invalid number. Number can only be between 1 and 13.");
    }
    this._name = name;
    this._number = number;
  }

  public get name(): string {
    return this._name;
  }

  public get number(): number {
    return this._number;
  }
}

class Device {
  private _name: string;
  private _location: string;
  private _number: number;
  private _endpoints: Endpoint[];

  constructor(name: string, location: string, number: number, endpoints: Endpoint[]) {
    if (number < 10 || number > 150) {
      throw new Error("Invalid number. Number can only be between 10 and 150.");
    }
    this._name = name;
    this._location = location;
    this._number = number;
    this._endpoints = endpoints;
  }

  public get name(): string {
    return this._name;
  }

  public get location(): string {
    return this._location;
  }

  public get number(): number {
    return this._number;
  }

  public get endpoints(): Endpoint[] {
    return this._endpoints;
  }
}

class SmartHome {
  private _devices: Device[];

  constructor(devices: Device[]) {
    this._devices = devices;
  }

  public setEndpointName(deviceNumber: number, endpointNumber: number, name: string): void {
    const device = this._devices.find((device) => device.number === deviceNumber);
    if (!device) {
      throw new Error(`Device with number ${deviceNumber} not found.`);
    }
    const endpoint = device.endpoints.find((endpoint) => endpoint.number === endpointNumber);
    if (!endpoint) {
      throw new Error(`Endpoint with number ${endpointNumber} not found in device ${deviceNumber}.`);
    }
    Object.defineProperty(endpoint, "name", { value: name });
  }
}

const endpoint1 = new Endpoint("Lamp", 1);
const endpoint2 = new Endpoint("Light", 2);
const endpoint3 = new Endpoint("Fan", 3);
const endpoint4 = new Endpoint("Heater", 4);
const endpoint5 = new Endpoint("AC", 5);
const endpoint6 = new Endpoint("TV", 6);

const device1 = new Device("Living Room Lamp", "Living Room", 10, [endpoint1]);

const device2 = new Device("Living Room Light", "Living Room", 11, [endpoint2]);

const device3 = new Device("Living Room Fan", "Living Room", 12, [endpoint3]);

const device4 = new Device("Living Room Heater", "Living Room", 13, [endpoint4]);

const device5 = new Device("Living Room AC", "Living Room", 14, [endpoint5]);

const device6 = new Device("Living Room TV", "Living Room", 15, [endpoint6]);

const smartHome = new SmartHome([device1, device2, device3, device4, device5, device6]);
smartHome.setEndpointName(10, 1, "Living Room Lamp");
smartHome.setEndpointName(11, 2, "Living Room Light");
smartHome.setEndpointName(12, 3, "Living Room Fan");
smartHome.setEndpointName(13, 4, "Living Room Heater");
smartHome.setEndpointName(14, 5, "Living Room AC");
smartHome.setEndpointName(15, 6, "Living Room TV");
console.log(smartHome);
