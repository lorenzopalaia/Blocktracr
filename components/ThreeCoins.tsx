import Image from "next/image";

import { Section } from "@/components/ui/section";

interface Coin {
  id: string;
  name: string;
  image: string;
  current_price: number;
}

interface ThreeCoinsProps {
  coins: Coin[];
  title?: string;
  subtitle?: string;
}

export default function ThreeCoins({
  coins,
  title,
  subtitle,
}: ThreeCoinsProps) {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div>
            <p className="text-md font-semibold sm:text-2xl">{title}</p>
            <p className="text-muted-foreground">{subtitle}</p>
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
                <span className="text-xl font-bold sm:text-xl">
                  {coin.name}
                </span>
                <span className="text-md bg-gradient-to-r from-foreground to-foreground bg-clip-text font-bold text-transparent dark:to-brand sm:text-lg">
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
