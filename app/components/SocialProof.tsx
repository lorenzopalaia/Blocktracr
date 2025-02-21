import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Section } from "@/components/ui/section";

const testimonials = [
  {
    name: "Michael Chen",
    handle: "@cryptotrader_mike",
    avatar: "/avatars/michael.jpg",
    content:
      "Blocktracr has revolutionized how I manage my crypto portfolio. Real-time tracking and beautiful analytics make it my go-to platform.",
    url: "https://twitter.com/cryptotrader_mike",
  },
  {
    name: "Sarah Williams",
    handle: "@crypto_sarah",
    avatar: "/avatars/sarah.jpg",
    content:
      "As a day trader, I need reliable portfolio tracking. Blocktracr's clean interface and accurate data have made my trading life so much easier!",
    url: "https://twitter.com/crypto_sarah",
  },
  {
    name: "Alex Parker",
    handle: "@defi_alex",
    avatar: "/avatars/alex.jpg",
    content:
      "Finally found a crypto tracker that actually works! The portfolio analytics are incredibly detailed and the UI is super intuitive.",
    url: "https://twitter.com/defi_alex",
  },
  {
    name: "Elena Rodriguez",
    handle: "@elena_invests",
    avatar: "/avatars/elena.jpg",
    content:
      "Blocktracr helped me understand my crypto investments better. The performance metrics are just incredible!",
    url: "https://twitter.com/elena_invests",
  },
  {
    name: "David Kim",
    handle: "@crypto_dave",
    avatar: "/avatars/david.jpg",
    content:
      "The real-time alerts and portfolio insights from Blocktracr are game-changing. Best crypto tracking tool I've ever used.",
    url: "https://twitter.com/crypto_dave",
  },
  {
    name: "Lisa Thompson",
    handle: "@lisacrypto",
    avatar: "/avatars/lisa.jpg",
    content:
      "Managing multiple wallets was a nightmare until I found Blocktracr. Now I can track everything in one place. Absolutely essential for crypto investors!",
    url: "https://twitter.com/lisacrypto",
  },
];

const testimonials2 = [
  {
    name: "James Wilson",
    handle: "@crypto_james",
    avatar: "/avatars/james.jpg",
    content:
      "Blocktracr's portfolio analytics give me insights I couldn't find anywhere else. A must-have for serious crypto investors.",
    url: "https://twitter.com/crypto_james",
  },
  {
    name: "Maria Garcia",
    handle: "@maria_trades",
    avatar: "/avatars/maria.jpg",
    content:
      "Love how Blocktracr lets me track my DeFi investments alongside my regular crypto holdings. The all-in-one solution I've been looking for!",
    url: "https://twitter.com/maria_trades",
  },
  {
    name: "Tom Anderson",
    handle: "@tom_blockchain",
    avatar: "/avatars/tom.jpg",
    content:
      "The accuracy and speed of Blocktracr's tracking is unmatched. Perfect for both beginners and advanced traders.",
    url: "https://twitter.com/tom_blockchain",
  },
  {
    name: "Sophie Lee",
    handle: "@sophie_defi",
    avatar: "/avatars/sophie.jpg",
    content:
      "Blocktracr simplified my crypto portfolio management. The tax reporting features alone are worth it!",
    url: "https://twitter.com/sophie_defi",
  },
  {
    name: "Ryan Martinez",
    handle: "@ryan_crypto",
    avatar: "/avatars/ryan.jpg",
    content:
      "Clean interface, powerful features, and excellent support. Blocktracr is everything a crypto tracker should be.",
    url: "https://twitter.com/ryan_crypto",
  },
  {
    name: "Emma Chang",
    handle: "@emma_invests",
    avatar: "/avatars/emma.jpg",
    content:
      "Switching to Blocktracr was the best decision for my crypto portfolio. The real-time tracking and analytics are exceptional!",
    url: "https://twitter.com/emma_invests",
  },
];

export default function SocialProof() {
  return (
    <Section className="bg-background text-foreground w-full overflow-hidden px-0 py-12 sm:py-24 md:py-32">
      <div className="max-w-container mx-auto flex flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Loved by designers and developers across the planet
          </h2>
          <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
            Here&apos;s what people are saying about Launch UI
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex flex-row [gap:var(--gap)] overflow-hidden p-2 [--duration:20s] [--gap:1rem]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]"
              >
                {testimonials.map((testimonial, index) => (
                  <Link
                    key={index}
                    href={testimonial.url}
                    className="glass-3 hover:from-card/30 hover:to-card/20 flex max-w-[320px] flex-col rounded-lg p-4 text-start shadow-md sm:max-w-[420px] sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="text-md leading-none font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.handle}
                        </p>
                      </div>
                    </div>
                    <p className="sm:text-md text-muted-foreground mt-4 text-sm">
                      {testimonial.content}
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="group flex flex-row [gap:var(--gap)] overflow-hidden p-2 [--duration:20s] [--gap:1rem]">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] [animation-direction:reverse] group-hover:[animation-play-state:paused]"
              >
                {testimonials2.map((testimonial, index) => (
                  <Link
                    key={index}
                    href={testimonial.url}
                    className="glass-3 hover:from-card/30 hover:to-card/20 flex max-w-[320px] flex-col rounded-lg p-4 text-start shadow-md sm:max-w-[420px] sm:p-6"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <h3 className="text-md leading-none font-semibold">
                          {testimonial.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {testimonial.handle}
                        </p>
                      </div>
                    </div>
                    <p className="sm:text-md text-muted-foreground mt-4 text-sm">
                      {testimonial.content}
                    </p>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r sm:block" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l sm:block" />
        </div>
      </div>
    </Section>
  );
}
