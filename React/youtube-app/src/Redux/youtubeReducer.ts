import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import VideoModel from "../Model/VideoModel";

interface YoutubeState {
  videos: VideoModel[];
}

const initialState: YoutubeState = {
  videos: [],
};

const youtubeSlice = createSlice({
  name: "youtube",
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<VideoModel>) => {
      state.videos.push(action.payload);
    },
    removeVideo: (state, action: PayloadAction<VideoModel>) => {
      state.videos = state.videos.filter((video) => video.videoID !== action.payload.videoID);
    },
  },
});

export const { addVideo, removeVideo } = youtubeSlice.actions;

export default youtubeSlice.reducer;
