import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Container, SectionHeading } from "@/components/ui";
import { faqs, steps } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  path: "/faq",
  title: "IPTV Subscription UK FAQ",
  description:
    "How a UK IPTV subscription works. Devices, streams at once, broadband speed, " +
    "activation time, the TV guide and catch up, trials and refunds.",
  keywords: [
    "IPTV subscription FAQ",
    "how does IPTV work UK",
    "IPTV setup help UK",
    "UK IPTV subscription help",
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      <section className="glow-top relative overflow-hidden">
        <Container className="relative py-16 sm:py-24">
          <SectionHeading
            eyebrow="Help centre"
            title={
              <>
                Everything about your{" "}
                <span className="gradient-text">IPTV subscription</span>
              </>
            }
            description="The questions we get asked most, before and after signing up. Cannot see yours? Support usually replies within minutes."
          />
        </Container>
      </section>

      <section className="pb-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Setup" title="Getting started, in short" />
          <ol className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="card p-5">
                <span className="text-sm font-semibold text-brand-3">
                  0{index + 1}
                </span>
                <h3 className="mt-2 text-sm font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaSection
        eyebrow="Still have a question?"
        title={
          <>
            Ask us before you{" "}
            <span className="gradient-text">buy</span>
          </>
        }
        description="Message us on WhatsApp with your device and what you want to watch, and we will tell you which plan fits."
        primaryLabel="See plans and pricing"
      />
    </>
  );
}
