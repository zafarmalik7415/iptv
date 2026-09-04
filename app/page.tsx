import Link from "next/link";

import { CtaSection } from "@/components/CtaSection";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { PosterCarousel } from "@/components/home/PosterCarousel";
import { OptimizedImage } from "@/components/OptimizedImage";
import {
  Button,
  Container,
  Icon,
  IconBadge,
  SectionHeading,
  type IconName,
} from "@/components/ui";
import {
  comparisonRows,
  contentPillars,
  devices,
  differencePoints,
  durationPlans,
  highlightStats,
  planFeatures,
  qualityBadges,
  steps,
  testimonials,
  trustFeatures,
  whatsappPlanLink,
} from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

const DEVICE_ICON: Record<string, IconName> = {
  "iOS & Apple TV": "phone",
  Android: "phone",
  "Android TV": "tv",
  "Samsung TV": "tv",
  "LG webOS": "tv",
  Roku: "box",
  Chromecast: "cast",
  Xbox: "gamepad",
  "Mac & PC": "laptop",
  "IPTV Box": "box",
  "MAG / Decoder": "box",
  Kodi: "play",
};

export const metadata = buildMetadata({
  path: "/",
  title: "IPTV Subscription UK for Live TV, Sport and Films in HD and 4K",
  titleAbsolute: true,
  description:
    "A UK IPTV subscription on UK servers for a steady picture. 20,000+ live " +
    "channels plus a weekly VOD library of films and series in 4K and Full HD.",
});

/* ------------------------------------------------------------------ page --- */

