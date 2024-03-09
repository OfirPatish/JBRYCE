import React from "react";
import "./App.css";
import Header from "./Components/Layout/Header/Header";
import Main from "./Components/Layout/Main/Main";
import Footer from "./Components/Layout/Footer/Footer";
import reportWebVitals from "./reportWebVitals";
import Menu from "./Components/Layout/Menu/Menu";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

reportWebVitals();
