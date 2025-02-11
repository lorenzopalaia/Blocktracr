import Featured from "@/components/Featured";

import { ShimmerButton } from "@/components/magicui/shimmer-button";

export default function Hero() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Featured
          emoji="🚀"
          text="Get started with Blocktracr"
          link="/dashboard"
        />
        <h1 className="text-5xl font-bold">Track your favorite cryptos.</h1>
        <p className="text-lg text-muted-foreground">
          Blocktracr is a simple, easy-to-use cryptocurrency tracker that helps
          you keep track of your favorite cryptocurrencies.
        </p>
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Get started
          </span>
        </ShimmerButton>
      </div>
    </div>
  );
}
