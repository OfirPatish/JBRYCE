import { epID } from "./epid";

export class Devices {
  public id: number;
  public location: string;
  public name: string;
  public nodeid: number;
  public epid: epID[];

  constructor(id: number, location: string, name: string, nodeid: number, epid: epID[]) {
    this.id = id;
    this.location = location;
    this.name = name;
    this.nodeid = nodeid;
    this.epid = epid;
  }
}
