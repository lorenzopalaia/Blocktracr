import { useEffect } from "react";
import { useGlobalMarketDataStore } from "../stores/useGlobalMarketDataStore";

export const useGlobalMarketDataData = () => {
  const { data, loading, error, fetchGlobalMarketData } =
    useGlobalMarketDataStore();

  useEffect(() => {
    if (!data && !loading && !error) {
      fetchGlobalMarketData();
    }
  }, [data, loading, error, fetchGlobalMarketData]);

  return { data, loading, error };
};
