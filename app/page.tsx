import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import Top3 from "./components/Top3";
import Logos from "./components/Logos";
import Features from "./components/Features";
import Items from "./components/Items";
import Stats from "./components/Stats";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Top3 />
      <BentoGrid />
      <Features />
      <Items />
      <Logos />
      <Stats />
      <SocialProof />
      <FAQ />
      <CTA />
    </main>
  );
}
