"use client";

import { useCryptoListData } from "@/hooks/useCryptoListData";
import { formatNumber } from "@/utils/price";
import { Section } from "@/components/ui/section";
import { columns } from "./Columns";
import { DataTable } from "./DataTable";

export default function CoinsList() {
  const { coins, loading, error } = useCryptoListData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const formattedCoins = coins.map((coin) => {
    return {
      ...coin,
      total_volume: formatNumber(coin.total_volume),
      market_cap: formatNumber(coin.market_cap),
    };
  });

  return (
    <Section>
      <DataTable columns={columns} data={formattedCoins} />
    </Section>
  );
}
