import { useEffect } from "react";
import { useMarketChartStore } from "../stores/useMarketChartStore";

export const useMarketChartData = (id: string) => {
  const { data, loading, error, fetchMarketChart } = useMarketChartStore();

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchMarketChart(id);
    }
  }, [data, loading, error, fetchMarketChart, id]);

  return { data, loading, error };
};
