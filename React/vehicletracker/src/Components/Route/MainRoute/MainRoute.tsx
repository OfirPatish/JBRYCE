import "./MainRoute.css";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Search from "../../Pages/Search/Search";
import Page404 from "../../Pages/Page404/Page404";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:VehicleType" element={<Search />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
