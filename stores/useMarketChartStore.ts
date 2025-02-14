import { create } from "zustand";
import { MarketChart } from "../types/market-chart";

type TimeRange = "1" | "7" | "30" | "90";

interface MarketChartStoreState {
  charts: Record<string, Record<TimeRange, MarketChart>>; // Cache per ID and timeRange
  currentId: string | null;
  currentTimeRange: TimeRange | null;
  loading: boolean;
  error: string | null;
  fetchMarketChart: (id: string, timeRange: TimeRange) => Promise<void>;
  resetCurrentChart: () => void;
}

export const useMarketChartStore = create<MarketChartStoreState>(
  (set, get) => ({
    charts: {},
    currentId: null,
    currentTimeRange: null,
    loading: false,
    error: null,
    fetchMarketChart: async (id: string, timeRange: TimeRange) => {
      // Check if we have the chart in cache for this timeRange
      if (get().charts[id]?.[timeRange] && !get().loading) {
        set({ currentId: id, currentTimeRange: timeRange, error: null });
        return;
      }

      set({
        loading: true,
        error: null,
        currentId: id,
        currentTimeRange: timeRange,
      });
      try {
        const response = await fetch(
          `/api/market-chart?id=${id}&days=${timeRange}`,
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        set((state) => ({
          charts: {
            ...state.charts,
            [id]: {
              ...state.charts[id],
              [timeRange]: data,
            },
          },
          loading: false,
        }));
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "Unknown error";
        set({ error: message, loading: false });
      }
    },
    resetCurrentChart: () => {
      set({ currentId: null, currentTimeRange: null });
    },
  }),
);

// Selector to get the current chart
export const useCurrentMarketChart = () => {
  const { charts, currentId, currentTimeRange } = useMarketChartStore();
  return currentId && currentTimeRange
    ? charts[currentId]?.[currentTimeRange]
    : null;
};
