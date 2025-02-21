"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Label, Pie, PieChart as _PieChart } from "recharts";

interface PieChartProps {
  values: { crypto: string; usdtValue: number }[];
  balance: number;
}

export default function PieChart({ values, balance }: PieChartProps) {
  // Define colors for different cryptocurrencies
  const getColor = (index: number) => {
    const colors = [
      "hsl(var(--chart-1))",
      "hsl(var(--chart-2))",
      "hsl(var(--chart-3))",
      "hsl(var(--chart-4))",
      "hsl(var(--chart-5))",
    ];
    return colors[index % colors.length];
  };

  // Create chart data from values
  const chartData = values.map((value, index) => ({
    crypto: value.crypto,
    value: value.usdtValue,
    fill: getColor(index),
  }));

  // Create dynamic config based on available cryptocurrencies
  const chartConfig = values.reduce((acc, value, index) => {
    acc[value.crypto] = {
      label: value.crypto,
      color: getColor(index),
    };
    return acc;
  }, {} as ChartConfig);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[300px] w-full"
    >
      <_PieChart width={300} height={300}>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="crypto"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-2xl font-bold"
                    >
                      ${balance.toFixed(2)}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Total Balance
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </_PieChart>
    </ChartContainer>
  );
}
