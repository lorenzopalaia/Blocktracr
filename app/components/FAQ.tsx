import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Crypto Insights & Answers
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Why is tracking your crypto portfolio a game-changer?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                In today’s volatile crypto market, having real-time insights is
                key. Live data and dynamic charts empower you to make swift,
                informed decisions.
              </p>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                With blocktracr, your portfolio’s heartbeat is right at your
                fingertips.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              What makes blocktracr stand apart from other tracking tools?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[600px] text-muted-foreground">
                blocktracr offers live price updates and interactive charts that
                adapt as the market moves. Say goodbye to stale data and hello
                to real-time analytics.
              </p>
              <p className="mb-4 max-w-[600px] text-muted-foreground">
                Our platform delivers a seamless experience with tools designed
                for both beginners and seasoned crypto enthusiasts.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              How does blocktracr ensure up-to-date market data?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                We leverage advanced market feeds and cutting-edge algorithms to
                capture live price movements and trends. Every chart is updated
                in real-time so you never miss a beat.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                It’s like having a direct line to the pulse of the crypto world.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              What does &quot;Charts that tell your crypto story&quot; mean?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Each chart on blocktracr is crafted to reveal the narrative of
                your investments. Visualize trends, identify opportunities, and
                understand your financial journey at a glance.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                It’s not just data—it’s your crypto story brought to life.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can I customize my crypto dashboard?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Definitely! blocktracr lets you tailor your dashboard to focus
                on the metrics that matter to you. Personalize your view for
                maximum insight and impact.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>
              Are there benefits for early users and beta testers?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Absolutely! Join our beta program to help enhance blocktracr. In
                return, you’ll enjoy exclusive discounts, early access to
                features, and priority support.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Don’t miss out on being part of the next big evolution in crypto
                tracking.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
