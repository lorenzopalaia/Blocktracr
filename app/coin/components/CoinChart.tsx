"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
} from "@/components/ui/chart";
import { Section } from "@/components/ui/section";

import { AreaChart, Area, CartesianGrid, XAxis, YAxis } from "recharts";

import { useMarketChartData } from "@/hooks/useMarketChartData";

export default function CoinChart({ id }: { id: string }) {
  const { data, loading, error } = useMarketChartData(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <Card>
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
                data={data.prices.map(([timestamp, price]) => ({
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
        </Card>
      </div>
    </Section>
  );
}
