import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinRate } from "./../../model/Coin";
import "./CryptoList.css";
import CoinItem from "../../CoinItem/CoinItem";

const CryptoList: React.FC = () => {
  const [coins, setCoins] = useState<CoinRate[]>([]);

  useEffect(() => {
    axios.get("https://api.coincap.io/v2/rates").then((response) => {
      setCoins(response.data.data);
    });
  }, []);

  return (
    <div className="CryptoList">
      {coins.map((coin: CoinRate, index: number) => (
        <CoinItem key={index} {...coin} />
      ))}
    </div>
  );
};

export default CryptoList;
