import Nextjs from "@/components/logos/nextjs";
import React from "@/components/logos/react";
import ShadcnUi from "@/components/logos/shadcn-ui";
import Tailwind from "@/components/logos/tailwind";
import TypeScript from "@/components/logos/typescript";
import Logo from "@/components/ui/logo";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

export default function Logos() {
  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline" className="border-brand/30 text-brand">
            Last updated: Feb 12, 2025
          </Badge>
          <h2 className="text-md font-semibold sm:text-2xl">
            Built with industry-standard tools and best practices
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Logo image={Nextjs} name="Next.js" version="15.1.6" />
          <Logo image={React} name="React" version="19.0.0" />
          <Logo image={TypeScript} name="TypeScript" version="5.6.3" />
          <Logo image={ShadcnUi} name="Shadcn/ui" version="2.1.8" />
          <Logo image={Tailwind} name="Tailwind" version="3.4.14" />
        </div>
      </div>
    </Section>
  );
}
