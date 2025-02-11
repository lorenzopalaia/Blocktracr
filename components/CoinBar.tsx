"use client";

import { useCryptoListData } from "../hooks/useCryptoListData";

import Image from "next/image";

export default function CoinBar() {
  const { coins, loading, error } = useCryptoListData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="sticky top-0 py-2">
      <div className="relative flex">
        <div className="flex animate-marquee-infinite min-w-full">
          {coins.map((coin, index) => (
            <div
              key={`${coin.id}-${index}`}
              className="flex items-center gap-2 mx-4 shrink-0"
            >
              <Image
                src={coin.image}
                alt={coin.name}
                className="size-8"
                width={32}
                height={32}
              />
              <div className="font-semibold">{coin.symbol.toUpperCase()}</div>
              <div className="font-semibold">
                ${coin.current_price.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
