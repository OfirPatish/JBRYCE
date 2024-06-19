import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CoinAsset } from "../../Model/CoinAsset";
import AssetItem from "../../Features/AssetItem/AssetItem";
// import "./Assets.css";

const API_BASE_URL = "https://api.coincap.io/v2";

const AssetID: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [coin, setCoin] = useState<CoinAsset | null>(null);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/assets/${id}`).then((response) => {
      setCoin(response.data.data);
    });
  }, [id]);

  return <div className="AssetItem">{coin && <AssetItem {...coin} />}</div>;
};

export default AssetID;
