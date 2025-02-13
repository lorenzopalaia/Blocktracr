// import { Section } from "@/components/ui/section";
import CoinsList from "@/components/Table/CoinsList";
import GlobalMarketDataStats from "@/components/GlobalMarketDataStats";
import Trending from "@/components/Trending";

export default function Prices() {
  return (
    <main>
      {/* <Section>
        <div className="mx-auto flex max-w-container flex-col items-center gap-8">
          <h1 className="text-4xl font-bold">Prices</h1>
        </div>
      </Section> */}
      <GlobalMarketDataStats />
      <Trending />
      <CoinsList />
    </main>
  );
}
