"use client";

import { useCryptoListData } from "../hooks/useCryptoListData";

import ThreeCoins from "./ThreeCoins";

export default function Top3() {
  const { coins, loading, error } = useCryptoListData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ThreeCoins
      coins={coins}
      title="Discover the power of digital assets!"
      subtitle="Dive into the top 3 cryptocurrencies shaping the future of finance."
    />
  );
}
