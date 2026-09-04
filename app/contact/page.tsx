import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/contact/ContactForm";
import { Container, Icon, SectionHeading } from "@/components/ui";
import { contact, whatsappLink } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  path: "/contact",
  title: "Contact and Support",
  description:
    "Contact our UK support team about an IPTV subscription. Questions before you buy, " +
    "setup help, billing and channel requests. Live chat 24 hours a day and quick email replies.",
  keywords: ["IPTV support UK", "contact IPTV provider UK", "UK IPTV subscription help"],
});

const channels = [
  {
    icon: "chat" as const,
    title: "WhatsApp",
    value: contact.whatsappDisplay,
    detail: "The quickest way to reach us",
    href: whatsappLink,
  },
  {
    icon: "chat" as const,
    title: "Live chat",
    value: contact.chatHours,
    detail: contact.responseTime,
  },
  {
    icon: "mail" as const,
    title: "Email",
    value: contact.email,
    detail: "Best for billing and account changes",
    href: `mailto:${contact.email}`,
  },
  {
    icon: "sparkles" as const,
    title: "Telegram",
    value: contact.telegram,
    detail: "Quick questions before you buy",
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
            title="Talk to a real person before you buy"
            description="Ask anything about the IPTV subscription. Which plan fits your setup, whether a channel is included, or how to install it on your device."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              {channels.map((c) => {
                const inner = (
                  <div className="card flex gap-4 p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-1/20 to-brand-3/20 text-white">
                      <Icon name={c.icon} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold">{c.title}</h3>
                      <p className="mt-0.5 text-sm text-white/80">{c.value}</p>
                      <p className="mt-1 text-xs text-white/50">{c.detail}</p>
                    </div>
                  </div>
                );
                const external = c.href?.startsWith("http");
                return c.href ? (
                  <a
                    key={c.title}
                    href={c.href}
                    className="block"
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={c.title}>{inner}</div>
                );
              })}

              <div className="card p-5 text-xs leading-relaxed text-white/50">
                Support covers plan advice, activation, app setup and billing.
                For a refund inside the 7 day window, email us from the address
                you used at checkout.
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
