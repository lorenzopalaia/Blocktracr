import { create } from "zustand";
import { TrendingCoin, TrendingNFT, TrendingCategory } from "../types/trending";

interface TrendingStoreState {
  coins: TrendingCoin[];
  nfts: TrendingNFT[];
  categories: TrendingCategory[];
  loading: boolean;
  error: string | null;
  fetchTrending: () => Promise<void>;
}

export const useTrendingStore = create<TrendingStoreState>((set) => ({
  coins: [],
  nfts: [],
  categories: [],
  loading: false,
  error: null,
  fetchTrending: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("/api/trending");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();

      const coins: TrendingCoin[] = data.coins.map((c: any) => ({
        id: c.item.id,
        name: c.item.name,
        symbol: c.item.symbol,
        marketCapRank: c.item.market_cap_rank,
        image: c.item.large,
        current_price: c.item.data.price,
        priceChange24h: c.item.data.price_change_percentage_24h.usd,
        marketCap: parseFloat(c.item.data.market_cap.replace(/[^0-9.]/g, "")),
      }));

      const nfts: TrendingNFT[] = data.nfts.map((n: any) => ({
        id: n.id,
        name: n.name,
        symbol: n.symbol,
        thumb: n.thumb,
        floorPrice: n.data.floor_price,
        floorPrice24hChange: n.data.floor_price_in_usd_24h_percentage_change,
      }));

      const categories: TrendingCategory[] = data.categories.map(
        (cat: any) => ({
          id: cat.id,
          name: cat.name,
          marketCap: cat.data.market_cap,
          marketCapChange24h: cat.data.market_cap_change_percentage_24h.usd,
        })
      );

      set({ coins, nfts, categories, loading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      set({ error: message, loading: false });
    }
  },
}));
