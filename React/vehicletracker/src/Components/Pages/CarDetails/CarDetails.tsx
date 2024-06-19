import { Car } from "../../Model/Car";
import "./CarDetails.css";

interface CarProps {
  car: Car;
}

function CarDetails({ car }: CarProps): JSX.Element {
  return (
    <div className="CarDetails">
      <b>
        <span className="carNumber">{car.mispar_rechev}</span>
      </b>
      <hr />
      <div className="carInfo">
        {car.baalut}
        <br />
        {car.tozeret_nm}
        <br />
        {car.kinuy_mishari}
        <br />
        {car.sug_delek_nm}
        <br />
      </div>
    </div>
  );
}

export default CarDetails;
