import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { ChannelExplorer } from "@/components/channels/ChannelExplorer";
import { Container, SectionHeading } from "@/components/ui";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  path: "/channels",
  title: "IPTV Channels UK: Sport, Films and 20,000+ More",
  titleAbsolute: true,
  description:
    "Browse the UK IPTV subscription channel list. Live sport, entertainment, " +
    "kids and news channels, plus a large film and series library on demand.",
  keywords: [
    "IPTV channel list UK",
    "IPTV sport channels UK",
    "UK IPTV subscription channels",
    "international IPTV channels",
  ],
});

export default function ChannelsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Channels", path: "/channels" },
        ])}
      />

      <section className="glow-top relative overflow-hidden">
        <Container className="relative py-16 sm:py-24">
          <SectionHeading
            eyebrow="Channel line up"
            title={
              <>
                20,000+ Live Channels In Your{" "}
                <span className="gradient-text">IPTV Subscription</span>
              </>
            }
            description="Filter by category to see what is inside your IPTV subscription. This page shows popular examples. The full streaming line up is much larger and changes every week."
          />
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <ChannelExplorer />
        </Container>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-16">
        <Container>
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-white/55">
              Cannot find a channel? Ask us before you buy and we will confirm
              whether it is in the line up.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection
        eyebrow="Your channels are waiting"
        title={
          <>
            Get The Full{" "}
            <span className="gradient-text">Line Up</span> Today
          </>
        }
        description="One IPTV subscription covers all the sport, films, entertainment and international channels on this page. Ask on WhatsApp if you need a specific channel checked first."
        primaryLabel="See plans and pricing"
      />
    </>
  );
}
