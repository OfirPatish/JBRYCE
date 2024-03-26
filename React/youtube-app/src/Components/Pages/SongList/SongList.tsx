import React, { useEffect, useState } from "react";
import VideoModel from "../../../Model/VideoModel";
import SingleSong from "../SingleSong/SingleSong";
import "./SongList.css";

const SongList: React.FC = () => {
  const [videos, setVideos] = useState<VideoModel[]>([]);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem("videos") || "[]");
    setVideos(storedVideos);
  }, []);

  const removeSong = (videoToRemove: VideoModel) => {
    const updatedVideos = videos.filter((video) => video.videoID !== videoToRemove.videoID);
    setVideos(updatedVideos);
    localStorage.setItem("videos", JSON.stringify(updatedVideos));
  };

  return (
    <div className="song-list-component">
      {videos.map((videoData, index) => (
        <SingleSong key={index} video={videoData} onRemove={removeSong} />
      ))}
    </div>
  );
};

export default SongList;
