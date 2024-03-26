import React, { useState } from "react";
import "./AddNewSong.css";
import VideoModel from "../../../Model/VideoModel";

function AddNewSong(): JSX.Element {
  const [videoId, setVideoId] = useState("");
  const [video, setVideo] = useState<VideoModel | null>(null);
  const API_KEY = "AIzaSyACfGBheILlewSozwnGed7M6wh34ef9sBc";

  const fetchVideoDetails = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet`
    );
    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      alert("Failed to fetch video details. Please check the video ID and try again.");
      return;
    }

    const videoData = data.items[0];

    const newVideo = new VideoModel(
      videoData.id,
      videoData.snippet.title,
      videoData.snippet.description,
      videoData.snippet.thumbnails.standard.url
    );
    setVideo(newVideo);
  };

  const addVideo = () => {
    if (!video) {
      alert("No video to add. Please fetch a video first.");
      return;
    }

    // Load the videos from local storage
    const videos = JSON.parse(localStorage.getItem("videos") || "[]");

    // Check if the video already exists in local storage
    const videoExists = videos.some((v: VideoModel) => v.videoID === video.videoID);
    if (videoExists) {
      alert("This video is already in your list.");
      return;
    }

    // If the video doesn't exist, add it to local storage
    videos.push(video);
    localStorage.setItem("videos", JSON.stringify(videos));
    alert("Video added successfully!");
  };

  return (
    <div className="AddNewSong">
      <h1>Add new video</h1>
      <input
        type="text"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
        placeholder="Enter YouTube video ID"
      />
      <button onClick={fetchVideoDetails}>Fetch Video Details</button>
      <br />
      <button onClick={addVideo}>Add Video</button>
      {video && (
        <div>
          <h2>{video.videoTitle}</h2>
          <img src={video.videoImageURL} alt={video.videoTitle} />
          <p>{video.videoDescription}</p>
        </div>
      )}
    </div>
  );
}

export default AddNewSong;
