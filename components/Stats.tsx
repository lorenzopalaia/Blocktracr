import { Section } from "@/components/ui/section";

export default function Stats() {
  return (
    <Section>
      <div className="container mx-auto max-w-[960px]">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              Trusted by
            </div>
            <div className="flex items-baseline gap-2">
              <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
                50
              </div>
              <div className="text-2xl font-semibold text-brand">k</div>
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              crypto investors worldwide
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              Tracking over
            </div>
            <div className="flex items-baseline gap-2">
              <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
                1,250
              </div>
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              digital assets live in the market
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              Updating
            </div>
            <div className="flex items-baseline gap-2">
              <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
                75
              </div>
              <div className="text-2xl font-semibold text-brand">k</div>
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              portfolio snapshots daily
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 text-left">
            <div className="text-sm font-semibold text-muted-foreground">
              Powered by
            </div>
            <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
              99.9%
            </div>
            <div className="text-pretty text-sm font-semibold text-muted-foreground">
              uptime & cutting-edge analytics
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
