import { CarModel } from "../../Model/CarModel/CarModel";
import "./SingleCar.css";

interface SingleCarProps {
  carInfo: {
    carData: CarModel;
    km: string;
    numberOfUses: string;
    generalInfo: string;
  };
}

function SingleCar({ carInfo }: SingleCarProps): JSX.Element {
  return (
    <div className="single-car">
      <h2>Car Information</h2>
      <p>Manufacturer: {carInfo.carData.tozeret_nm}</p>
      <p>Model: {carInfo.carData.degem_nm}</p>
      <p>Engine: {carInfo.carData.degem_manoa}</p>
      <p>Color: {carInfo.carData.tzeva_rechev}</p>
      <p>Year: {carInfo.carData.shnat_yitzur}</p>
      <p>KM: {carInfo.km}</p>
      <p>Ownership: {carInfo.numberOfUses}</p>
      <p>General Info: {carInfo.generalInfo}</p>
    </div>
  );
}

export default SingleCar;
