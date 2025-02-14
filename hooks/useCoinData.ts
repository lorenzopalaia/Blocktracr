import { useEffect } from "react";
import { useCoinStore, useCurrentCoin } from "../stores/useCoinStore";

export const useCoinData = (id: string) => {
  const { loading, error, fetchCoin, resetCurrentCoin } = useCoinStore();
  const coin = useCurrentCoin();

  useEffect(() => {
    fetchCoin(id);

    // Reset quando il componente viene smontato
    return () => {
      resetCurrentCoin();
    };
  }, [id, fetchCoin, resetCurrentCoin]);

  return { coin, loading, error };
};
