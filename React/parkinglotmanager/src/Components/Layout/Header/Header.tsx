import { useSelector } from "react-redux";
import "./Header.css";

function Header(): JSX.Element {
  const totalCars = useSelector((state: any) => state.car.cars.length);

  return (
    <div className="Header">
      <h1>Parking Lot Manager App</h1>
      <br />
      <div>Total Cars: {totalCars}</div>
    </div>
  );
}

export default Header;
