import { Route, Routes } from "react-router-dom";
import CarList from "../../Pages/CarList/CarList";
import AddCar from "../../Pages/AddCar/AddCar";
import RemoveCar from "../../Pages/RemoveCar/RemoveCar";
import NotFound from "../../Pages/NotFound/NotFound";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/addCar" element={<AddCar />} />
        <Route path="/removeCar" element={<RemoveCar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
