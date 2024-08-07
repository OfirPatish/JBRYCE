import { Route, Routes } from "react-router-dom";
import MainPage from "../../Layout/MainPage/MainPage";
import ServerList from "../../Pages/ServerList/ServerList";
import NotFound from "../../Pages/NotFound/NotFound";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/servers" element={<ServerList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
