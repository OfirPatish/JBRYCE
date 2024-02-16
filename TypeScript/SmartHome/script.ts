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
      console.log(`\nDevice Details:`);
      console.log(`----------------`);
      console.log(`Name: ${device.getDeviceName}`);
      console.log(`Location: ${device.getDeviceLocation}`);
      console.log(`Node ID: ${device.getDeviceNodeId}`);
      console.log(`\nEndpoints:`);
      console.log(`----------`);
      device.getDeviceEndpoints.forEach((endpoint) => {
        console.log(`ID: ${endpoint.getEndpointId}`);
        console.log(`Name: ${endpoint.getEndpointName}`);
        console.log(`----------`);
      });
    });
  }
}

class SmartDevice {
  private deviceName: string;
  private deviceLocation: string;
  private deviceNodeId: number;
  private deviceEndpoints: Endpoint[];

  constructor(deviceName: string, deviceLocation: string, deviceNodeId: number) {
    this.deviceName = deviceName;
    this.deviceLocation = deviceLocation;
    this.deviceNodeId = deviceNodeId;
    this.deviceEndpoints = [];
  }

  public createEndpoints(totalEndpoints: number): void {
    for (let counter = 1; counter <= totalEndpoints; counter++) {
      const singleEndpoint = new Endpoint(`Node ID-${this.deviceNodeId}-Endpoint ID-${counter}`, counter);
      this.deviceEndpoints.push(singleEndpoint);
    }
  }

  public get getDeviceName(): string {
    return this.deviceName;
  }

  public get getDeviceLocation(): string {
    return this.deviceLocation;
  }

  public get getDeviceNodeId(): number {
    return this.deviceNodeId;
  }

  public get getDeviceEndpoints(): Endpoint[] {
    return this.deviceEndpoints;
  }
}

class Endpoint {
  private endpointName: string;
  private endpointId: number;

  constructor(endpointName: string, endpointId: number) {
    this.endpointName = endpointName;
    this.endpointId = endpointId;
  }

  public get getEndpointName(): string {
    return this.endpointName;
  }

  public get getEndpointId(): number {
    return this.endpointId;
  }
}

const myLuxuryHome = new SmartHome("Ofir's Luxury Villa", "Qiryat Motzkin");
myLuxuryHome.addSmartDevice("Main Entrance", "Ground Floor", 10, 13);
myLuxuryHome.addSmartDevice("Spacious Living Room", "Ground Floor", 11, 13);
myLuxuryHome.addSmartDevice("Master Suite", "First Floor", 12, 13);
myLuxuryHome.addSmartDevice("Private Home Theater", "Basement", 13, 3);
myLuxuryHome.addSmartDevice("Children's Playroom", "Basement", 14, 3);

myLuxuryHome.displayHomeDetails();
