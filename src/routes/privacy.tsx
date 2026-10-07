import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Radiant Trading Co." },
      {
        name: "description",
        content:
          "How Radiant Trading Co. collects, uses and protects information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — Radiant Trading Co." },
      {
        property: "og:description",
        content:
          "How Radiant Trading Co. collects, uses and protects information submitted through this website.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div>
      <Nav />
      <main className="pt-32">
        <section className="container-x py-16 md:py-24">
          <div className="eyebrow">— Legal</div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.02]">Privacy Policy</h1>
          <p className="mt-6 font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="mt-14 max-w-3xl space-y-10 text-foreground/80 leading-relaxed">
            <PolicySection title="1. Who we are">
              <p>
                This website is operated by Radiant Trading Co. ("Radiant," "we," "us," "our"), a
                private commodities trading house headquartered at IFZA Business Park, DDP 50404,
                Dubai, United Arab Emirates. This policy explains what information we collect
                through this website, how we use it, and the choices available to you.
              </p>
            </PolicySection>

            <PolicySection title="2. Information we collect">
              <p>
                We collect information you voluntarily submit through the enquiry form on our
                Contact page, which may include your full name, company name, email address,
                country, commodity of interest, indicative volume, and any message you provide. We
                do not use cookies, analytics, or tracking technologies on this website, and we do
                not collect any information automatically beyond standard web server logs maintained
                by our hosting provider.
              </p>
            </PolicySection>

            <PolicySection title="3. How we use your information">
              <p>We use the information you submit to:</p>
              <ul className="mt-3 list-disc pl-5 space-y-1">
                <li>Respond to your enquiry and evaluate potential trade opportunities;</li>
                <li>
                  Maintain records of our business communications and counterparty onboarding;
                </li>
                <li>Comply with applicable legal, regulatory, and contractual obligations.</li>
              </ul>
              <p className="mt-3">
                We do not use your information for advertising, and we do not sell or rent your
                information to third parties.
              </p>
            </PolicySection>

            <PolicySection title="4. Third-party processors">
              <p>
                Enquiry form submissions are processed and delivered to us using Web3Forms, a
                third-party form-processing service. Web3Forms processes this data solely to
                transmit your enquiry to us and is subject to its own privacy policy, available at{" "}
                <a
                  href="https://web3forms.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-foreground"
                >
                  web3forms.com/privacy
                </a>
                . We do not use any other third-party processor on this website.
              </p>
            </PolicySection>

            <PolicySection title="5. International transfers">
              <p>
                Because we trade with counterparties across the Middle East, Africa, Asia and
                Europe, and because our form processor operates internationally, information you
                submit may be transferred to and processed in countries other than your own. We take
                reasonable steps to ensure any such transfer is handled consistently with this
                policy.
              </p>
            </PolicySection>

            <PolicySection title="6. Data retention">
              <p>
                We retain enquiry information for as long as necessary to respond to you, maintain
                our business records, and meet legal or regulatory requirements, after which it is
                deleted or anonymized.
              </p>
            </PolicySection>

            <PolicySection title="7. Your rights">
              <p>
                You may request access to, correction of, or deletion of the information you have
                submitted to us by emailing{" "}
                <a
                  href="mailto:radiant@radiant-trading.co"
                  className="underline hover:text-foreground"
                >
                  radiant@radiant-trading.co
                </a>
                . We will respond within a reasonable timeframe.
              </p>
            </PolicySection>

            <PolicySection title="8. Security">
              <p>
                We take reasonable technical and organizational measures to protect the information
                submitted to us. However, no method of transmission or storage is completely secure,
                and we cannot guarantee absolute security.
              </p>
            </PolicySection>

            <PolicySection title="9. Children's privacy">
              <p>
                This website is intended for business use and is not directed at children. We do not
                knowingly collect information from children.
              </p>
            </PolicySection>

            <PolicySection title="10. Changes to this policy">
              <p>
                We may update this policy from time to time. The "Last updated" date above reflects
                the most recent revision. Continued use of this website after changes are posted
                constitutes acceptance of the revised policy.
              </p>
            </PolicySection>

            <PolicySection title="11. Contact">
              <p>
                For questions about this policy or our data practices, write to{" "}
                <a
                  href="mailto:radiant@radiant-trading.co"
                  className="underline hover:text-foreground"
                >
                  radiant@radiant-trading.co
                </a>{" "}
                or see our{" "}
                <Link to="/contact" className="underline hover:text-foreground">
                  Contact page
                </Link>
                .
              </p>
            </PolicySection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border pt-8">
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}
