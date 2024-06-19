import { Route, Routes } from "react-router-dom";
import MainPage from "../../Layout/MainPage/MainPage";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Search from "../../Pages/Search/Search";
import Admin from "../../Pages/Admin/Admin";
import NotFound from "../../Pages/NotFound/NotFound";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/:vehicleType" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
