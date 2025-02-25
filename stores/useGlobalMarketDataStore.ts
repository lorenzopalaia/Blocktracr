import { create } from "zustand";
import {
  GlobalMarketData,
  GlobalMarketDataResponse,
} from "../types/global-market-data";

interface GlobalMarketDataStoreState {
  data: GlobalMarketData | null;
  loading: boolean;
  error: string | null;
  fetchGlobalMarketData: () => Promise<void>;
}

export const useGlobalMarketDataStore = create<GlobalMarketDataStoreState>(
  (set) => ({
    data: null,
    loading: false,
    error: null,
    fetchGlobalMarketData: async () => {
      set({ loading: true, error: null });
      try {
        const response = await fetch("/api/global-market-data");
        if (!response.ok) {
          console.error("Network response was not ok:", response.statusText);
          throw new Error("Network response was not ok");
        }
        const responseData: GlobalMarketDataResponse = await response.json();
        set({ data: responseData.data, loading: false });
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Unknown error";
        set({ error: message, loading: false });
      }
    },
  }),
);
