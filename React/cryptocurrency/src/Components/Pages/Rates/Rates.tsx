import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinRate } from "../../Model/CoinRate";
import RateItem from "../../Features/RateItem/RateItem";
// import "./Rates.css";

const API_BASE_URL = "https://api.coincap.io/v2";

const Rates: React.FC = () => {
  const [coins, setCoins] = useState<CoinRate[]>([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/rates`).then((response) => {
      setCoins(response.data.data);
    });
  }, []);

  return (
    <div className="RateItem">
      {coins.map((coin: CoinRate, index: number) => (
        <RateItem key={index} {...coin} />
      ))}
    </div>
  );
};

export default Rates;
