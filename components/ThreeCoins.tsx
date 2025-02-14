import Image from "next/image";
import Link from "next/link";

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
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div>
            <p className="text-md font-semibold sm:text-2xl">{title}</p>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          <div className="flex justify-center gap-4 sm:gap-16">
            {coins.slice(0, 3).map((coin) => (
              <Link
                key={coin.id}
                href={`/coin/${coin.id}`}
                className="flex flex-col items-center gap-2"
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
                <span className="text-md from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text font-bold text-transparent sm:text-lg">
                  ${coin.current_price.toLocaleString()}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
