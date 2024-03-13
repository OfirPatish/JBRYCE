import { CoinHistory } from "../../Model/CoinHistory";
import "./HistoryItem.css";

function HistoryItem(props: CoinHistory): JSX.Element {
  return (
    <div className="HistoryItem">
      <p>
        Price (USD): {props.priceUsd} | Time: {new Date(props.time).toLocaleString()}
      </p>
    </div>
  );
}

export default HistoryItem;
