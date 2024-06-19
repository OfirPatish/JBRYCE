import { spawn } from "child_process";
import Ofir from "../../stam/Ofir/Ofir";
import "./MainPage.css";
import Gang1 from "../../Modules/Gang1/Gang1";

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
    { id: 1, nodeID: 10, name: "entrance", location: "main-floor", totalEPID: 0 },
    { id: 2, nodeID: 12, name: "dinning", location: "main-floor", totalEPID: 0 },
    { id: 3, nodeID: 14, name: "kitchen", location: "main-floor", totalEPID: 0 },
    { id: 4, nodeID: 16, name: "living-room", location: "main-floor", totalEPID: 1 },
    { id: 5, nodeID: 18, name: "bathroom", location: "main-floor", totalEPID: 1 },
  ];

  return (
    <div className="MainPage">
      {/* <Gang1 nodeID={10} name={"entrance"} location={"main-floor"} />
      <Gang1 nodeID={12} name={"dinning"} location={"main-floor"} /> */}

      {myDevice.map((item) => (
        <Gang1
          key={item.id}
          nodeID={item.nodeID}
          name={item.name}
          location={item.location}
          totalEPID={item.totalEPID}
        />
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
