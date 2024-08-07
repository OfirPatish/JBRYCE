import { Route, Routes } from "react-router-dom";
import NotFound from "../../Pages/NotFound/NotFound";
import VideoList from "../../Pages/VideoList/VideoList";
import AddNewVideo from "../../Pages/AddNewVideo/AddNewVideo";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import VideoPlayer from "../../Pages/VideoPlayer/VideoPlayer";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<VideoList />} />
        <Route path="/addVideo" element={<AddNewVideo />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/videoplayer/:videoID" element={<VideoPlayer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
