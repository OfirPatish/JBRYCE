import "./MainRoute.css";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Assets from "../../Pages/Assets/Assets";
import Rates from "../../Pages/Rates/Rates";
import Page404 from "../../Pages/Page404/Page404";
import AssetID from "../../Pages/AssetID/AssetID";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/assets/:id" element={<AssetID />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
