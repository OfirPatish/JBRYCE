import "./NotFound.css";

function NotFound(): JSX.Element {
  return (
    <div className="Page404">
      <div className="background"></div>
      <iframe
        className="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/t3otBjVZzT0?si=RyKQ-uKYt88FBt-n&amp;controls=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default NotFound;
