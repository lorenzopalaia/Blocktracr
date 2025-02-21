import { Section } from "@/components/ui/section";

import CoinStats from "@/app/coins/[id]/components/CoinStats";
import CoinChart from "@/app/coins/[id]/components/CoinChart";

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
