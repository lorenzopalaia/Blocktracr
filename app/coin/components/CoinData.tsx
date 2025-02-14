"use client";

import { useCoinData } from "@/hooks/useCoinData";

import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CoinData({ id }: { id: string }) {
  const { coin, loading, error } = useCoinData(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!coin || error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col gap-6 sm:gap-12">
          <div className="flex gap-8">
            <div className="w-1/2 space-y-2">
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
            <div className="w-1/2 space-y-2">
              <p className="text-muted-foreground">
                {coin.name} Price ({coin.symbol.toUpperCase()})
              </p>
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
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
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
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
