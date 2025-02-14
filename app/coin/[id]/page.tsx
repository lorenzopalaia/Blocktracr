import CoinData from "@/app/coin/components/CoinData";
import CoinStats from "@/app/coin/components/CoinStats";
import CoinChart from "@/app/coin/components/CoinChart";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <CoinData id={id} />
      <CoinChart id={id} />
      <CoinStats id={id} />
    </>
  );
}
