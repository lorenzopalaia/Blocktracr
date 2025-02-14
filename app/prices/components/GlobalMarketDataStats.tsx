"use client";

import { useGlobalMarketDataData } from "@/hooks/useGlobalMarketDataData";
import Stats from "@/components/Stats";

import { formatNumber } from "@/utils/price";

export default function GlobalMarketDataStats() {
  const { data, loading, error } = useGlobalMarketDataData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error: {error || "No data available"}</div>;
  }

  const stats = [
    {
      title: "Market Cap",
      ...formatNumber(data.total_market_cap.usd),
      text: "Total market capitalization",
    },
    {
      title: "Volume",
      ...formatNumber(data.total_volume.usd),
      text: "Total trading volume",
    },
    {
      title: "BTC Dominance",
      value: data.market_cap_percentage.btc.toFixed(1),
      unit: "%",
      text: "Percentage of total market cap",
    },
  ];

  return <Stats items={stats} />;
}
