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
      <div className="grid grid-cols-2 gap-4">
        {coins.slice(0, 4).map((coin) => (
          <Link
            key={coin.id}
            href={`/coins/${coin.id}`}
            className="flex flex-col items-center drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))]"
          >
            <span className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-2xl font-bold text-transparent sm:text-4xl">
              ${coin.current_price.toLocaleString()}
            </span>
            <div className="flex items-center gap-2">
              <Image src={coin.image} alt={coin.name} width={24} height={24} />
              <span className="font-bold">{coin.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
