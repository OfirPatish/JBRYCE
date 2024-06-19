import { useSelector } from "react-redux";
import SingleCar from "../SingleCar/SingleCar";
import "./CarList.css";

function CarList(): JSX.Element {
  const cars = useSelector((state: any) => state.car.cars);

  return (
    <div className="car-list">
      {cars.map((carInfo: any, index: number) => (
        <SingleCar key={index} carInfo={carInfo} />
      ))}
    </div>
  );
}

export default CarList;
