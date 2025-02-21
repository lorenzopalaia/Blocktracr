// TODO: fetch images from coingecko API

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CoinsListProps {
  values: { crypto: string; amount: number; usdtValue: number }[];
}

export default function CoinsList({ values }: CoinsListProps) {
  return (
    <ul>
      {values.map((item) => (
        <li key={item.crypto} className="flex justify-between py-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage
                  src={`https://assets.coincap.io/assets/icons/${item.crypto.toLowerCase()}@2x.png`}
                  alt={item.crypto}
                />
                <AvatarFallback>{item.crypto.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-bold">{item.crypto}</div>
                <div className="text-muted-foreground text-sm">
                  {item.amount} {item.crypto}
                </div>
              </div>
            </div>
          </div>
          <div className="gradient-brand text-right font-bold">
            <span>${item.usdtValue.toFixed(2)}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
