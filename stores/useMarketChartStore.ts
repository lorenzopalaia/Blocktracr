import { create } from "zustand";
import { MarketChart } from "../types/market-chart";

interface MarketChartStoreState {
  data: MarketChart | null;
  loading: boolean;
  error: string | null;
  fetchMarketChart: (id: string) => Promise<void>;
}

export const useMarketChartStore = create<MarketChartStoreState>((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchMarketChart: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/market-chart?id=${id}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      set({ data: data, loading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      set({ error: message, loading: false });
    }
  },
}));
