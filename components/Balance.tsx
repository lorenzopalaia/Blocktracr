// TODO: fetch images from coingecko API

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { formatPrice } from "@/utils/price";

interface CoinsListProps {
  values: { crypto: string; amount: number; usdtValue: number }[];
}

function formatAmount(amount: number) {
  if (amount >= 1)
    return amount.toFixed(Math.max(0, 1 - Math.floor(Math.log10(amount))));
  if (amount > 0)
    return amount.toFixed(
      Math.min(8, Math.abs(Math.floor(Math.log10(amount))) + 1),
    );
  return "0";
}

export default function Balance({ values }: CoinsListProps) {
  const formattedValues = values.map((item) => ({
    ...item,
    usdtValue: formatPrice(item.usdtValue),
  }));

  return (
    <ul className="w-full">
      {formattedValues.map((item) => (
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
                  {formatAmount(item.amount)} {item.crypto}
                </div>
              </div>
            </div>
          </div>
          <div className="text-right font-bold">
            <span>
              ${item.usdtValue.value}
              {item.usdtValue.unit}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
