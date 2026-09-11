import { JsonLd } from "@/components/JsonLd";
import { InstallationGuide } from "@/components/installation-guide/InstallationGuide";
import { Button, Container, Icon, SectionHeading } from "@/components/ui";
import { installGuides, whatsappLink } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, howToSchema } from "@/lib/structured-data";

export const metadata = buildMetadata({
  path: "/installation-guide",
  title: "IPTV Installation Guide UK: Firestick to Smart TV",
  titleAbsolute: true,
  description:
    "Set up your IPTV subscription in minutes. Step by step guides for Firestick, " +
    "Android, Samsung, LG, iPhone, iPad, Windows, Mac and MAG boxes.",
  keywords: [
    "IPTV installation guide UK",
    "how to set up IPTV UK",
    "IPTV Firestick setup UK",
    "IPTV Smart TV setup",
    "IPTV Smarters setup",
  ],
});

const setupBasics = [
  {
    icon: "mail" as const,
    title: "Your Activation Email",
    text: "After you pay, we email your login. That is an Xtream Codes username, password and server URL, plus an M3U link. Keep it to hand.",
  },
  {
    icon: "download" as const,
    title: "A Player App",
    text: "IPTV Smarters Pro or TiviMate on most devices. Smart IPTV or IBO Player on Samsung and LG TVs.",
  },
  {
    icon: "bolt" as const,
    title: "A Steady Connection",
    text: "About 15 Mbps per stream for Full HD and 25 Mbps or more for 4K. Wired or 5 GHz WiFi is best for live sport.",
  },
];

export default function InstallationGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Installation Guide", path: "/installation-guide" },
          ]),
          ...installGuides.map((g) => howToSchema(g)),
        ]}
      />

      <section className="glow-top relative overflow-hidden">
        <Container className="relative py-16 sm:py-24">
          <SectionHeading
            eyebrow="Setup guide"
            title={
              <>
                Get Your <span className="gradient-text">IPTV Subscription</span>{" "}
                Running In Minutes
              </>
            }
            description="Choose your device below and follow the steps. Most setups take under 6 minutes and only need doing once. Stuck at any point? Live chat support will finish it with you."
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {setupBasics.map((item) => (
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

      <section className="pb-8">
        <Container>
          <InstallationGuide />
        </Container>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02] py-16 sm:py-20">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold">Still Not Working?</h2>
            <p className="text-sm leading-relaxed text-white/55">
              Tell us the device you are using and where you got stuck. Our team
              sets up IPTV every day and will get you watching, usually within a
              few minutes on live chat.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-2.5 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/15"
              >
                <svg
                  viewBox="0 0 32 32"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.745 3.047 9.377L1.05 31.3l6.13-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.98-.574 1.55-.574.184 0 .35.01.5.016.44.02.66.046.95.74.362.87 1.242 3.166 1.348 3.388.108.222.216.522.066.832-.14.32-.264.454-.486.708-.222.254-.432.45-.654.722-.204.238-.434.492-.178.932.256.43 1.138 1.876 2.446 3.04 1.688 1.502 3.078 1.976 3.562 2.178.36.15.79.114 1.052-.168.334-.36.744-.958 1.162-1.548.296-.42.67-.472 1.062-.324.4.14 2.53 1.192 2.964 1.408.434.216.722.32.83.5.106.184.106 1.048-.28 2.14Z" />
                </svg>
                Message on WhatsApp
              </a>
              <Button href="/contact" variant="ghost">
                Contact support
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
