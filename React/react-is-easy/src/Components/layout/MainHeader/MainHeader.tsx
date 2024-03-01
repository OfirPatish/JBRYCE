import "./MainHeader.css";

function MainHeader(): JSX.Element {
  let totalAccessories: number = 10;
  let totalDevices: number = 5;
  return (
    <div className="MainHeader">
      <h1>Smart Home name configuration</h1>
      <br />
      Devices {totalDevices} / Total {totalAccessories}
    </div>
  );
}

export default MainHeader;
