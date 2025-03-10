import { Section } from "@/components/ui/section";

import Link from "next/link";

export default function TOS() {
  const siteUrl =
    process.env.SITE_URL || "https://blocktracr.lorenzopalaia.com";

  return (
    <Section>
      <div className="mx-auto max-w-4xl space-y-8 p-6">
        <h1 className="text-3xl font-bold tracking-tight">Terms of Service</h1>

        <div className="text-muted-foreground space-y-6 leading-7">
          <p>
            These terms and conditions outline the rules and regulations for the
            use of Blocktracr&apos;s Website, located at{" "}
            <Link
              href={siteUrl}
              className="text-primary hover:text-primary/80 underline transition-colors"
            >
              {siteUrl}
            </Link>
            .
          </p>
          <p>
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use Blocktracr if you do not agree to
            take all of the terms and conditions stated on this page.
          </p>
          <p>
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to
            you, the person log on this website and compliant to the Company’s
            terms and conditions. &quot;The Company&quot;,
            &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and
            &quot;Us&quot;, refers to our Company. &quot;Party&quot;,
            &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client
            and ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client’s needs in respect of
            provision of the Company’s stated services, in accordance with and
            subject to, prevailing law of Netherlands. Any use of the above
            terminology or other words in the singular, plural, capitalization
            and/or he/she or they, are taken as interchangeable and therefore as
            referring to same.
          </p>
          <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold tracking-tight">
            Cookies
          </h2>
          <p>
            We employ the use of cookies. By accessing Blocktracr, you agreed to
            use cookies in agreement with the Blocktracr&apos;s Privacy Policy.
          </p>
          <p>
            Most interactive websites use cookies to let us retrieve the user’s
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>
          <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold tracking-tight">
            License
          </h2>
          <p>
            Unless otherwise stated, Blocktracr and/or its licensors own the
            intellectual property rights for all material on Blocktracr. All
            intellectual property rights are reserved. You may access this from
            Blocktracr for your own personal use subjected to restrictions set
            in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Republish material from Blocktracr</li>
            <li>Sell, rent or sub-license material from Blocktracr</li>
            <li>Reproduce, duplicate or copy material from Blocktracr</li>
            <li>Redistribute content from Blocktracr</li>
          </ul>
          <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold tracking-tight">
            Hyperlinking to our Content
          </h2>
          <p>
            The following organizations may link to our Website without prior
            written approval:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>
              Online directory distributors may link to our Website in the same
              manner as they hyperlink to the Websites of other listed
              businesses; and
            </li>
            <li>
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </li>
          </ul>
          <p>
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: (a) is not in any way
            deceptive; (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party’s site.
          </p>
          <p>
            We may consider and approve other link requests from the following
            types of organizations:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              commonly-known consumer and/or business information sources;
            </li>
            <li>dot.com community sites;</li>
            <li>associations or other groups representing charities;</li>
            <li>online directory distributors;</li>
            <li>internet portals;</li>
            <li>accounting, law and consulting firms; and</li>
            <li>educational institutions and trade associations.</li>
          </ul>
          <p>
            We will approve link requests from these organizations if we decide
            that: (a) the link would not make us look unfavorably to ourselves
            or to our accredited businesses; (b) the organization does not have
            any negative records with us; (c) the benefit to us from the
            visibility of the hyperlink compensates the absence of Blocktracr;
            and (d) the link is in the context of general resource information.
          </p>
          <p>
            These organizations may link to our home page so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products or services; and (c) fits within the context of the linking
            party’s site.
          </p>
          <p>
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an e-mail to Blocktracr. Please include your name, your
            organization name, contact information as well as the URL of your
            site, a list of any URLs from which you intend to link to our
            Website, and a list of the URLs on our site to which you would like
            to link. Wait 2-3 weeks for a response.
          </p>
          <p>Approved organizations may hyperlink to our Website as follows:</p>
          <ul className="ml-6 list-disc space-y-2">
            <li>By use of our corporate name; or</li>
            <li>By use of the uniform resource locator being linked to; or</li>
            <li>
              By use of any other description of our Website being linked to
              that makes sense within the context and format of content on the
              linking party’s site.
            </li>
          </ul>
          <p>
            No use of Blocktracr&apos;s logo or other artwork will be allowed
            for linking absent a trademark license agreement.
          </p>
          <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold tracking-tight">
            iFrames
          </h2>
          <p>
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>
          <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold tracking-tight">
            Content Liability
          </h2>
          <p>
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>
          <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold tracking-tight">
            Your Privacy
          </h2>
          <p>Please read Privacy Policy</p>
          <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold tracking-tight">
            Reservation of Rights
          </h2>
          <p>
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it’s linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </p>
          <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold tracking-tight">
            Removal of links from our website
          </h2>
          <p>
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
          <p>
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </p>
          <h2 className="text-foreground mt-8 mb-4 text-2xl font-semibold tracking-tight">
            Disclaimer
          </h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>
          <p>
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </p>
          <p>
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
        </div>
      </div>
    </Section>
  );
}
