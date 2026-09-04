/**
 * Site-wide constants. Keep values here so SEO, sitemap, robots, and structured
 * data all stay in sync from a single source of truth.
 */

function resolveSiteUrl(): string {
  const fallback = "http://localhost:3000";
  let raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!raw) return fallback;

  // Accept a bare domain (e.g. "mysite.com") by adding a scheme, so a missing
  // "https://" in the Vercel env var can never crash `new URL(SITE_URL)` during
  // the build.
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;

  try {
    const url = new URL(raw);
    // Origin only: scheme + host, no trailing slash, no path or query.
    return `${url.protocol}//${url.host}`;
  } catch {
    return fallback;
  }
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
    "Watch live TV, sport and films with a reliable IPTV subscription in the UK. " +
    "More than 20,000 HD and 4K channels, UK based servers, a 7 day TV guide and instant activation.",
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
