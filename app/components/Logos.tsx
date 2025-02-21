import Nextjs from "@/components/logos/nextjs";
import React from "@/components/logos/react";
import ShadcnUi from "@/components/logos/shadcn-ui";
import Tailwind from "@/components/logos/tailwind";
import TypeScript from "@/components/logos/typescript";
import Logo from "@/components/ui/logo";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";

import packageJson from "@/package.json";
import config from "@/config";

export default function Logos() {
  const deps = packageJson.dependencies;
  const devDeps = packageJson.devDependencies;

  return (
    <Section>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <Badge variant="outline" className="border-brand/30 text-brand">
            Last updated: {config.logos.lastUpdated}
          </Badge>
          <h2 className="text-md font-semibold sm:text-2xl">
            Built with industry-standard tools and best practices
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Logo
            image={Nextjs}
            name="Next.js"
            version={deps.next?.replace("^", "")}
          />
          <Logo
            image={React}
            name="React"
            version={deps.react?.replace("^", "")}
          />
          <Logo
            image={TypeScript}
            name="TypeScript"
            version={devDeps.typescript?.replace("^", "")}
          />
          <Logo
            image={ShadcnUi}
            name="Shadcn/ui"
            version={deps.shadcn?.replace("^", "")}
          />
          <Logo
            image={Tailwind}
            name="Tailwind"
            version={devDeps.tailwindcss?.replace("^", "")}
          />
        </div>
      </div>
    </Section>
  );
}
