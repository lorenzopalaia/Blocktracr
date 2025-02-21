"use client";

import { useTrendingData } from "@/hooks/useTrendingData";

import Image from "next/image";
import Link from "next/link";

export default function Trending() {
  const { coins, loading, error } = useTrendingData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Trending Now</h2>
      <div className="space-y-2">
        {coins.slice(0, 3).map((coin) => (
          <Link
            key={coin.id}
            href={`/coins/${coin.id}`}
            className="flex items-center gap-2"
          >
            <Image src={coin.image} alt={coin.name} width={32} height={32} />
            <span className="text-xl font-bold sm:text-xl">{coin.name}</span>
            <span className="text-md from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text font-bold text-transparent sm:text-lg">
              ${coin.current_price.toLocaleString()}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
