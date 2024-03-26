class VideoModel {
  videoID: string;
  videoTitle: string;
  videoDescription: string;
  videoImageURL: string;

  constructor(videoID: string, videoTitle: string, videoDescription: string, videoImageURL: string) {
    this.videoID = videoID;
    this.videoTitle = videoTitle;
    this.videoDescription = videoDescription;
    this.videoImageURL = videoImageURL;
  }
}

export default VideoModel;
