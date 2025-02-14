"use client";

import { useCoinData } from "@/hooks/useCoinData";
import { useMarketChartData } from "@/hooks/useMarketChartData";

import { Section } from "./ui/section";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { ChartContainer, ChartTooltipContent, ChartTooltip } from "./ui/chart";
import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts";

import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

import Stats from "./Stats";
import { formatNumber } from "@/utils/price";

export default function CoinData({ id }: { id: string }) {
  const { coin, loading, error } = useCoinData(id);
  const {
    data: chart,
    loading: chartLoading,
    error: chartError,
  } = useMarketChartData(id);

  if (loading || chartLoading) {
    return <div>Loading...</div>;
  }

  if (!coin || !chart || error || chartError) {
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
            <div className="flex gap-8">
              <div className="w-1/2 space-y-2">
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
                <p className="text-muted-foreground">
                  {coin.description.en.match(
                    /(^.*?[a-z]{2,}[.!?])\s+\W*[A-Z]/
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
                <div className="flex gap-2 items-center">
                  <h2 className="font-bold text-4xl gradient-brand">
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
      <Section>
        <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
          <Card>
            <CardHeader>
              <CardTitle>Price Chart</CardTitle>
              <CardDescription>
                {coin.name} price history for the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  price: {
                    label: "Price",
                    color: "hsl(var(--primary))",
                  },
                }}
              >
                <AreaChart
                  data={chart.prices.map(([timestamp, price]) => ({
                    date: new Date(timestamp).toLocaleDateString(),
                    price: price,
                  }))}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={-8}
                    tickFormatter={(value) => `$${value.toLocaleString()}`}
                    domain={["dataMin", "dataMax"]}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <defs>
                    <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <Area
                    dataKey="price"
                    type="natural"
                    fill="url(#fillPrice)"
                    fillOpacity={0.4}
                    stroke="hsl(var(--primary))"
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
            <CardFooter>
              <div className="flex w-full items-start gap-2 text-sm">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 font-medium leading-none">
                    {coin.market_data.price_change_percentage_7d > 0
                      ? "Up"
                      : "Down"}{" "}
                    by{" "}
                    {Math.abs(
                      coin.market_data.price_change_percentage_7d
                    ).toFixed(2)}
                    %
                    {coin.market_data.price_change_percentage_7d > 0 ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 leading-none text-muted-foreground">
                    Last 7 days
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </Section>
      <Stats items={stats} />
    </>
  );
}
