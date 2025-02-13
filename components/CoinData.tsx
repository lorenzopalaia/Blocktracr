"use client";

import { useCoinData } from "@/hooks/useCoinData";

import { Section } from "./ui/section";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

import Stats from "./Stats";
import { formatNumber } from "@/utils/price";

export default function CoinData({ id }: { id: string }) {
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

  return (
    <>
      <Section>
        <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
          <div className="flex flex-col gap-6 sm:gap-12">
            <div className="flex">
              <div className="w-1/2">
                <div className="flex gap-2 items-center">
                  <Image
                    src={coin.image.large}
                    alt={coin.name}
                    width={32}
                    height={32}
                  />
                  <div className="flex items-end gap-2">
                    <h1 className="font-bold text-4xl">{coin.name}</h1>
                    <p className="text-muted-foreground text-xl">
                      {coin.symbol.toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Badge>Rank #{coin.market_cap_rank}</Badge>
                  <Badge variant="secondary">{coin.categories[0]}</Badge>
                  {coin.hashing_algorithm && (
                    <Badge variant="secondary">{coin.hashing_algorithm}</Badge>
                  )}
                </div>
              </div>
              <div className="w-1/2">
                <p className="text-muted-foreground">
                  {coin.name} Price ({coin.symbol.toUpperCase()})
                </p>
                <div className="flex gap-2 items-center">
                  <h2 className="font-bold text-4xl">
                    ${coin.market_data.current_price.usd.toLocaleString()}
                  </h2>
                  <Badge
                    className={
                      coin.market_data.price_change_percentage_24h < 0
                        ? "bg-red-500 dark:hover:bg-red-600 hover:bg-red-400"
                        : "bg-green-500 dark:hover:bg-green-600 hover:bg-green-400"
                    }
                  >
                    {coin.market_data.price_change_percentage_24h < 0 ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronUp className="w-4 h-4" />
                    )}
                    {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                  </Badge>
                </div>
                <div className="flex gap-2 items-center">
                  <p>
                    <span className="text-muted-foreground">Low</span>{" "}
                    <span className="font-bold">
                      ${coin.market_data.low_24h.usd.toLocaleString()}
                    </span>
                  </p>
                  <Progress
                    className="w-24 h-2"
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
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Stats items={stats} />
      <Section></Section>
    </>
  );
}
