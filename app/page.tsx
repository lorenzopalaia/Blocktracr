import Hero from "./components/Hero";
import Top3 from "./components/Top3";
import Logos from "./components/Logos";
import Features from "./components/Features";
import Items from "./components/Items";
import Stats from "../components/Stats";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  const stats = [
    {
      title: "Tracking over",
      value: 250,
      text: "digital assets live in the market",
    },
    {
      title: "Updating",
      value: 75,
      unit: "k",
      text: "portfolio snapshots daily",
    },
    {
      title: "Powered by",
      value: "99.9%",
      text: "uptime & cutting-edge analytics",
    },
  ];

  return (
    <main>
      <Hero />
      <Top3 />
      <Logos />
      <Features />
      <Items />
      <Stats items={stats} />
      <FAQ />
      <CTA />
    </main>
  );
}
