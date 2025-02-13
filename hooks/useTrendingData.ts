import { useEffect } from "react";
import { useTrendingStore } from "../stores/useTrendingStore";

export const useTrendingData = () => {
  const { coins, nfts, categories, loading, error, fetchTrending } =
    useTrendingStore();

  useEffect(() => {
    if (coins.length === 0 && !loading && !error) {
      fetchTrending();
    }
  }, [coins.length, loading, error, fetchTrending]);

  return { coins, nfts, categories, loading, error };
};
