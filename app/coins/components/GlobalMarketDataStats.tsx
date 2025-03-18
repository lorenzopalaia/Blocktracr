"use client";

import { useGlobalMarketDataData } from "@/hooks/useGlobalMarketDataData";

import { formatPrice } from "@/utils/price";

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
      ...formatPrice(data.total_market_cap.usd),
      text: "Total market capitalization",
    },
    {
      title: "Volume",
      ...formatPrice(data.total_volume.usd),
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
      <div className="grid grid-cols-2 gap-4">
        {stats.map((coin) => (
          <div
            key={coin.title}
            className="flex flex-col items-center drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))]"
          >
            <span className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent sm:text-4xl">
              {coin.unit === "%" ? "" : "$"}
              {coin.value.toLocaleString()}
              <span className="text-lg md:text-xl">{coin.unit}</span>
            </span>
            <span className="font-bold">{coin.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
