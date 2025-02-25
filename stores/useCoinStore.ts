import { create } from "zustand";
import { Coin } from "../types/coin";

interface CoinStoreState {
  coins: Record<string, Coin>; // Cache per ID
  currentId: string | null;
  loading: boolean;
  error: string | null;
  fetchCoin: (id: string) => Promise<void>;
  resetCurrentCoin: () => void;
}

export const useCoinStore = create<CoinStoreState>((set, get) => ({
  coins: {},
  currentId: null,
  loading: false,
  error: null,
  fetchCoin: async (id: string) => {
    // Se abbiamo già la coin in cache e non è in caricamento, usala
    if (get().coins[id] && !get().loading) {
      set({ currentId: id, error: null });
      return;
    }

    set({ loading: true, error: null, currentId: id });
    try {
      const response = await fetch(`/api/coins?id=${id}`);
      if (!response.ok) {
        console.error("Network response was not ok:", response.statusText);
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      set((state) => ({
        coins: { ...state.coins, [id]: data },
        loading: false,
      }));
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      set({ error: message, loading: false });
    }
  },
  resetCurrentCoin: () => {
    set({ currentId: null });
  },
}));

// Selector per ottenere la coin corrente
export const useCurrentCoin = () => {
  const { coins, currentId } = useCoinStore();
  return currentId ? coins[currentId] : null;
};
