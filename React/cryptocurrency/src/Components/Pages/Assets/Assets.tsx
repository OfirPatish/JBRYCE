import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Assets.css";
import { CoinAsset } from "../../Model/CoinAsset";
import AssetItem from "../../Features/AssetItem/AssetItem";

const Assets: React.FC = () => {
  const [coins, setCoins] = useState<CoinAsset[]>([]);

  useEffect(() => {
    axios.get("https://api.coincap.io/v2/assets").then((response) => {
      setCoins(response.data.data);
    });
  }, []);

  return (
    <div className="Assets">
      {coins.map((coin: CoinAsset, index: number) => (
        <AssetItem key={index} {...coin} />
      ))}
    </div>
  );
};

export default Assets;
