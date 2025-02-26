import { Section } from "@/components/ui/section";

import Link from "next/link";

export default function Privacy() {
  const siteUrl = process.env.SITE_URL || "https://blocktracr.lorenzopalaia.it";

  return (
    <Section>
      <div className="mx-auto max-w-4xl space-y-8 p-6">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>

        <div className="text-muted-foreground space-y-4 leading-7">
          <p>
            Your privacy is important to us. It is our policy to respect your
            privacy regarding any information we may collect from you across our
            website,{" "}
            <Link
              href={siteUrl}
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              {siteUrl}
            </Link>
            , and other sites we own and operate.
          </p>
          <p>
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </p>
          <p>
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorised access, disclosure, copying, use or
            modification.
          </p>
          <p>
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </p>
          <p>
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </p>
          <p>
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </p>
          <p>
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
          </p>
          <p className="text-muted-foreground text-sm">
            This policy is effective as of 25 February 2025.
          </p>
        </div>
      </div>
    </Section>
  );
}
