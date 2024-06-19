import { configureStore, combineReducers } from "@reduxjs/toolkit";
import carReducer from "./carReducer";

const rootReducer = combineReducers({
  car: carReducer,
  // Add other reducers here if any
});

const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  localStorage.setItem("cars", JSON.stringify(store.getState()));
  return result;
};

const reHydrateStore = () => {
  if (localStorage.getItem("cars") !== null) {
    return JSON.parse(localStorage.getItem("cars")!);
  }
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: reHydrateStore(),
});

export default store;
