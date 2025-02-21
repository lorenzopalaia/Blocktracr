"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Glow from "@/components/ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import Github from "@/components/logos/github";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/images/app-light.png";
      break;
    case "dark":
      src = "/images/app-dark.png";
      break;
    default:
      src = "/images/app-dark.png";
      break;
  }

  return (
    <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <Link
            href="/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <AnimatedGradientText>
              🚀 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `animate-gradient inline bg-linear-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                )}
              >
                Experience live crypto tracking!
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>
          </Link>
          <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground relative z-10 inline-block bg-linear-to-r bg-clip-text text-4xl leading-tight font-semibold text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            Take Control of Your Crypto Journey
          </h1>
          <p className="text-md animate-appear text-muted-foreground relative z-10 max-w-[550px] font-medium opacity-0 delay-100 sm:text-xl">
            Track your crypto portfolio with dynamic charts, live prices, and
            real-time insights that empower your investment strategy.
          </p>
          <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
            <div className="animate-appear relative z-10 flex justify-center gap-4 opacity-0 delay-300">
              <Button variant="default" size="lg" asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button variant="glow" size="lg" asChild>
                <Link
                  href="https://github.com/lorenzopalaia/Blocktracr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" /> Github
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative pt-12">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={src}
                  alt="Blocktracr app screenshot"
                  width={1248}
                  height={765}
                />
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
