import { JsonLd } from "@/components/JsonLd";
import { Button, Container, Icon, SectionHeading, type IconName } from "@/components/ui";
import { contact, highlightStats, qualityBadges, whatsappLink } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  path: "/contact",
  title: "Talk to Our UK IPTV Subscription Team",
  titleAbsolute: true,
  description:
    "Get in touch about your IPTV subscription. Ask about plans, setup or " +
    "billing on WhatsApp or live chat. Our UK team usually replies in minutes.",
  keywords: ["IPTV support UK", "contact IPTV provider UK", "UK IPTV subscription help"],
});

const otherChannels = [
  {
    icon: "chat" as const,
    title: "Live Chat",
    value: contact.chatHours,
    detail: contact.responseTime,
  },
];

const readyItems: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "devices",
    title: "The Device You Use",
    text: "A Firestick, a Smart TV, a phone, or something else. It changes which steps we give you.",
  },
  {
    icon: "star",
    title: "Your Current Plan",
    text: "Tell us if you already have a login, or if you are still deciding which plan to get.",
  },
  {
    icon: "wrench",
    title: "What You Need",
    text: "A channel, a setup step, or an error you are seeing. A screenshot helps if you have one.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="glow-top relative overflow-hidden">
        <Container className="relative py-16 sm:py-24">
          <SectionHeading
            eyebrow="Contact"
            title="Talk To A Real Person Before You Buy"
            description="Got a question about your IPTV subscription? Ask us which plan fits your setup, whether we carry a channel, or how to get it running on your device."
          />
        </Container>
      </section>

      <section className="pb-16">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Get in touch"
            title="Ways To Reach Us"
          />

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card group relative mt-8 block overflow-hidden border-brand-2/40 bg-gradient-to-b from-brand-2/[0.14] to-brand-3/[0.05] p-6 shadow-xl shadow-brand-3/10 transition-colors hover:border-brand-2/60 sm:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-1 to-brand-3 text-white">
                <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.745 3.047 9.377L1.05 31.3l6.13-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.98-.574 1.55-.574.184 0 .35.01.5.016.44.02.66.046.95.74.362.87 1.242 3.166 1.348 3.388.108.222.216.522.066.832-.14.32-.264.454-.486.708-.222.254-.432.45-.654.722-.204.238-.434.492-.178.932.256.43 1.138 1.876 2.446 3.04 1.688 1.502 3.078 1.976 3.562 2.178.36.15.79.114 1.052-.168.334-.36.744-.958 1.162-1.548.296-.42.67-.472 1.062-.324.4.14 2.53 1.192 2.964 1.408.434.216.722.32.83.5.106.184.106 1.048-.28 2.14Z" />
                </svg>
              </span>
              <div>
                <p className="flex items-center gap-2 text-base font-semibold text-white">
                  WhatsApp
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-brand-1 to-brand-3 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#1a0f07]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1a0f07]/70" />
                    Fastest
                  </span>
                </p>
                <p className="mt-0.5 text-sm text-white/70">{contact.whatsappDisplay}</p>
                <p className="mt-1 text-xs text-white/50">
                  Most people hear back from us in a few minutes.
                </p>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {qualityBadges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/65"
                >
                  {b}
                </li>
              ))}
            </ul>

            <dl className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:grid-cols-3">
              {highlightStats.map((s) => (
                <div key={s.label} className="bg-[#0d0c10]/80 p-4 text-center">
                  <dt className="text-lg font-bold gradient-text">{s.value}</dt>
                  <dd className="mt-0.5 text-[11px] text-white/55">{s.label}</dd>
                </div>
              ))}
            </dl>
          </a>

          <div className="mt-4">
            {otherChannels.map((c) => (
              <div key={c.title} className="card flex gap-4 p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-1/20 to-brand-3/20 text-white">
                  <Icon name={c.icon} />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{c.title}</h3>
                  <p className="mt-0.5 text-sm text-white/80">{c.value}</p>
                  <p className="mt-1 text-xs text-white/50">{c.detail}</p>
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
            eyebrow="Before you message us"
            title="Have These Three Things Ready"
            description="A quick message gets a quick reply. Send us these three things and we will have you sorted in minutes."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {readyItems.map((item) => (
              <div key={item.title} className="card p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-1/20 to-brand-3/20 text-white">
                  <Icon name={item.icon} className="h-4 w-4" />
                </span>
                <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="card p-6">
              <h3 className="text-sm font-semibold">What Support Covers</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                This covers plan advice, activation, app setup and billing.
                Want a refund inside the 7 day window? Email us from the
                address you used at checkout and we will sort it.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-sm font-semibold">Looking For A Quick Answer Instead?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Most setup and billing questions are already answered on our
                FAQ page. It might save you a wait.
              </p>
              <Button href="/faq" variant="ghost" className="mt-4">
                Read the FAQ
                <Icon name="arrow-right" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
