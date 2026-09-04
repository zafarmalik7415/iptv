import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { Button, Container, Icon, SectionHeading } from "@/components/ui";
import { faqs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqPageSchema,
  subscriptionProductSchema,
} from "@/lib/structured-data";

export const metadata = buildMetadata({
  path: "/pricing",
  title: "IPTV Subscription UK Pricing and Plans",
  description:
    "UK IPTV subscription pricing. Starter, Standard and Premium plans with GBP prices, " +
    "no contract, instant activation and a 7 day money back guarantee.",
  keywords: [
    "IPTV subscription price UK",
    "IPTV subscription plans UK",
    "cheap IPTV subscription UK",
    "buy IPTV subscription UK",
  ],
});

const guarantees = [
  {
    icon: "bolt" as const,
    title: "Instant Activation",
    text: "Your login is emailed within minutes of payment.",
  },
  {
    icon: "shield" as const,
    title: "7 Day Money Back",
    text: "A full refund if the service will not work on your setup.",
  },
  {
    icon: "calendar" as const,
    title: "No Contract",
    text: "Renew, change plan or stop whenever you like.",
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          subscriptionProductSchema(),
          faqPageSchema(faqs.slice(0, 4)),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />

      <section className="glow-top relative overflow-hidden">
        <Container className="relative py-16 sm:py-24">
          <SectionHeading
            eyebrow="Pricing"
            title={
              <>
                Simple Plans For Your{" "}
                <span className="gradient-text">IPTV Subscription</span>
              </>
            }
            description="Every plan includes the full 20,000+ channel list, the VOD library and a 7 day TV guide with catch up. You choose how many screens and how long."
          />
        </Container>
      </section>

      <section className="pb-8">
        <Container>
          <PricingPlans />
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {guarantees.map((g) => (
              <div key={g.title} className="card flex gap-3 p-5">
                <Icon name={g.icon} className="mt-0.5 h-5 w-5 text-brand-accent" />
                <div>
                  <h3 className="text-sm font-semibold">{g.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/55">
                    {g.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-16 sm:py-20">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Billing FAQ"
            title="Questions About Paying For Your Subscription"
          />
          <div className="mt-10 divide-y divide-white/10">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium">
                  {faq.question}
                  <Icon
                    name="chevron-down"
                    className="h-4 w-4 shrink-0 text-white/50 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/contact" variant="ghost">
              Ask about billing
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      <CtaSection
        eyebrow="Pick a plan"
        title={
          <>
            Start Your{" "}
            <span className="gradient-text">IPTV Subscription</span> Today
          </>
        }
        description="Choose a plan and your login arrives by email within minutes. Prefer to ask first? We are on WhatsApp."
        primaryLabel="Choose your plan"
      />
    </>
  );
}