export default function HomePage() {
  return (
    <>
      {/* 1 ─────────────────────────────────────────────────────────── hero */}
      <section className="glow-top relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="grid-mask absolute inset-0" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
            <div className="text-center lg:text-left">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                UK servers · Steady in peak hours · HD, FHD and 4K
              </span>
              <h1 className="mt-6 text-3xl font-bold leading-tight text-balance md:text-5xl lg:text-[3.3rem]">
                A <span className="gradient-text">UK IPTV subscription</span>{" "}
                built for steady live TV
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65 lg:mx-0">
                Our IPTV subscription runs on UK based servers, so the picture
                holds up at 8pm on a weeknight and through Saturday football. You
                get 20,000+ live channels and a VOD library of films and series
                in 4K and Full HD that we refresh every week.
              </p>
              <div className="mt-9 flex justify-center lg:justify-start">
                <Button href="/pricing" className="px-7 py-3 text-base">
                  See plans and pricing
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                className="absolute inset-0 -z-10 opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 50% 44%, rgba(255,176,32,0.30), rgba(255,61,129,0.15) 45%, transparent 72%)",
                }}
                aria-hidden="true"
              />
              <OptimizedImage
                src="/hero.webp"
                alt="Live sport, films and shows on a TV, box and phone with a UK IPTV subscription"
                width={1080}
                height={1080}
                aboveTheFold
                sizes="(min-width: 1024px) 520px, 88vw"
                className="h-auto w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 1b ───────────────────────────────────────────── platform marquee */}
      <section className="overflow-hidden border-y border-white/10 bg-white/[0.02] py-9">
        <div className="marquee-mask relative flex overflow-hidden">
          <ul className="flex shrink-0 animate-marquee items-center hover:[animation-play-state:paused]">
            {[...devices, ...devices].map((d, i) => (
              <li
                key={i}
                className="mr-12 flex items-center gap-3 whitespace-nowrap text-lg font-semibold text-white/60 md:text-xl"
              >
                <Icon
                  name={DEVICE_ICON[d] ?? "devices"}
                  className="h-6 w-6 text-white/40 md:h-7 md:w-7"
                />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2 ────────────────────────────────────────────── why viewers trust */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="UK streaming servers"
            title={
              <>
                Closer servers mean a{" "}
                <span className="gradient-text">steadier picture</span>
              </>
            }
          />
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-white/60">
            <p>
              The biggest single factor in stream quality is how far your data
              has to travel. A shorter trip means lower latency, so channels open
              quickly and respond without lag.
            </p>
            <p>
              That is why we host in the UK. Your connection is routed to nearby
              capacity in London or Manchester, so the stream reaches you in HD
              and 4K without crossing half the world first.
            </p>
            <p className="text-white/45">
              Tuned for the main UK providers, including BT, Sky, Virgin Media
              and EE, on broadband and mobile.
            </p>
          </div>

          <h3 className="mt-14 text-center text-2xl font-bold text-balance md:text-3xl">
            Why UK viewers stay with us
          </h3>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((f) => (
              <div key={f.title} className="card p-6">
                <IconBadge name={f.icon} />
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {f.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-white/55">
            Routing you to nearby UK capacity is what keeps the service quick and
            steady, with little buffering in normal conditions and a clean
            picture on every feed.
          </p>
        </Container>
      </section>

      {/* 3 ──────────────────────────────────────────────────────── pricing */}
      <section className="border-t border-white/10 bg-white/[0.02] py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Plans and pricing"
            title="Pricing"
            description="Pay once per term. No contract and no hidden fees. Every plan includes all 20,000+ channels, every device and 24/7 support."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {durationPlans.map((plan) => (
              <div
                key={plan.id}
                className={`card relative flex flex-col p-6 ${
                  plan.featured
                    ? "border-brand-2/60 bg-gradient-to-b from-brand-2/[0.14] to-brand-3/[0.06]"
                    : ""
                }`}
              >
                {plan.badge ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-1 to-brand-3 px-3 py-1 text-[11px] font-semibold text-[#1a0f07]">
                    {plan.badge}
                  </span>
                ) : null}

                <h3 className="text-base font-semibold text-white/80">
                  {plan.label}
                </h3>
                <p className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">£{plan.price}</span>
                  <span className="text-sm text-white/45">
                    {plan.months === 1 ? "/month" : `/${plan.months} months`}
                  </span>
                </p>

                <ul className="mt-5 space-y-2.5 text-sm">
                  {planFeatures.map((item) => (
                    <li key={item} className="flex gap-2 text-white/70">
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappPlanLink(plan.label, plan.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-1 to-brand-3 px-5 py-2.5 text-sm font-semibold text-[#1a0f07] transition-transform hover:-translate-y-0.5"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="h-4 w-4"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.745 3.047 9.377L1.05 31.3l6.13-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.98-.574 1.55-.574.184 0 .35.01.5.016.44.02.66.046.95.74.362.87 1.242 3.166 1.348 3.388.108.222.216.522.066.832-.14.32-.264.454-.486.708-.222.254-.432.45-.654.722-.204.238-.434.492-.178.932.256.43 1.138 1.876 2.446 3.04 1.688 1.502 3.078 1.976 3.562 2.178.36.15.79.114 1.052-.168.334-.36.744-.958 1.162-1.548.296-.42.67-.472 1.062-.324.4.14 2.53 1.192 2.964 1.408.434.216.722.32.83.5.106.184.106 1.048-.28 2.14Z" />
                  </svg>
                  Buy via WhatsApp
                </a>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm font-semibold text-white/80">
            Covered by a 7 day money back guarantee if it will not work on your
            setup.
          </p>
        </Container>
      </section>

      {/* 4 ──────────────────────────────────────────── everything in one place */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Channels · Sport · Films · Series"
            title={
              <>
                Everything in <span className="gradient-text">one place</span>
              </>
            }
            description="Nobody watches 20,000 channels, so we help you set up the ones you actually use. Need a channel from another country? Ask and we will add it at no extra cost."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contentPillars.map((p) => (
              <div key={p.title} className="card p-6">
                <IconBadge name={p.icon} />
                <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
            {qualityBadges.map((b) => (
              <li
                key={b}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-white/65"
              >
                {b}
              </li>
            ))}
          </ul>

          <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
            {highlightStats.map((s) => (
              <div key={s.label} className="bg-[#0d0c10] p-6 text-center">
                <dt className="text-2xl font-bold gradient-text">{s.value}</dt>
                <dd className="mt-1 text-xs text-white/55">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* 5 ────────────────────────────────────────────────────── on-demand */}
      <section className="border-t border-white/10 bg-white/[0.02] py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="On demand"
            title={
              <>
                Something for <span className="gradient-text">every taste</span>
              </>
            }
            description="Every IPTV subscription comes with a large on demand library. New releases, box sets and full TV series, with fresh titles added every week."
          />

          <PosterCarousel />
        </Container>
      </section>

      {/* 6 ────────────────────────────────────────────── device compatibility */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Device compatibility"
            title={
              <>
                Works on <span className="gradient-text">your devices</span>
              </>
            }
            description="Your IPTV subscription works across the devices you own, from the Firestick and Smart TV to Android TV, iPhone, iPad, Windows and Mac. Our team will help you set it up if you need a hand."
          />

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {devices.map((d) => (
              <li
                key={d}
                className="card flex items-center gap-3 p-4 text-sm font-medium text-white/75 transition-colors hover:border-white/25"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-brand-accent">
                  <Icon name={DEVICE_ICON[d] ?? "devices"} className="h-4 w-4" />
                </span>
                {d}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/55">
            Stuck on the setup? Message us on live chat and we will walk you
            through it until it is working.
          </p>
        </Container>
      </section>

      {/* 7 ─────────────────────────────────────────────── honest comparison */}
      <section className="border-t border-white/10 bg-white/[0.02] py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="An honest comparison"
            title={
              <>
                How we <span className="gradient-text">compare</span>
              </>
            }
            description="Where the real difference comes from, which is servers, speed and stability."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {/* us */}
            <div className="card border-brand-2/50 bg-brand-2/[0.06] p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold">Our IPTV service</h3>
                <span className="text-xs font-semibold text-brand-accent">
                  Local servers
                </span>
              </div>
              <ul className="mt-5 space-y-3.5">
                {comparisonRows.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 text-sm">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                    />
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-white/40">
                        {row.label}
                      </span>
                      <span className="text-white/85">{row.us}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* them */}
            <div className="card p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-white/70">
                  Other providers
                </h3>
                <span className="text-xs font-semibold text-white/35">
                  Overseas servers
                </span>
              </div>
              <ul className="mt-5 space-y-3.5">
                {comparisonRows.map((row) => (
                  <li key={row.label} className="flex items-start gap-3 text-sm">
                    <Icon
                      name="x-circle"
                      className="mt-0.5 h-4 w-4 shrink-0 text-white/30"
                    />
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-white/30">
                        {row.label}
                      </span>
                      <span className="text-white/50">{row.them}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card mt-6 p-6">
            <h3 className="text-base font-bold">Why this matters</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              A lot of providers keep costs down with cheap overseas servers,
              which adds latency to every stream for UK viewers. We run UK
              capacity on purpose, so the picture stays quick and steady in true
              HD and 4K.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button href="/pricing" className="px-7 py-3.5">
              See plans and pricing
            </Button>
          </div>
        </Container>
      </section>

      {/* 8 ───────────────────────────────────────────────────── get started */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Get started in minutes"
            title={
              <>
                How to start your{" "}
                <span className="gradient-text">IPTV subscription</span>
              </>
            }
            description="Four short steps from choosing a plan to watching live TV, usually done in under ten minutes."
          />
          <ol className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="card p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-sm font-bold text-brand-3">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <Button href="/pricing" className="px-7 py-3.5">
              Choose your plan
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </section>

      {/* 9 ──────────────────────────────────────────────── loved by viewers */}
      <section className="border-t border-white/10 bg-white/[0.02] py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="What customers say"
            title={
              <>
                What <span className="gradient-text">customers say</span>
              </>
            }
          />
          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-white/55">
            <span className="flex gap-0.5 text-brand-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="sparkles" className="h-4 w-4" />
              ))}
            </span>
            Rated 5 out of 5 across {testimonials.length} recent reviews
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => {
              const initials = t.name
                .split(" ")
                .map((w) => w[0])
                .join("");
              return (
                <figure key={t.name} className="card flex flex-col p-6">
                  <blockquote className="text-sm leading-relaxed text-white/75">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-1/25 to-brand-3/25 text-xs font-bold">
                      {initials}
                    </span>
                    <span className="text-xs">
                      <span className="block font-semibold text-white/80">
                        {t.name}
                      </span>
                      <span className="text-white/45">{t.detail}</span>
                    </span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 9b ──────────────────────────────────────────────────── mid page cta */}
      <CtaSection
        compact
        eyebrow="Join them"
        title={
          <>
            Watch tonight on a{" "}
            <span className="gradient-text">UK IPTV subscription</span>
          </>
        }
        description="Set up takes a few minutes and support is on hand if you get stuck."
        primaryLabel="See plans and pricing"
        note="Instant activation · 7 day money back guarantee"
      />

      {/* 10 ─────────────────────────────────────────────── questions answered */}
      <section className="border-t border-white/10 py-20 md:py-28">
        <Container>
          <SectionHeading
            eyebrow="Questions answered"
            title="Questions, answered"
            description={
              <>
                The things people ask most before they start. Still unsure?{" "}
                <Link href="/contact" className="text-white underline">
                  Contact us
                </Link>{" "}
                and we will help.
              </>
            }
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <FaqAccordion />
          </div>
        </Container>
      </section>

      {/* 11 ────────────────────────────────────────────────── the difference */}
      <section className="border-t border-white/10 bg-white/[0.02] py-20 md:py-28">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="The difference"
            title={
              <>
                What makes us{" "}
                <span className="gradient-text">different</span>
              </>
            }
          />
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/60">
            Many providers compete on bigger numbers and bigger promises, like
            30,000 channels and claims that never quite hold up. We look at it
            differently. A good IPTV subscription is judged by how it runs when
            you sit down to watch.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {differencePoints.map((d) => (
              <div key={d.heading} className="card p-6">
                <h3 className="text-lg font-bold">{d.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {d.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/pricing" className="px-7 py-3.5">
              Choose your plan
            </Button>
            <Button href="/faq" variant="ghost" className="px-7 py-3.5">
              Read more
            </Button>
          </div>
        </Container>
      </section>

      {/* 12 ─────────────────────────────────────────────────────── final cta */}
      <CtaSection
        title={
          <>
            Ready to start your{" "}
            <span className="gradient-text">IPTV subscription?</span>
          </>
        }
        description="Get 20,000+ live channels, a large VOD library and UK based servers, with a 7 day money back guarantee behind it. Pick your plan and you can be watching today. Not sure yet? Message us on WhatsApp first."
        primaryLabel="Choose your plan"
      />
    </>
  );
}
