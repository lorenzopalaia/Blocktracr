"use client";

import {
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
} from "@/components/ui/chart";
import { Section } from "@/components/ui/section";

import {
  Area,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

import { useMarketChartData } from "@/hooks/useMarketChartData";

export default function CoinChart({ id }: { id: string }) {
  const { data, loading, error } = useMarketChartData(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Error: {error}</div>;
  }

  const combinedData = data.prices.map(([timestamp, price], index) => ({
    date: new Date(timestamp).toLocaleDateString(),
    price: price,
    volume: data.total_volumes[index][1],
  }));

  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <ChartContainer
          config={{
            price: {
              label: "Price",
              color: "hsl(var(--primary))",
            },
            volume: {
              label: "Volume",
              color: "hsl(var(--secondary))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={combinedData}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                yAxisId="left"
                orientation="left"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `$${(value / 1e9).toFixed(2)}B`}
                domain={[0, "dataMax"]}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                domain={["dataMin", "dataMax"]}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    valueFormatter={(value, name) =>
                      name === "volume"
                        ? `$${(value / 1e9).toFixed(2)}B`
                        : `$${value.toLocaleString()}`
                    }
                  />
                }
              />
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
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
                type="monotone"
                dataKey="price"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#colorPrice)"
                yAxisId="right"
              />
              <Bar
                dataKey="volume"
                yAxisId="left"
                fill="hsl(var(--foreground))"
                opacity={1}
                shape={<VolumeBar />}
                className="opacity-25"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </Section>
  );
}

// Custom shape for volume bar
const VolumeBar = (props: any) => {
  const { x, y, width, height, fill } = props;
  return (
    <rect
      x={x}
      y={y + height * 0.9}
      width={width}
      height={height * 0.1}
      fill={fill}
    />
  );
};
