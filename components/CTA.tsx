import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Glow from "@/components/ui/glow";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function CTA() {
  return (
    <Section className="relative w-full overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 text-center sm:gap-10">
        <h2 className="text-3xl font-semibold sm:text-5xl">Start building</h2>
        <p className="text-muted-foreground">
          Get started with Launch UI and build your landing page in no time
        </p>
        <div className="flex flex-col items-center gap-4 self-stretch">
          <div className="flex w-full max-w-[420px] gap-2">
            <Input
              type="email"
              placeholder="Email address"
              className="grow border-brand/20 bg-foreground/10"
            />
            <Button variant="default" size="lg" asChild>
              <Link href="/">Get Started</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            14-days trials. No credit card required.
          </p>
        </div>
        <Glow
          variant="center"
          className="scale-y-[50%] opacity-60 sm:scale-y-[35%] md:scale-y-[45%]"
        />
      </div>
    </Section>
  );
}
