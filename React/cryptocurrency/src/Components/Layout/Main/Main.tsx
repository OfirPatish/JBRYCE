import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MainRoute from "../../Route/MainRoute/MainRoute";
import Footer from "../Footer/Footer";

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
