"use client";

import { useCoinData } from "@/hooks/useCoinData";

import Stats from "@/components/Stats";
import { formatNumber } from "@/utils/price";

export default function CoinStats({ id }: { id: string }) {
  const { coin, loading, error } = useCoinData(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!coin || error) {
    return <div>Error: {error}</div>;
  }

  const stats = [
    {
      title: "Market Cap",
      ...formatNumber(coin.market_data.market_cap.usd),
      text: "Total market value",
    },
    {
      title: "Volume",
      ...formatNumber(coin.market_data.total_volume.usd),
      text: "24h volume",
    },
    {
      title: "Supply",
      ...formatNumber(coin.market_data.total_supply),
      text: "Total coins",
    },
    {
      title: "Vol/Cap",
      value: (
        (coin.market_data.total_volume.usd / coin.market_data.market_cap.usd) *
        100
      ).toFixed(2),
      unit: "%",
      text: "Volume to cap ratio",
    },
  ];

  return <Stats items={stats} />;
}
