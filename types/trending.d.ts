export interface TrendingCoin {
  id: string;
  name: string;
  symbol: string;
  marketCapRank: number;
  image: string;
  current_price: number;
  priceChange24h: number;
  marketCap: number;
}

export interface TrendingNFT {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  floorPrice: string;
  floorPrice24hChange: number;
}

export interface TrendingCategory {
  id: number;
  name: string;
  marketCap: number;
  marketCapChange24h: number;
}
