import React from "react";
import VideoModel from "../../../Model/VideoModel";
import { Link } from "react-router-dom";
import "./SingleSong.css";

interface SingleSongProps {
  video: VideoModel;
  onRemove: (video: VideoModel) => void;
}

const SingleSong: React.FC<SingleSongProps> = ({ video, onRemove }): JSX.Element => {
  return (
    <div className="single-song-component">
      <Link to={`/videoplayer/${video.videoID}`}>
        <img src={video.videoImageURL} alt={video.videoTitle} />
      </Link>
      <div>
        <h2>{video.videoTitle}</h2>
        <p>{video.videoDescription}</p>
      </div>
      <button className={`remove-button remove-button-${video.videoID}`} onClick={() => onRemove(video)}>
        X
      </button>
    </div>
  );
};

export default SingleSong;
