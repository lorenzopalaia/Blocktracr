import { create } from "zustand";
import { Coin } from "../types/coin";

interface CoinStoreState {
  coin: Coin | null;
  loading: boolean;
  error: string | null;
  fetchCoin: (id: string) => Promise<void>;
}

export const useCoinStore = create<CoinStoreState>((set) => ({
  coin: null,
  loading: false,
  error: null,
  fetchCoin: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/coin?id=${id}`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      set({ coin: data, loading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      set({ error: message, loading: false });
    }
  },
}));
