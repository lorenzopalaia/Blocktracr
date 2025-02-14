"use client";

import {
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Area, Bar, XAxis, YAxis, ComposedChart } from "recharts";

import { useMarketChartData } from "@/hooks/useMarketChartData";

import { formatNumber } from "@/utils/price";

type TimeRange = "1" | "7" | "30" | "90";

export default function CoinChart({ id }: { id: string }) {
  const [timeRange, setTimeRange] = useState<TimeRange>("1");
  const { data, loading, error } = useMarketChartData(id, timeRange);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Error: {error}</div>;
  }

  /* const currentYear = new Date().getFullYear();
  const firstEntryYear = new Date(data.prices[0][0]).getFullYear();
  const showYear = firstEntryYear !== currentYear; */

  const combinedData = data.prices.map(([timestamp, price], index) => ({
    date:
      timeRange === "1"
        ? new Date(timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : new Date(timestamp).toLocaleDateString([], {
            month: "numeric",
            day: "numeric",
            // year: showYear ? "numeric" : undefined,
            hour: "2-digit",
            minute: "2-digit",
          }),
    price: price,
    volume: data.total_volumes[index][1],
  }));

  console.log(combinedData);

  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="mb-4 flex items-center justify-end">
          <Select
            value={timeRange}
            onValueChange={(value) => setTimeRange(value as TimeRange)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Last day</SelectItem>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
              tickFormatter={(value) => {
                const { value: formatted, unit } = formatNumber(value);
                return `$${formatted}${unit}`;
              }}
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
                  // @ts-expect-error - Recharts type definition issue
                  formatter={(
                    value: number | string | Array<number | string>,
                    name: string,
                  ) => {
                    const numericValue = Array.isArray(value)
                      ? Number(value[0])
                      : Number(value);
                    if (name === "volume") {
                      const { value: formatted, unit } =
                        formatNumber(numericValue);
                      return `$${formatted}${unit}`;
                    }
                    return `$${numericValue.toLocaleString()}`;
                  }}
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
        </ChartContainer>
      </div>
    </Section>
  );
}

// Custom shape for volume bar
interface VolumeBarProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fill?: string;
}

const VolumeBar = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  fill,
}: VolumeBarProps) => {
  const scaleFactor = 1 / 4;

  return (
    <rect
      x={x}
      y={y + height * (1 - scaleFactor)}
      width={width}
      height={height * scaleFactor}
      fill={fill}
    />
  );
};
