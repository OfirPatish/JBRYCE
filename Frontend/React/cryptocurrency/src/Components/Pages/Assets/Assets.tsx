import React, { useEffect, useState } from "react";
import axios from "axios";
import { CoinAsset } from "../../Model/CoinAsset";
import AssetItem from "../../Features/AssetItem/AssetItem";
// import "./Assets.css";

const API_BASE_URL = "https://api.coincap.io/v2";

const Assets: React.FC = () => {
  const [coins, setCoins] = useState<CoinAsset[]>([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/assets`).then((response) => {
      setCoins(response.data.data);
    });
  }, []);

  return (
    <div className="AssetItem">
      {coins.map((coin: CoinAsset, index: number) => (
        <AssetItem key={index} {...coin} />
      ))}
    </div>
  );
};

export default Assets;
