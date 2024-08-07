class CoinRate {
  public id: string;
  public symbol: string;
  public currencySymbol: string;
  public rateUsd: string;
  public type: string;

  constructor(id: string, symbol: string, currencySymbol: string, rateUsd: string, type: string) {
    this.id = id;
    this.symbol = symbol;
    this.currencySymbol = currencySymbol;
    this.rateUsd = rateUsd;
    this.type = type;
  }
}

export { CoinRate };
