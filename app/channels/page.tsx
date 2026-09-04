import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { ChannelExplorer } from "@/components/channels/ChannelExplorer";
import { Container, SectionHeading } from "@/components/ui";
import { channelCategories } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  path: "/channels",
  title: "Channels and VOD Library",
  description:
    "See what is in the UK IPTV subscription line up. More than 3,400 sport channels, " +
    "film and box set channels, news, kids, documentaries and over 8,000 international channels, plus VOD.",
  keywords: [
    "IPTV channel list UK",
    "IPTV sport channels UK",
    "UK IPTV subscription channels",
    "international IPTV channels",
  ],
});

export default function ChannelsPage() {
  const totalCount = channelCategories.length;

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
                20,000+ live channels in your{" "}
                <span className="gradient-text">IPTV subscription</span>
              </>
            }
            description="Filter by category or search for a channel by name. This page shows popular examples. The live line up is much larger and changes all the time."
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
          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Channel categories" value={`${totalCount}`} />
            <Stat label="Sport channels" value="3,400+" />
            <Stat label="TV guide" value="7 days" />
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
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
            Get the full{" "}
            <span className="gradient-text">line up</span> today
          </>
        }
        description="One IPTV subscription covers all the sport, films, entertainment and international channels on this page. Ask on WhatsApp if you need a specific channel checked first."
        primaryLabel="See plans and pricing"
      />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-5 text-center">
      <p className="text-2xl font-bold gradient-text">{value}</p>
      <p className="mt-1 text-xs text-white/55">{label}</p>
    </div>
  );
}
