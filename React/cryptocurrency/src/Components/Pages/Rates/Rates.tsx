import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinRate } from "../../Model/CoinRate";
import "./Rates.css";
import RateItem from "../../Features/RateItem/RateItem";

const Rates: React.FC = () => {
  const [coins, setCoins] = useState<CoinRate[]>([]);

  useEffect(() => {
    axios.get("https://api.coincap.io/v2/rates").then((response) => {
      setCoins(response.data.data);
    });
  }, []);

  return (
    <div className="Rates">
      {coins.map((coin: CoinRate, index: number) => (
        <RateItem key={index} {...coin} />
      ))}
    </div>
  );
};

export default Rates;
