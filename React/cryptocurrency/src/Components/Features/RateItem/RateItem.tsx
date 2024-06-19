import { CoinRate } from "../../Model/CoinRate";
import "./RateItem.css";

function RateItem(props: CoinRate): JSX.Element {
  return (
    <div className="RateItem">
      <p>
        ID: {props.id} | Symbol: {props.symbol} | Currency Symbol: {props.currencySymbol} | Rate (USD): {props.rateUsd}{" "}
        | Type: {props.type}
      </p>
    </div>
  );
}

export default RateItem;
