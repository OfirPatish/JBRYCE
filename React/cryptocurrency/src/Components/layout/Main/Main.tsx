import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import MainRoute from "../../Route/MainRoute/MainRoute";

const Main: React.FC = () => {
  return (
    <main className="Main">
      <Header />
      <Menu />
      <MainRoute />
      <Footer />
    </main>
  );
};

export default Main;
