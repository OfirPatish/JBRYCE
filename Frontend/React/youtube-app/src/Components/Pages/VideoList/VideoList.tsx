import React from "react";
import VideoModel from "../../../Model/VideoModel";
import SingleVideo from "../SingleVideo/SingleVideo";
import "./VideoList.css";
import { useSelector, useDispatch } from "react-redux";
import { removeVideo } from "../../../Redux/youtubeReducer";
import { RootState } from "../../../Redux/Store";
import { Box } from "@mui/material";

const VideoList: React.FC = () => {
  const videos = useSelector((state: RootState) => state.youtube.videos);
  const dispatch = useDispatch();

  const handleRemoveVideo = (videoToRemove: VideoModel) => {
    dispatch(removeVideo(videoToRemove));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2, // Adjusted for Material UI's spacing system
        p: 3, // Padding
        bgcolor: "background.paper", // Uses theme's background color for paper elements
        boxShadow: 1, // Subtle shadow
      }}
    >
      {videos.map((videoData, index) => (
        <SingleVideo key={index} video={videoData} onRemove={handleRemoveVideo} />
      ))}
    </Box>
  );
};

export default VideoList;
