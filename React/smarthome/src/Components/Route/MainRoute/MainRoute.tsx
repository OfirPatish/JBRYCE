import "./MainRoute.css";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import ShowDevices from "../../Pages/ShowDevices/ShowDevices";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<ShowDevices />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
