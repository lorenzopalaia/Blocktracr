import { useEffect } from "react";
import {
  useMarketChartStore,
  useCurrentMarketChart,
} from "../stores/useMarketChartStore";

type TimeRange = "1" | "7" | "30" | "90";

export const useMarketChartData = (id: string, timeRange: TimeRange = "1") => {
  const { loading, error, fetchMarketChart, resetCurrentChart } =
    useMarketChartStore();
  const data = useCurrentMarketChart();

  useEffect(() => {
    fetchMarketChart(id, timeRange);

    return () => {
      resetCurrentChart();
    };
  }, [id, timeRange, fetchMarketChart, resetCurrentChart]);

  return { data, loading, error };
};
