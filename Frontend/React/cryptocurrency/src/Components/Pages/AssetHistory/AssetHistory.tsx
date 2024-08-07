import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CoinHistory } from "../../Model/CoinHistory";
import HistoryItem from "../../Features/HistoryItem/HistoryItem";
// import "./AssetHistory.css";

const API_BASE_URL = "https://api.coincap.io/v2";

const AssetHistory: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [history, setHistory] = useState<CoinHistory[] | null>(null);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/assets/${id}/history?interval=d1`).then((response) => {
      setHistory(response.data.data);
    });
  }, [id]);

  return (
    <div className="HistoryItem">{history && history.map((item, index) => <HistoryItem key={index} {...item} />)}</div>
  );
};

export default AssetHistory;
