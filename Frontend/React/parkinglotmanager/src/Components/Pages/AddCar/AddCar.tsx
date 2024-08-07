import { useState } from "react";
import axios from "axios";
import "./AddCar.css";
import { CarModel } from "../../Model/CarModel/CarModel";
import { useDispatch, useSelector } from "react-redux";
import { addCar as addCarAction } from "../../Redux/carReducer";

function AddCar(): JSX.Element {
  const [carNumber, setCarNumber] = useState("");
  const [carData, setCarData] = useState<CarModel | null>(null);
  const [km, setKm] = useState("");
  const [numberOfUses, setNumberOfUses] = useState("");
  const [generalInfo, setGeneralInfo] = useState("");

  const cars = useSelector((state: any) => state.car.cars);

  const dispatch = useDispatch();

  const fetchCarData = async () => {
    const response = await axios.get(
      `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${carNumber}`
    );
    const carRecord = response.data.result.records[0];
    if (!carRecord) {
      alert("Car not found.");
      return;
    }
    const car = new CarModel(
      carRecord.mispar_rechev,
      carRecord.tozeret_nm,
      carRecord.degem_nm,
      carRecord.degem_manoa,
      carRecord.tzeva_rechev,
      carRecord.shnat_yitzur
    );
    setCarData(car);
    setCarNumber("");
  };

  const addCar = () => {
    if (!carData) {
      alert("Car data is not loaded.");
      return;
    }

    const isCarAlreadyAdded = cars.some((car: any) => car.id === carData.mispar_rechev.toString());
    if (isCarAlreadyAdded) {
      alert("This car is already added.");
      return;
    }

    const carInfo = {
      id: carData.mispar_rechev.toString(),
      carData,
      km,
      numberOfUses,
      generalInfo,
    };

    dispatch(addCarAction(carInfo));
  };

  return (
    <div className="AddCar">
      <input
        type="text"
        value={carNumber}
        onChange={(e) => setCarNumber(e.target.value)}
        placeholder="Car Number"
        className="carNumberInput"
      />
      <button onClick={fetchCarData}>Fetch Car Data</button>
      {carData && (
        <div className="carInfo">
          <p>Manufacturer: {carData.tozeret_nm}</p>
          <p>Model: {carData.degem_nm}</p>
          <p>Engine: {carData.degem_manoa}</p>
          <p>Color: {carData.tzeva_rechev}</p>
          <p>Year: {carData.shnat_yitzur}</p>
          <input type="number" value={km} onChange={(e) => setKm(e.target.value)} placeholder="KM" min="0" />
          <input
            type="number"
            value={numberOfUses}
            onChange={(e) => setNumberOfUses(e.target.value)}
            placeholder="Ownership"
            min="0"
          />
          <textarea value={generalInfo} onChange={(e) => setGeneralInfo(e.target.value)} placeholder="General Info" />
          <button onClick={addCar}>Add Car</button>
        </div>
      )}
    </div>
  );
}

export default AddCar;
