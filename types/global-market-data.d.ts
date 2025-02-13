export interface GlobalMarketDataResponse {
  data: GlobalMarketData;
}

export interface GlobalMarketData {
  active_cryptocurrencies: number;
  upcoming_icos: number;
  ongoing_icos: number;
  ended_icos: number;
  markets: number;
  total_market_cap: Record<string, number>;
  total_volume: Record<string, number>;
  market_cap_percentage: {
    btc: number;
    eth: number;
    usdt: number;
    xrp: number;
    bnb: number;
    sol: number;
    usdc: number;
    doge: number;
    ada: number;
    steth: number;
  };
  market_cap_change_percentage_24h_usd: number;
  updated_at: number;
}
