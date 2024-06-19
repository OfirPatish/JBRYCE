import { configureStore, combineReducers } from "@reduxjs/toolkit";
import youtubeReducer from "./youtubeReducer";
// import other reducers...

// Combine the reducers
const rootReducer = combineReducers({
  youtube: youtubeReducer,
  // other: otherReducer,
});

// Load the state from localStorage
const savedState = localStorage.getItem("youtubeState");
const initialState = savedState ? JSON.parse(savedState) : undefined;

export const store = configureStore({
  reducer: rootReducer, // Use the combined reducer
  preloadedState: initialState,
});

store.subscribe(() => {
  localStorage.setItem("youtubeState", JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
