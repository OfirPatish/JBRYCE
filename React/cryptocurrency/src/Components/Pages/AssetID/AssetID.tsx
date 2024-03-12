import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CoinAsset } from "../../Model/CoinAsset";
import AssetItem from "../../Features/AssetItem/AssetItem";

const AssetID: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [coin, setCoin] = useState<CoinAsset | null>(null);

  useEffect(() => {
    axios.get(`https://api.coincap.io/v2/assets/${id}`).then((response) => {
      setCoin(response.data.data);
    });
  }, [id]);

  return <div className="Assets">{coin && <AssetItem {...coin} />}</div>;
};

export default AssetID;
