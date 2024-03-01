import { spawn } from "child_process";
import Ofir from "../../stam/Ofir/Ofir";
import "./MainPage.css";
import Gang1 from "../../Modules/Gang1/Gang1";
import Gang2 from "../../Modules/Gang2/Gang2";

function MainPage(): JSX.Element {
  //   let bestStudent: string = "Matti";
  //   let complicatedStudent: string = "Gabriel";
  //   let totalAccessories: number = 10;
  //   let totalDevices: number = 5;
  //   let normalDay: string = "Prepared Food";
  //   let weekend: string = "Salmon with Potatoes";
  //   let isWeekend: boolean = true;
  //   let weekendMessage: string = "Weekend, time to relax!";
  //   let studentsInClass = [
  //     { id: 1, name: "Yeruslav" },
  //     { id: 2, name: "Gabriel" },
  //     { id: 3, name: "Matti" },
  //     { id: 4, name: "Ofir" },
  //     { id: 5, name: "Yarden" },
  //     { id: 6, name: "Dima" },
  //   ];
  let myDevice = [
    { id: 1, nodeID: 10, name: "entrance", location: "main-floor", epID: 100 },
    { id: 2, nodeID: 12, name: "dinning", location: "main-floor", epID: 101 },
    { id: 3, nodeID: 14, name: "kitchen", location: "main-floor", epID: 102 },
    { id: 4, nodeID: 16, name: "living-room", location: "main-floor", epID: 103 },
    { id: 5, nodeID: 18, name: "bathroom", location: "main-floor", epID: 104 },
  ];

  let myDeviceWithEpID = [
    { id: 6, nodeID: 20, name: "bedroom", location: "second-floor", epID: 105 },
    { id: 7, nodeID: 22, name: "bathroom", location: "second-floor", epID: 106 },
    { id: 8, nodeID: 24, name: "office", location: "second-floor", epID: 107 },
    { id: 9, nodeID: 26, name: "kids-room", location: "second-floor", epID: 108 },
    { id: 10, nodeID: 28, name: "guest-room", location: "second-floor", epID: 109 },
  ];
  return (
    <div className="MainPage">
      {/* <Gang1 nodeID={10} name={"entrance"} location={"main-floor"} />
      <Gang1 nodeID={12} name={"dinning"} location={"main-floor"} /> */}

      {myDevice.map((item) => (
        <Gang1 key={item.id} nodeID={item.nodeID} name={item.name} location={item.location} />
      ))}
      {myDeviceWithEpID.map((item) => (
        <Gang2 key={item.id} nodeID={item.nodeID} name={item.name} location={item.location} epID={item.epID} />
      ))}
    </div>
  );
}

export default MainPage;

//   Welcome to our REACT project!
//   <br />
//   Our best student is: {bestStudent} and most complicated one is: {complicatedStudent}
//   <br />
//   There are {totalAccessories} accessories in {totalDevices} devices.
//   <hr />
//   Devices {totalDevices} / Total {totalAccessories}
//   <br />
//   <div className="Box">
//     Today we are eating {isWeekend ? weekend : normalDay}
//     <br />
//     {isWeekend && weekendMessage}
//   </div>
//   {isWeekend && <Ofir />}
//   <br />
//   {studentsInClass.map((item) => (
//     <span key={item.id}>{item.name} | </span>
//   ))}
