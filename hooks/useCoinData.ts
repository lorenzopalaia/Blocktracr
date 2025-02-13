import { useEffect } from "react";
import { useCoinStore } from "../stores/useCoinStore";

export const useCoinData = (id: string) => {
  const { coin, loading, error, fetchCoin } = useCoinStore();

  useEffect(() => {
    if (!coin && !loading && !error) {
      fetchCoin(id);
    }
  }, [coin, loading, error, fetchCoin, id]);

  return { coin, loading, error };
};
