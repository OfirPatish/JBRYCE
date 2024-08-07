class SmartHome {
  private homeName: string;
  private homeAddress: string;
  private smartDevices: SmartDevice[];

  constructor(homeName: string, homeAddress: string) {
    this.homeName = homeName;
    this.homeAddress = homeAddress;
    this.smartDevices = [];
  }

  public addSmartDevice(deviceName: string, deviceLocation: string, deviceNodeId: number, totalEndpoints: number) {
    const newSmartDevice = new SmartDevice(deviceName, deviceLocation, deviceNodeId);
    newSmartDevice.createEndpoints(totalEndpoints);
    this.smartDevices.push(newSmartDevice);
  }

  public displayHomeDetails(): void {
    this.smartDevices.forEach((device) => {
      console.log(
        `\nDevice Details:\n----------------\nName: ${device.name}\nLocation: ${device.location}\nNode ID: ${device.nodeId}\n\nEndpoints:\n----------`
      );
      device.endpoints.forEach((endpoint) => {
        console.log(`ID: ${endpoint.id}\nName: ${endpoint.name}\n----------`);
      });
    });
  }
}

class SmartDevice {
  private _name: string;
  private _location: string;
  private _nodeId: number;
  private _endpoints: Endpoint[];

  constructor(name: string, location: string, nodeId: number) {
    this._name = name;
    this._location = location;
    this._nodeId = nodeId;
    this._endpoints = [];
  }

  public createEndpoints(totalEndpoints: number): void {
    for (let counter = 1; counter <= totalEndpoints; counter++) {
      const singleEndpoint = new Endpoint(`Node ID-${this._nodeId}-Endpoint ID-${counter}`, counter);
      this._endpoints.push(singleEndpoint);
    }
  }

  public get name(): string {
    return this._name;
  }

  public get location(): string {
    return this._location;
  }

  public get nodeId(): number {
    return this._nodeId;
  }

  public get endpoints(): Endpoint[] {
    return this._endpoints;
  }
}

class Endpoint {
  private _name: string;
  private _id: number;

  constructor(name: string, id: number) {
    this._name = name;
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public get id(): number {
    return this._id;
  }
}

const myLuxuryHome = new SmartHome("Ofir's Luxury Villa", "Qiryat Motzkin");
myLuxuryHome.addSmartDevice("Main Entrance", "Ground Floor", 10, 13);
myLuxuryHome.addSmartDevice("Spacious Living Room", "Ground Floor", 11, 13);
myLuxuryHome.addSmartDevice("Master Suite", "First Floor", 12, 13);
myLuxuryHome.addSmartDevice("Private Home Theater", "Basement", 13, 3);
myLuxuryHome.addSmartDevice("Children's Playroom", "Basement", 14, 3);

myLuxuryHome.displayHomeDetails();
