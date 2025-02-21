import { Section } from "@/components/ui/section";
import CoinsList from "@/app/coins/components/CoinsList";
import GlobalMarketDataStats from "@/app/coins/components/GlobalMarketDataStats";
import Trending from "@/app/coins/components/Trending";

export default function Coins() {
  return (
    <main>
      <Section>
        <div className="max-w-container mx-auto flex flex-col gap-8">
          <h1 className="text-4xl font-bold">Cryptocurrency Prices</h1>
          <div className="flex gap-8">
            <div className="w-1/2">
              <GlobalMarketDataStats />
            </div>
            <div className="w-1/2">
              <Trending />
            </div>
          </div>
          <CoinsList />
        </div>
      </Section>
    </main>
  );
}
