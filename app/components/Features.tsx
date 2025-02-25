"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

import { Section } from "@/components/ui/section";

import { useCryptoListData } from "@/hooks/useCryptoListData";

import Image from "next/image";

import Blocktracr from "@/components/logos/blocktracr";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  const { coins, loading, error } = useCryptoListData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!coins || coins.length < 6) {
    return <div>Not enough coins to display</div>;
  }

  const top6 = coins.slice(0, 6);

  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div>
            <p className="text-md font-semibold sm:text-2xl">
              All your favorite cryptocurrencies in one place!
            </p>
            <p className="text-muted-foreground">
              We support over 250 cryptocurrencies
            </p>
          </div>
          <div
            className="relative flex h-[400px] w-full items-center justify-center overflow-hidden px-6"
            ref={containerRef}
          >
            <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
              <div className="flex flex-row items-center justify-between">
                {top6.slice(0, 2).map((coin, index) => (
                  <Circle
                    className="dark:bg-muted-foreground/50 drop-shadow-[2px_1px_12px_hsla(var(--brand-foreground))]"
                    ref={index === 0 ? div1Ref : div5Ref}
                    key={coin.id}
                  >
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={32}
                      height={32}
                    />
                  </Circle>
                ))}
              </div>
              <div className="flex flex-row items-center justify-between">
                <Circle
                  className="dark:bg-muted-foreground/50 drop-shadow-[2px_1px_12px_hsla(var(--brand-foreground))]"
                  ref={div2Ref}
                >
                  <Image
                    src={top6[2].image}
                    alt={top6[2].name}
                    width={32}
                    height={32}
                  />
                </Circle>
                <Circle
                  className="dark:bg-muted-foreground/50 size-16 drop-shadow-[2px_1px_12px_hsla(var(--brand-foreground))]"
                  ref={div4Ref}
                >
                  <Blocktracr className="h-8 w-8" />
                </Circle>
                <Circle
                  className="dark:bg-muted-foreground/50 drop-shadow-[2px_1px_12px_hsla(var(--brand-foreground))]"
                  ref={div6Ref}
                >
                  <Image
                    src={top6[3].image}
                    alt={top6[3].name}
                    width={32}
                    height={32}
                  />
                </Circle>
              </div>
              <div className="flex flex-row items-center justify-between">
                {top6.slice(4, 6).map((coin, index) => (
                  <Circle
                    className="dark:bg-muted-foreground/50 drop-shadow-[2px_1px_12px_hsla(var(--brand-foreground))]"
                    ref={index === 0 ? div3Ref : div7Ref}
                    key={coin.id}
                  >
                    <Image
                      src={coin.image}
                      alt={coin.name}
                      width={32}
                      height={32}
                    />
                  </Circle>
                ))}
              </div>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div4Ref}
              curvature={-75}
              endYOffset={-10}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div4Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div4Ref}
              curvature={75}
              endYOffset={10}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div4Ref}
              curvature={-75}
              endYOffset={-10}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div4Ref}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div7Ref}
              toRef={div4Ref}
              curvature={75}
              endYOffset={10}
              reverse
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
