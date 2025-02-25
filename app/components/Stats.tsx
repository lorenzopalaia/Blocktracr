import { Section } from "@/components/ui/section";

export default function Stats() {
  return (
    <Section className="bg-background text-foreground w-full overflow-hidden px-4 py-12 sm:py-24 md:py-32">
      <div className="max-w-container mx-auto flex flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col gap-8">
          <h2 className="max-w-[500px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            The most advanced crypto tracking platform
          </h2>
          <p className="text-md text-muted-foreground max-w-[540px] font-medium text-pretty sm:text-xl">
            We provide cutting-edge analytics, real-time tracking, and portfolio
            snapshots to help you make the best decisions for your investments
          </p>
        </div>
        <div className="grid max-w-[500px] grid-cols-2 gap-8 p-4 md:gap-x-20 md:gap-y-12">
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-muted-foreground text-sm font-semibold">
              Tracking over
            </div>
            <div className="flex items-baseline gap-2">
              <div className="from-foreground to-foreground dark:to-brand bg-gradient-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl">
                250
              </div>
            </div>
            <div className="text-muted-foreground text-sm font-semibold text-pretty">
              digital assets live in the market
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-muted-foreground text-sm font-semibold">
              Updating
            </div>
            <div className="flex items-baseline gap-2">
              <div className="from-foreground to-foreground dark:to-brand bg-gradient-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl">
                10
              </div>
              <div className="text-brand text-2xl font-semibold">k</div>
            </div>
            <div className="text-muted-foreground text-sm font-semibold text-balance">
              portfolio snapshots daily
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-muted-foreground text-sm font-semibold">
              Powered by
            </div>
            <div className="flex items-baseline gap-2">
              <div className="from-foreground to-foreground dark:to-brand bg-gradient-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl">
                99.9
              </div>
              <div className="text-brand text-2xl font-semibold">%</div>
            </div>
            <div className="text-muted-foreground text-sm font-semibold text-pretty">
              uptime & cutting-edge analytics
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-muted-foreground text-sm font-semibold">
              Trusted by
            </div>
            <div className="from-foreground to-foreground dark:to-brand bg-gradient-to-r bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl">
              200
            </div>
            <div className="text-muted-foreground text-sm font-semibold text-pretty">
              users worldwide
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
