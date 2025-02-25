import { Section } from "@/components/ui/section";

import CoinStats from "@/app/coins/[id]/components/CoinStats";
import CoinChart from "@/app/coins/[id]/components/CoinChart";

import type { Metadata } from "next";

// TODO: Dynamic metadata based on coin
export const metadata: Metadata = {
  title: "Coins | Blocktracr",
  description: "View the latest cryptocurrency prices",
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Section>
      <CoinStats id={id} />
      <CoinChart id={id} />
    </Section>
  );
}
