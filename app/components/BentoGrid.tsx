"use client";

import Image from "next/image";
import Link from "next/link";

import { Section } from "@/components/ui/section";

import { useTheme } from "next-themes";

import {
  ArrowUpRight,
  MousePointerClick,
  Shield,
  TextCursor,
  Wrench,
} from "lucide-react";
import Blocktracr from "@/components/logos/blocktracr";

function Rocket() {
  return (
    <div className="-mx-32 -my-16 flex grow items-end justify-center lg:my-0">
      <div className="relative h-[386px] w-[386px]">
        <div className="relative z-10 h-full w-full">
          <div
            className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
            style={{ borderColor: "hsla(var(--border) / 0)" }}
          >
            <div
              className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
              style={{
                borderColor: "hsla(var(--border) / 0.041666666666666664)",
              }}
            >
              <div
                className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                style={{
                  borderColor: "hsla(var(--border) / 0.08333333333333333)",
                }}
              >
                <div
                  className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                  style={{ borderColor: "hsla(var(--border) / 0.125)" }}
                >
                  <div
                    className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                    style={{
                      borderColor: "hsla(var(--border) / 0.16666666666666666)",
                    }}
                  >
                    <div
                      className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                      style={{
                        borderColor:
                          "hsla(var(--border) / 0.20833333333333334)",
                      }}
                    >
                      <div
                        className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                        style={{
                          borderColor: "hsla(var(--border) / 0.25)",
                        }}
                      >
                        <div
                          className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                          style={{
                            borderColor:
                              "hsla(var(--border) / 0.2916666666666667)",
                          }}
                        >
                          <div
                            className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                            style={{
                              borderColor:
                                "hsla(var(--border) / 0.3333333333333333)",
                            }}
                          >
                            <div
                              className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                              style={{
                                borderColor: "hsla(var(--border) / 0.375)",
                              }}
                            >
                              <div
                                className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                                style={{
                                  borderColor:
                                    "hsla(var(--border) / 0.4166666666666667)",
                                }}
                              >
                                <div
                                  className="relative flex h-full w-full items-center justify-center rounded-full border p-2 transition-all duration-1000 ease-in-out group-hover:scale-[1.01]"
                                  style={{
                                    borderColor:
                                      "hsla(var(--border) / 0.4583333333333333)",
                                  }}
                                >
                                  <div className="flex h-full w-full items-center justify-center rounded-full">
                                    <div className="from-brand-foreground/5 to-brand-foreground/20 dark:from-brand-foreground/20 dark:to-brand-foreground/0 flex h-full w-full rounded-full bg-gradient-to-b p-2">
                                      <div className="glass-5 border-brand-foreground/50 dark:border-border flex h-full w-full items-center justify-center rounded-full p-2.5 shadow-md">
                                        <div className="after:-xl relative after:absolute after:inset-0 after:scale-[2] after:rounded-full after:bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand)/0)_60%)] after:opacity-70 after:content-['']">
                                          <div className="relative z-10">
                                            <Blocktracr className="text-foreground h-16 w-16" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[50%] w-full opacity-30 transition-all duration-300 group-hover:opacity-40">
          <div className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)] opacity-20 sm:h-[512px] dark:opacity-100"></div>
          <div className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)] opacity-20 sm:h-[256px] dark:opacity-100"></div>
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="flex grow items-center justify-center">
      <div className="relative flex w-full flex-col gap-6 p-4 text-xs">
        <div className="flex flex-col items-start gap-8">
          <div className="glass-4 text-muted-foreground max-w-[280px] rounded-xl px-3 py-2 shadow-md">
            My portfolio is up 20% this month! The analytics are spot on
          </div>
          <div className="border-brand-foreground bg-brand-foreground/70 group-hover:animate-hover-reverse dark:border-brand dark:bg-brand-foreground relative z-10 flex rounded-lg border px-2 py-0.5 shadow-lg">
            Alex M.
            <div className="absolute -top-6 -right-3">
              <svg
                width="18"
                height="23"
                viewBox="0 0 18 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5514 1.49706L1.49701 14.5515C0.741049 15.3074 1.27645 16.6 2.34553 16.6H8.50147C9.13799 16.6 9.74844 16.8529 10.1985 17.3029L14.5514 21.6558C15.3074 22.4118 16.6 21.8764 16.6 20.8073V2.34558C16.6 1.2765 15.3074 0.741098 14.5514 1.49706Z"
                  className="fill-brand-foreground/70 stroke-brand-foreground dark:fill-brand-foreground dark:stroke-brand stroke-1"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="glass-4 text-muted-foreground max-w-[280px] rounded-xl px-3 py-2 shadow-md">
            That&apos;s great! The real-time tracking really helps catch the
            best moments
          </div>
          <div className="glass-4 text-muted-foreground max-w-[280px] rounded-xl px-3 py-2 shadow-md">
            And zero wallet connection required - totally secure! 🔒
          </div>
          <div className="group-hover:animate-hover relative z-10">
            <div className="border-primary/80 bg-foreground dark:text-primary text-primary-foreground flex -translate-x-24 rounded-lg border px-2 py-0.5">
              Sarah K.
              <div className="absolute -top-6 -left-3">
                <svg
                  width="18"
                  height="23"
                  viewBox="0 0 18 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.64853 1.49706L15.7029 14.5515C16.4589 15.3074 15.9235 16.6 14.8544 16.6H8.69848C8.06196 16.6 7.45151 16.8529 7.00143 17.3029L2.64853 21.6558C1.89257 22.4118 0.6 21.8764 0.6 20.8073V2.34558C0.6 1.2765 1.89257 0.741098 2.64853 1.49706Z"
                    className="fill-primary stroke-primary/80 stroke-1"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[50%] w-full scale-x-[1.5] opacity-20 transition-all duration-300 group-hover:opacity-30">
          <div className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)] opacity-20 sm:h-[512px] dark:opacity-100"></div>
          <div className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)] opacity-20 sm:h-[256px] dark:opacity-100"></div>
        </div>
      </div>
    </div>
  );
}

