import React from "react";
import { useParams } from "react-router-dom";
import "./VideoPlayer.css";

function VideoPlayer(): JSX.Element {
  let { videoID } = useParams<{ videoID: string }>();

  return (
    <div className="VideoPlayer">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoID}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
