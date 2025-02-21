"use client";

import { useGlobalMarketDataData } from "@/hooks/useGlobalMarketDataData";

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
    {
      title: "ETH Dominance",
      value: data.market_cap_percentage.eth.toFixed(1),
      unit: "%",
      text: "Percentage of total market cap",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Global Market Data</h2>
      <div className="space-y-2">
        {stats.map((coin) => (
          <div key={coin.title} className="flex items-center gap-2">
            <span className="text-xl font-bold sm:text-xl">{coin.title}</span>
            <span className="text-md from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text font-bold text-transparent sm:text-lg">
              ${coin.value.toLocaleString()}
              {coin.unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
