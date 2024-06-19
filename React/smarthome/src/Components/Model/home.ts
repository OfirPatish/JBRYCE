import { Devices } from "./devices";

export class Home {
  public id: number;
  public name: string;
  public devices: Devices[];

  constructor(id: number, name: string, devices: Devices[]) {
    this.id = id;
    this.name = name;
    this.devices = devices;
  }
}
