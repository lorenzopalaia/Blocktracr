import { useEffect } from "react";
import {
  useMarketChartStore,
  useCurrentMarketChart,
} from "../stores/useMarketChartStore";

export const useMarketChartData = (id: string) => {
  const { loading, error, fetchMarketChart, resetCurrentChart } =
    useMarketChartStore();
  const data = useCurrentMarketChart();

  useEffect(() => {
    fetchMarketChart(id);

    // Reset quando il componente viene smontato
    return () => {
      resetCurrentChart();
    };
  }, [id, fetchMarketChart, resetCurrentChart]);

  return { data, loading, error };
};
