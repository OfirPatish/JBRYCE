import { Route, Routes } from "react-router-dom";
import MainPage from "../../Layout/MainPage/MainPage";
import MeetingManager from "../../Pages/MeetingManager/MeetingManager";
import NotFound from "../../Pages/NotFound/NotFound";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/meetings" element={<MeetingManager />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
