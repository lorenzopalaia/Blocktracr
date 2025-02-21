"use client";

import { useCryptoListData } from "@/hooks/useCryptoListData";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import Link from "next/link";

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
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div>
            <p className="text-md font-semibold sm:text-2xl">
              Leading the Crypto Market
            </p>
            <p className="text-muted-foreground">
              Discover and track these market-leading cryptocurrencies. Start
              your crypto journey today!
            </p>
          </div>
          <div className="flex justify-center gap-4 sm:gap-16">
            {coins.slice(0, 3).map((coin) => (
              <Link
                key={coin.id}
                href={`/coins/${coin.id}`}
                className="flex flex-col items-center gap-4"
              >
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={32}
                  height={32}
                />
                <div>
                  <div className="text-xl font-bold sm:text-xl">
                    {coin.name}
                  </div>
                  <div className="text-md from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text font-bold text-transparent sm:text-lg">
                    ${coin.current_price.toLocaleString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
