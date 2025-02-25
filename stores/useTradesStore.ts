import { create } from "zustand";
import { type Exchange, type Trade } from "ccxt";

interface TradesStoreState {
  tradesByUser: Record<string, Trade[]>; // Cache per userId
  currentUserId: string | null;
  loading: boolean;
  error: string | null;
  fetchTrades: (
    userId: string,
    exchange: Exchange,
    tickers: string[],
  ) => Promise<void>;
  resetUserTrades: () => void;
}

export const useTradesStore = create<TradesStoreState>((set, get) => ({
  tradesByUser: {},
  currentUserId: null,
  loading: false,
  error: null,
  fetchTrades: async (
    userId: string,
    exchange: Exchange,
    tickers: string[],
  ) => {
    // Se abbiamo già i trades in cache per questo utente e non è in caricamento, usali
    if (get().tradesByUser[userId] && !get().loading) {
      set({ currentUserId: userId, error: null });
      return;
    }

    set({ loading: true, error: null, currentUserId: userId });
    try {
      const trades = await Promise.all(
        tickers
          .filter((ticker) => ticker !== "USDT")
          .map(async (crypto) => {
            try {
              const symbol = `${crypto}/USDT`;
              const trades = await exchange.fetchMyTrades(symbol);
              return trades;
            } catch (error) {
              console.error(`Error fetching trades for ${crypto}: ${error}`);
              return [];
            }
          }),
      );

      set((state) => ({
        tradesByUser: { ...state.tradesByUser, [userId]: trades.flat() },
        loading: false,
      }));
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
  resetUserTrades: () => {
    set({ currentUserId: null });
  },
}));