function Radar() {
  return (
    <div className="relative flex min-h-[240px] grow items-end justify-center">
      <div className="absolute top-1/2 left-1/2 -mt-32 mb-8 flex h-[512px] w-[512px] -translate-x-1/2 -translate-y-1/2 items-end sm:mb-0">
        <div className="relative flex aspect-[1/1] h-full w-full items-end">
          <div className="relative aspect-[1/1] h-full w-full p-12">
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(0deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(30deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(60deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(90deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(120deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(150deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(180deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(210deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(240deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(270deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(300deg)" }}
            ></div>
            <div
              className="bg-brand-foreground/20 absolute top-1/2 left-0 h-[1px] w-full"
              style={{ transform: "rotate(330deg)" }}
            ></div>
            <div className="border-card/100 dark:border-background relative h-full w-full rounded-full border-[12px]">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4"
                style={{
                  borderColor: "hsla(var(--brand) / 0.3)",
                  boxShadow:
                    "inset 0px 0px 128px hsla(var(--brand-foreground) / 0.2)",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4"
                style={{
                  borderColor: "hsla(var(--brand) / 0.375)",
                  boxShadow:
                    "inset 0px 0px 128px hsla(var(--brand-foreground) / 0.275)",
                  width: "75%",
                  height: "75%",
                }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4"
                style={{
                  borderColor: "hsla(var(--brand) / 0.44999999999999996)",
                  boxShadow:
                    "inset 0px 0px 128px hsla(var(--brand-foreground) / 0.35)",
                  width: "50%",
                  height: "50%",
                }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[100%] border p-4"
                style={{
                  borderColor: "hsla(var(--brand) / 0.5249999999999999)",
                  boxShadow:
                    "inset 0px 0px 128px hsla(var(--brand-foreground) / 0.425)",
                  width: "25%",
                  height: "25%",
                }}
              ></div>
              <div
                className="group-hover:animate-spin-slow absolute inset-0 h-full w-full rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "conic-gradient(transparent, transparent, transparent, transparent, hsla(var(--brand-foreground) / 0.4))",
                }}
              ></div>
            </div>
          </div>
          <div className="bg-brand absolute bottom-[20%] left-[30%] h-3 w-3 rounded-full opacity-50 shadow-[0_0_12px_4px_hsla(var(--brand-foreground)/1)] group-hover:animate-ping group-hover:opacity-100"></div>
          <div className="absolute bottom-[20%] left-[30%] h-3 w-3 rounded-full bg-white/80"></div>
          <div className="bg-brand absolute right-[25%] bottom-[40%] h-3 w-3 rounded-full opacity-50 shadow-[0_0_12px_4px_hsla(var(--brand-foreground)/1)] group-hover:animate-ping group-hover:opacity-100"></div>
          <div className="absolute right-[25%] bottom-[40%] h-3 w-3 rounded-full bg-white/80"></div>
          <div className="absolute top-[50%] w-full opacity-20 transition-all duration-300 group-hover:opacity-30">
            <div className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 -translate-y-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)] opacity-20 sm:h-[512px] dark:opacity-100"></div>
            <div className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 -translate-y-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)] opacity-20 sm:h-[256px] dark:opacity-100"></div>
          </div>
        </div>
        <div className="glass-5 border-brand/70 dark:border-brand/20 absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full p-2.5 shadow-md backdrop-blur-md"></div>
      </div>
    </div>
  );
}

export default function BentoGrid() {
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
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        <h2 className="text-center text-3xl font-semibold text-balance sm:text-5xl">
          The smarter way to track your crypto portfolio
        </h2>
        <p className="text-md text-muted-foreground max-w-[720px] text-center font-medium text-balance sm:text-xl">
          Monitor, analyze, and optimize your crypto investments with a powerful
          yet intuitive platform. Make informed decisions with real-time data at
          your fingertips.
        </p>
        <div className="grid grid-cols-12 gap-4">
          <div className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all lg:col-span-4">
            <Link
              href="/"
              className="bg-accent/5 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Rocket />
            <div className="flex flex-col gap-4">
              <MousePointerClick className="text-muted-foreground h-8 w-8 stroke-1" />
              <h3 className="text-2xl leading-none font-semibold tracking-tight">
                Real-Time Monitoring
              </h3>
              <div className="text-md text-muted-foreground flex flex-col gap-2 text-balance">
                <p>
                  Track your portfolio performance with instant price updates
                  and comprehensive analytics.
                </p>
                <p>Never miss a market move again.</p>
              </div>
            </div>
          </div>
          <div className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-4">
            <Link
              href="/"
              className="bg-accent/5 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Chat />
            <div className="flex flex-col gap-4">
              <TextCursor className="text-muted-foreground h-8 w-8 stroke-1" />
              <h3 className="text-2xl leading-none font-semibold tracking-tight">
                Advanced Analytics
              </h3>
              <div className="text-md text-muted-foreground flex flex-col gap-2 text-balance">
                <p>
                  Powerful charts and customized metrics to understand your
                  portfolio&apos;s performance.
                </p>
                <p>Make decisions based on data, not emotions.</p>
              </div>
            </div>
          </div>
          <div className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:col-span-6 lg:col-span-4">
            <Link
              href="/"
              className="bg-accent/5 absolute top-4 right-4 block rounded-full p-4 opacity-0 transition-opacity group-hover:opacity-100"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Radar />
            <div className="flex flex-col gap-4">
              <Shield className="text-muted-foreground h-8 w-8 stroke-1" />
              <h3 className="text-2xl leading-none font-semibold tracking-tight">
                Privacy & Security
              </h3>
              <div className="text-md text-muted-foreground flex flex-col gap-2 text-balance">
                <p className="max-w-[520px]">
                  Your data stays secure with us. No wallet access or private
                  keys required to track your portfolio.
                </p>
                <p>Focus on your investments, not your security.</p>
              </div>
            </div>
          </div>
          <div className="glass-1 hover:glass-2 group text-card-foreground relative col-span-12 flex flex-col gap-6 overflow-hidden rounded-xl p-6 shadow-xl transition-all md:flex-row">
            <div className="flex grow basis-0 flex-col gap-4 md:justify-end">
              <Wrench className="text-muted-foreground h-8 w-8 stroke-1" />
              <h3 className="text-2xl leading-none font-semibold tracking-tight">
                Effortless Management
              </h3>
              <div className="text-md text-muted-foreground flex flex-col gap-2 text-balance">
                <p className="max-w-[320px] lg:max-w-[460px]">
                  An intuitive interface that makes portfolio tracking a breeze.
                  Import your transactions and let Blocktracr do the heavy
                  lifting.
                </p>
                <p>Zero complexity, maximum efficiency.</p>
              </div>
            </div>
            <div className="flex min-h-[240px] grow basis-0 items-end justify-center sm:p-4 md:min-h-[320px] md:py-12 lg:px-12">
              <div className="h-full w-full">
                <div className="relative h-full w-full">
                  <div className="bg-accent/5 absolute top-0 left-0 z-10 flex w-full min-w-[680px] translate-y-0 overflow-hidden rounded-2xl p-2 transition-all duration-1000 ease-in-out group-hover:-translate-y-4">
                    <div className="border-border/70 dark:border-border/5 dark:border-t-border/15 relative z-10 flex overflow-hidden rounded-md border shadow-2xl">
                      <Image
                        alt="Blocktracr App"
                        loading="lazy"
                        width="1340"
                        height="820"
                        decoding="async"
                        data-nimg="1"
                        src={src}
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full translate-y-0 transition-all duration-1000 group-hover:-translate-y-12">
                    <div className="absolute left-1/2 h-[256px] w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.5)_10%,_hsla(var(--brand-foreground)/0)_60%)] opacity-20 sm:h-[512px] dark:opacity-100"></div>
                    <div className="absolute left-1/2 h-[128px] w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand)/.3)_10%,_hsla(var(--brand-foreground)/0)_60%)] opacity-20 sm:h-[256px] dark:opacity-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
