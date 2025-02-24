"use client";

import { useCoinData } from "@/hooks/useCoinData";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

import { formatPrice } from "@/utils/price";

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
      ...formatPrice(coin.market_data.market_cap.usd),
    },
    {
      title: "Volume",
      ...formatPrice(coin.market_data.total_volume.usd),
    },
    {
      title: "Supply",
      ...formatPrice(coin.market_data.total_supply),
    },
    {
      title: "Vol/Cap",
      value: (
        (coin.market_data.total_volume.usd / coin.market_data.market_cap.usd) *
        100
      ).toFixed(2),
      unit: "%",
    },
  ];

  return (
    <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
      <div className="flex flex-col gap-6 sm:gap-12">
        <div className="flex gap-8">
          <div className="w-1/2 space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src={coin.image.large}
                alt={coin.name}
                width={32}
                height={32}
              />
              <div className="flex items-end gap-2">
                <h1 className="text-4xl font-bold">{coin.name}</h1>
                <p className="text-muted-foreground text-xl">
                  {coin.symbol.toUpperCase()}
                </p>
              </div>
            </div>
            <p className="text-muted-foreground">
              {coin.description.en.match(
                /(^.*?[a-z]{2,}[.!?])\s+\W*[A-Z]/,
              )?.[1] || coin.description.en}
            </p>
            <div className="flex gap-2">
              <Badge>Rank #{coin.market_cap_rank}</Badge>
              {coin.categories?.[0] && (
                <Badge variant="secondary">{coin.categories[0]}</Badge>
              )}
              {coin.hashing_algorithm && (
                <Badge variant="secondary">{coin.hashing_algorithm}</Badge>
              )}
            </div>
          </div>
          <div className="w-1/2 space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="gradient-brand text-4xl font-bold">
                ${coin.market_data.current_price.usd.toLocaleString()}
              </h2>
              <Badge
                className={
                  coin.market_data.price_change_percentage_24h < 0
                    ? "bg-red-500 hover:bg-red-400 dark:hover:bg-red-600"
                    : "bg-green-500 hover:bg-green-400 dark:hover:bg-green-600"
                }
              >
                {coin.market_data.price_change_percentage_24h < 0 ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronUp className="h-4 w-4" />
                )}
                <span className="font-bold">
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </span>
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <p>
                <span className="text-muted-foreground">Low</span>{" "}
                <span className="font-bold">
                  ${coin.market_data.low_24h.usd.toLocaleString()}
                </span>
              </p>
              <Progress
                className="h-2 w-24"
                value={
                  ((coin.market_data.current_price.usd -
                    coin.market_data.low_24h.usd) /
                    (coin.market_data.high_24h.usd -
                      coin.market_data.low_24h.usd)) *
                  100
                }
              />
              <p>
                <span className="text-muted-foreground">High</span>{" "}
                <span className="font-bold">
                  ${coin.market_data.high_24h.usd.toLocaleString()}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <h3 className="text-muted-foreground">{stat.title}</h3>
                  <h2 className="gradient-brand text-2xl font-bold">
                    {stat.unit !== "%" ? "$" : ""}
                    {stat.value}
                    {stat.unit}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
