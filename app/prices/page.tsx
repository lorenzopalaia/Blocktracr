// import { Section } from "@/components/ui/section";
import CoinsList from "@/app/prices/components/CoinsList";
import GlobalMarketDataStats from "@/app/prices/components/GlobalMarketDataStats";
import Trending from "@/app/prices/components/Trending";

export default function Prices() {
  return (
    <main>
      {/* <Section>
        <div className="mx-auto flex max-w-container flex-col items-center gap-8">
          <h1 className="text-4xl font-bold">Prices</h1>
        </div>
      </Section> */}
      <GlobalMarketDataStats />
      <CoinsList />
      <Trending />
    </main>
  );
}
