// import { Section } from "@/components/ui/section";
import GlobalMarketDataStats from "@/components/GlobalMarketDataStats";
import Trending from "@/components/Trending";

export default function Prices() {
  /* const stats = [
    {
      title: "Market Cap",
      value: "$1.5",
      unit: "T",
      text: "Total market capitalization",
    },
    {
      title: "Volume",
      value: "$1.2",
      unit: "T",
      text: "Total trading volume",
    },
    {
      title: "BTC Dominance",
      value: "40",
      unit: "%",
      text: "Percentage of total market cap",
    },
  ]; */

  return (
    <main>
      {/* <Section>
        <div className="mx-auto flex max-w-container flex-col items-center gap-8">
          <h1 className="text-4xl font-bold">Prices</h1>
        </div>
      </Section> */}
      <GlobalMarketDataStats />
      <Trending />
    </main>
  );
}
