import CoinData from "@/components/CoinData";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <CoinData id={id} />;
}
