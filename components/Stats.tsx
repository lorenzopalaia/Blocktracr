import { Section } from "@/components/ui/section";

interface StatItem {
  title: string;
  value: string | number;
  unit?: string;
  text: string;
}

interface StatsProps {
  items: StatItem[];
}

export default function Stats({ items }: StatsProps) {
  return (
    <Section>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-3 text-left"
            >
              <div className="text-sm font-semibold text-muted-foreground">
                {item.title}
              </div>
              <div className="flex items-baseline gap-2">
                <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 dark:to-brand sm:text-5xl md:text-6xl">
                  {item.value}
                </div>
                {item.unit && (
                  <div className="text-2xl font-semibold text-brand">
                    {item.unit}
                  </div>
                )}
              </div>
              <div className="text-pretty text-sm font-semibold text-muted-foreground">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
