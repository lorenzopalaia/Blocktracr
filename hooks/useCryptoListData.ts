import { useEffect } from "react";
import { useCryptoListStore } from "../stores/useCryptoListStore";

export const useCryptoListData = () => {
  const { coins, loading, error, fetchCoins } = useCryptoListStore();

  useEffect(() => {
    if (coins.length === 0 && !loading && !error) {
      fetchCoins();
    }
  }, [coins.length, loading, error, fetchCoins]);

  return { coins, loading, error };
};
