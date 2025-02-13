"use client";

import { useGlobalMarketDataData } from "../hooks/useGlobalMarketDataData";
import Stats from "./Stats";

export default function GlobalMarketDataStats() {
  const { data, loading, error } = useGlobalMarketDataData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error: {error || "No data available"}</div>;
  }

  const formatNumber = (value: number) => {
    if (value >= 1e12) return { value: (value / 1e12).toFixed(1), unit: "T" };
    if (value >= 1e9) return { value: (value / 1e9).toFixed(1), unit: "B" };
    if (value >= 1e6) return { value: (value / 1e6).toFixed(1), unit: "M" };
    if (value >= 1e3) return { value: (value / 1e3).toFixed(1), unit: "K" };
    return { value: value.toFixed(1), unit: "" };
  };

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
