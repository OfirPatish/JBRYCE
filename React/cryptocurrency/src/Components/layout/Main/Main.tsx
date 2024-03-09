import React from "react";
import "./Main.css";
import CryptoList from "../../Features/CryptoList/CryptoList";

const Main: React.FC = () => {
  return (
    <main className="Main">
      <CryptoList />
    </main>
  );
};

export default Main;
