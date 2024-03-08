import React from "react";
import "./App.css";
import Header from "./Components/layout/Header/Header";
import Main from "./Components/layout/Main/Main";
import Footer from "./Components/layout/Footer/Footer";
import reportWebVitals from "./reportWebVitals";
import Menu from "./Components/layout/Menu/Menu";

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
