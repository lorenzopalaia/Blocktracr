/* import Hero from "@/components/Hero"; */
import Hero2 from "@/components/Hero2";
/* import Features from "@/components/Features"; */
/* import Top3 from "@/components/Top3"; */
import Logos from "@/components/Logos";
import Items from "@/components/Items";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="space-y-64">
      {/* <Hero /> */}
      <Hero2 />
      {/* <Features /> */}
      {/* <Top3 /> */}
      <Logos />
      <Items />
      <Stats />
      <FAQ />
      <CTA />
    </main>
  );
}
