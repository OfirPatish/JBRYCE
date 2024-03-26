import { Route, Routes } from "react-router-dom";
import NotFound from "../../Pages/NotFound/NotFound";
import SongList from "../../Pages/SongList/SongList";
import AddNewSong from "../../Pages/AddNewSong/AddNewSong";
import AboutMe from "../../Pages/AboutMe/AboutMe";
import VideoPlayer from "../../Pages/VideoPlayer/VideoPlayer";

function MainRoute(): JSX.Element {
  return (
    <div className="MainRoute">
      <Routes>
        <Route path="/" element={<SongList />} />
        <Route path="/addSong" element={<AddNewSong />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/videoplayer/:videoID" element={<VideoPlayer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoute;
