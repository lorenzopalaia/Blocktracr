import { create } from "zustand";
import { CryptoList } from "../types/crypto-list";

interface CryptoListStoreState {
  coins: CryptoList[];
  loading: boolean;
  error: string | null;
  fetchCoins: () => Promise<void>;
}

export const useCryptoListStore = create<CryptoListStoreState>((set) => ({
  coins: [],
  loading: false,
  error: null,
  fetchCoins: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("/api/crypto-list");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      set({ coins: data, loading: false });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      set({ error: message, loading: false });
    }
  },
}));
