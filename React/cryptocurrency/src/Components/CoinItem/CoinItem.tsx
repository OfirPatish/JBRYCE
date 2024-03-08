import { CoinRate } from "../model/Coin";
import "./CoinItem.css";

function CoinItem(props: CoinRate): JSX.Element {
  return (
    <div>
      <p>
        {props.symbol} ({props.currencySymbol}) | ID: {props.id} | USD: {props.rateUsd} | Type: {props.type}
      </p>
    </div>
  );
}

export default CoinItem;
