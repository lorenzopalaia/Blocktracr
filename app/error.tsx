"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";

export default function Error() {
  return (
    <Section className="w-full overflow-hidden pt-0 md:pt-0">
      <div className="max-w-container relative mx-auto flex flex-col items-center gap-6 px-8 py-12 text-center sm:gap-8 md:py-24">
        <Badge variant="outline">
          <span className="text-muted-foreground">Error</span>
        </Badge>
        <h2 className="text-3xl font-semibold sm:text-5xl">
          An error occurred
        </h2>
        <p className="text-muted-foreground">
          Something went wrong. Please try again later.
        </p>
        <Button variant="default" size="lg" asChild>
          <Link href="/">Go back home</Link>
        </Button>
        <div className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-[0_-16px_128px_0_hsla(var(--brand-foreground)_/_0.5)_inset,0_-16px_32px_0_hsla(var(--brand)_/_0.5)_inset]"></div>
      </div>
    </Section>
  );
}
