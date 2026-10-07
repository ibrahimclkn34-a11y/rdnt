import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Radiant Trading Co." },
      { name: "description", content: "Terms governing use of the Radiant Trading Co. website." },
      { property: "og:title", content: "Terms of Use — Radiant Trading Co." },
      {
        property: "og:description",
        content: "Terms governing use of the Radiant Trading Co. website.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div>
      <Nav />
      <main className="pt-32">
        <section className="container-x py-16 md:py-24">
          <div className="eyebrow">— Legal</div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl leading-[1.02]">Terms of Use</h1>
          <p className="mt-6 font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="mt-14 max-w-3xl space-y-10 text-foreground/80 leading-relaxed">
            <PolicySection title="1. Acceptance of these terms">
              <p>
                These Terms of Use govern your access to and use of this website, operated by
                Radiant Trading Co. ("Radiant," "we," "us," "our"). By accessing this website, you
                agree to these terms. If you do not agree, please do not use this website.
              </p>
            </PolicySection>

            <PolicySection title="2. Informational purpose only">
              <p>
                The content on this website — including descriptions of commodities, capabilities,
                and company information — is provided for general informational purposes only. It
                does not constitute a binding offer, solicitation, or commitment to trade, and no
                contractual relationship is formed through use of this website. Any actual trade is
                governed exclusively by a separately negotiated and signed written agreement between
                Radiant and the relevant counterparty.
              </p>
            </PolicySection>

            <PolicySection title="3. Intellectual property">
              <p>
                All text, graphics, logos, and other content on this website are the property of
                Radiant Trading Co. or its licensors and are protected by applicable intellectual
                property laws. You may not reproduce, distribute, or create derivative works from
                this content without our prior written consent.
              </p>
            </PolicySection>

            <PolicySection title="4. No warranty">
              <p>
                This website and its content are provided "as is" without warranties of any kind,
                express or implied, including as to accuracy, completeness, or availability. We do
                not guarantee the website will be uninterrupted or error-free.
              </p>
            </PolicySection>

            <PolicySection title="5. Limitation of liability">
              <p>
                To the fullest extent permitted by law, Radiant Trading Co. shall not be liable for
                any indirect, incidental, or consequential damages arising from your use of, or
                inability to use, this website.
              </p>
            </PolicySection>

            <PolicySection title="6. Changes to these terms">
              <p>
                We may revise these terms at any time by updating this page. Continued use of the
                website after changes are posted constitutes acceptance of the revised terms.
              </p>
            </PolicySection>

            <PolicySection title="7. Governing law">
              <p>
                These terms are governed by the laws of the United Arab Emirates, and any dispute
                arising from them shall be subject to the exclusive jurisdiction of the courts of
                Dubai, UAE.
              </p>
            </PolicySection>

            <PolicySection title="8. Contact">
              <p>
                Questions about these terms can be directed to{" "}
                <a
                  href="mailto:radiant@radiant-trading.co"
                  className="underline hover:text-foreground"
                >
                  radiant@radiant-trading.co
                </a>{" "}
                or via our{" "}
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
