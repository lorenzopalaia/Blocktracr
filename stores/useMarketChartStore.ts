import { create } from "zustand";
import { MarketChart } from "../types/market-chart";

interface MarketChartStoreState {
  charts: Record<string, MarketChart>; // Cache per ID
  currentId: string | null;
  loading: boolean;
  error: string | null;
  fetchMarketChart: (id: string) => Promise<void>;
  resetCurrentChart: () => void;
}

export const useMarketChartStore = create<MarketChartStoreState>(
  (set, get) => ({
    charts: {},
    currentId: null,
    loading: false,
    error: null,
    fetchMarketChart: async (id: string) => {
      // Se abbiamo già il chart in cache e non è in caricamento, usalo
      if (get().charts[id] && !get().loading) {
        set({ currentId: id, error: null });
        return;
      }

      set({ loading: true, error: null, currentId: id });
      try {
        const response = await fetch(`/api/market-chart?id=${id}`);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        set((state) => ({
          charts: { ...state.charts, [id]: data },
          loading: false,
        }));
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Unknown error";
        set({ error: message, loading: false });
      }
    },
    resetCurrentChart: () => {
      set({ currentId: null });
    },
  }),
);

// Selector per ottenere il chart corrente
export const useCurrentMarketChart = () => {
  const { charts, currentId } = useMarketChartStore();
  return currentId ? charts[currentId] : null;
};
