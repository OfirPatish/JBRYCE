class CoinHistory {
  public priceUsd: string;
  public time: number;

  constructor(priceUsd: string, time: number) {
    this.priceUsd = priceUsd;
    this.time = time;
  }
}

export { CoinHistory };
