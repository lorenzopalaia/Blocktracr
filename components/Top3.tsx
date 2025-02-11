"use client";

import { useCryptoListData } from "../hooks/useCryptoListData";
import Image from "next/image";

export default function Top3() {
  const { coins, loading, error } = useCryptoListData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold">
        Check out the top 3 cryptocurrencies!
      </h2>
      <p className="text-muted-foreground mb-4">
        Here are the top 3 cryptocurrencies by market cap right now.
      </p>
      <div className="flex justify-center gap-16">
        {coins.slice(0, 3).map((coin) => (
          <div key={coin.id} className="flex flex-col items-center space-x-2">
            <Image src={coin.image} alt={coin.name} width={32} height={32} />
            <span className="font-bold text-2xl">{coin.name}</span>
            <span>${coin.current_price.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
