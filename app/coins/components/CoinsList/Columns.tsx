"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: {
    value: string;
    unit: string;
  };
  market_cap: {
    value: string;
    unit: string;
  };
};

export const columns: ColumnDef<Coin>[] = [
  {
    accessorKey: "market_cap_rank",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        #
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-muted-foreground">{row.index + 1}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Image
          src={row.original.image}
          alt={row.getValue("name")}
          width={24}
          height={24}
        />
        <span className="font-bold">{row.getValue("name")}</span>{" "}
        <span className="text-muted-foreground uppercase">
          {row.original.symbol}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "current_price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div>${row.getValue<number>("current_price").toLocaleString()}</div>
    ),
  },
  {
    accessorKey: "price_change_percentage_24h",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        24h%
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const value = row.getValue<number>("price_change_percentage_24h");
      return (
        <div className={value > 0 ? "text-green-500" : "text-red-500"}>
          {value.toFixed(2)}%
        </div>
      );
    },
  },
  {
    accessorKey: "total_volume",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Volume
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const volume = row.original.total_volume;
      return (
        <div className="tabular-nums">
          ${volume.value}
          <span className="text-muted-foreground text-sm">{volume.unit}</span>
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      const valueA = parseFloat(
        rowA.original.total_volume.value.replace(/,/g, ""),
      );
      const valueB = parseFloat(
        rowB.original.total_volume.value.replace(/,/g, ""),
      );
      return valueA - valueB;
    },
  },
  {
    accessorKey: "market_cap",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Market Cap
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const marketCap = row.original.market_cap;
      return (
        <div className="tabular-nums">
          ${marketCap.value}
          <span className="text-muted-foreground text-sm">
            {marketCap.unit}
          </span>
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      const valueA = parseFloat(
        rowA.original.market_cap.value.replace(/,/g, ""),
      );
      const valueB = parseFloat(
        rowB.original.market_cap.value.replace(/,/g, ""),
      );
      return valueA - valueB;
    },
  },
];
