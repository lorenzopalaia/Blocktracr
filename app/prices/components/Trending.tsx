"use client";

import { useTrendingData } from "@/hooks/useTrendingData";

import ThreeCoins from "@/components/ThreeCoins";

export default function Trending() {
  const { coins, loading, error } = useTrendingData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ThreeCoins
      coins={coins}
      title="Trending Now"
      subtitle="Discover the top 3 cryptocurrencies trending in the market."
    />
  );
}
