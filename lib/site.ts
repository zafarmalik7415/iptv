/**
 * Site-wide constants. Keep values here so SEO, sitemap, robots, and structured
 * data all stay in sync from a single source of truth.
 */

function resolveSiteUrl(): string {
  const fallback = "http://localhost:3000";

  // In priority order:
  //  1. NEXT_PUBLIC_SITE_URL  — set this to the real domain in production.
  //  2. VERCEL_PROJECT_PRODUCTION_URL — the stable *.vercel.app production URL.
  //  3. VERCEL_URL — the per deployment URL (used for previews).
  // So canonicals, sitemap and Open Graph tags point at the live host even
  // before a custom domain and NEXT_PUBLIC_SITE_URL are configured.
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    const raw = candidate?.trim();
    if (!raw) continue;

    // Accept a bare domain (e.g. "mysite.com") by adding a scheme, so a
    // missing "https://" can never crash `new URL(SITE_URL)` during the build.
    const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

    try {
      const url = new URL(withScheme);
      // Origin only: scheme + host, no trailing slash, no path or query.
      return `${url.protocol}//${url.host}`;
    } catch {
      // Bad value, try the next candidate.
    }
  }

  return fallback;
}

export const SITE_URL = resolveSiteUrl();

export const siteConfig = {
  /** Brand / legal business name. */
  name: "IPTV Website",
  /** Short label used in the title template, e.g. "Pricing | IPTV Website". */
  shortName: "IPTV Website",
  url: SITE_URL,
  /**
   * Default site wide description. Written for people first. The keywords
   * ("IPTV subscription", "IPTV subscription UK") appear once, naturally.
   */
  description:
    "A UK IPTV subscription for live TV, sport and films. Over 20,000 HD and 4K " +
    "channels on UK servers, with a 7 day TV guide and instant activation.",
  /** Used for Open Graph locale and <html lang>. */
  locale: "en_GB",
  language: "en-GB",
  /** Twitter/X handle (with @). Update when you have a real account. */
  twitterHandle: "@iptvwebsite",
  /** Default social share image, relative to the site root. Replace with a real asset. */
  ogImage: "/opengraph-image.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  /**
   * Google Search Console verification token. Replace the placeholder with the
   * value from Search Console (HTML tag method), or move it to an env var.
   */
  googleSiteVerification: "google-site-verification-placeholder-token",
  /** Organisation contact + social profiles, consumed by the JSON-LD builder. */
  organization: {
    legalName: "IPTV Website Ltd.",
    email: "support@example.com",
    /** Public profile URLs. Empty entries are filtered out of the JSON-LD. */
    sameAs: [
      // "https://www.facebook.com/yourpage",
      // "https://twitter.com/iptvwebsite",
      // "https://www.youtube.com/@yourchannel",
    ] as string[],
  },
} as const;

export type SiteConfig = typeof siteConfig;
