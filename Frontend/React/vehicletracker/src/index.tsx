import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import MainLayout from "./Components/Layout/MainLayout/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <MainLayout />
    <ToastContainer
      autoClose={2000}
      closeButton={false}
      closeOnClick
      draggable
      hideProgressBar={false}
      limit={3}
      newestOnTop={false}
      pauseOnFocusLoss
      pauseOnHover
      position="top-center"
      rtl={false}
      transition={Zoom}
    />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
