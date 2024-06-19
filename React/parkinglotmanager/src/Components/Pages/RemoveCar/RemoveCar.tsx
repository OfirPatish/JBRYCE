import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar as removeCarAction } from "../../Redux/carReducer";
import "./RemoveCar.css";

function RemoveCar(): JSX.Element {
  const [selectedCarId, setSelectedCarId] = useState("");
  const dispatch = useDispatch();
  const cars = useSelector((state: any) => state.car.cars);

  const removeCar = () => {
    if (!selectedCarId) {
      alert("Please select a car to remove.");
      return;
    }
    dispatch(removeCarAction(selectedCarId));
    alert(`Removed car with id ${selectedCarId} from the store`);
    setSelectedCarId("");
  };

  return (
    <div className="RemoveCar">
      <select value={selectedCarId} onChange={(e) => setSelectedCarId(e.target.value)} className="carSelect">
        <option value="">Select a car</option>
        {cars.map((car: any) => (
          <option key={car.id} value={car.id}>
            {car.id}
          </option>
        ))}
      </select>
      <button onClick={removeCar} className="removeButton">
        Remove Car
      </button>
    </div>
  );
}

export default RemoveCar;
