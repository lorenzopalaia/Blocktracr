"use client";

import { useCryptoListData } from "../hooks/useCryptoListData";

import Image from "next/image";

import { Section } from "@/components/ui/section";

export default function Top3() {
  const { coins, loading, error } = useCryptoListData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div>
            <p className="text-md font-semibold sm:text-2xl">
              Discover the power of digital assets!
            </p>
            <p className="text-muted-foreground">
              Dive into the top 3 cryptocurrencies shaping the future of
              finance.
            </p>
          </div>
          <div className="flex justify-center gap-4 sm:gap-16">
            {coins.slice(0, 3).map((coin) => (
              <div
                key={coin.id}
                className="flex flex-col items-center space-x-2"
              >
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={32}
                  height={32}
                />
                <span className="font-bold text-2xl sm:text-4xl">
                  {coin.name}
                </span>
                <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-foreground to-foreground bg-clip-text text-transparent dark:to-brand">
                  ${coin.current_price.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
