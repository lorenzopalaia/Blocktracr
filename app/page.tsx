import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Top3 from "@/components/Top3";
import Logos from "@/components/Logos";
import Items from "@/components/Items";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="space-y-64">
      <Hero />
      <Top3 />
      <Logos />
      <Features />
      <Items />
      <Stats />
      <FAQ />
      <CTA />
    </main>
  );
}
