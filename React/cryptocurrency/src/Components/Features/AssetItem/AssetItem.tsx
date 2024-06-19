import { CoinAsset } from "../../Model/CoinAsset";
import "./AssetItem.css";

function AssetItem(props: CoinAsset): JSX.Element {
  return (
    <div className="AssetItem">
      <p>ID: {props.id}</p>
      <p>Rank: {props.rank}</p>
      <p>Symbol: {props.symbol}</p>
      <p>Name: {props.name}</p>
      <p>Supply: {Number(props.supply).toFixed(2)}</p>
      <p>Max Supply: {Number(props.maxSupply).toFixed(2)}</p>
      <p>Market Cap (USD): {Number(props.marketCapUsd).toFixed(2)}</p>
      <p>Volume (24Hr USD): {Number(props.volumeUsd24Hr).toFixed(2)}</p>
      <p>Price (USD): {Number(props.priceUsd).toFixed(2)}</p>
      <p>Change (24Hr %): {Number(props.changePercent24Hr).toFixed(2)}</p>
      <p>VWAP (24Hr): {Number(props.vwap24Hr).toFixed(2)}</p>
    </div>
  );
}

export default AssetItem;
