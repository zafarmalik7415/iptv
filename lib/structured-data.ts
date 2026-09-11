import { durationPlans, type Faq } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import { SITE_URL, siteConfig } from "@/lib/site";

/**
 * schema.org JSON-LD builders. Keep every graph node keyed by a stable `@id`
 * (a URL fragment on the site) so pages can reference the Organization without
 * duplicating it.
 */

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

type JsonLdObject = Record<string, unknown>;

/** schema.org "Organization" describing the overall business. */
export function organizationSchema(): JsonLdObject {
  const sameAs = siteConfig.organization.sameAs.filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.organization.legalName,
    alternateName: siteConfig.name,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
    description: siteConfig.description,
    email: siteConfig.organization.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.organization.email,
        availableLanguage: ["English"],
      },
    ],
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

/** schema.org "WebSite" — enables the sitelinks search box and ties pages together. */
export function websiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/** schema.org "FAQPage" built from the shared FAQ list. */
export function faqPageSchema(items: Faq[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * schema.org "Product" for the subscription itself, with an AggregateOffer
 * spanning the cheapest to the most expensive per term plan price.
 */
export function subscriptionProductSchema(): JsonLdObject {
  const prices = durationPlans.map((p) => p.price);
  const lowPrice = Math.min(...prices);
  const highPrice = Math.max(...prices);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "IPTV Subscription UK",
    description:
      "Buy a UK IPTV subscription with 20,000+ live channels and a large VOD library in HD and 4K, " +
      "a 7 day TV guide with catch up, and support for every major device.",
    brand: { "@type": "Brand", name: siteConfig.name },
    url: absoluteUrl("/pricing"),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice: lowPrice.toFixed(2),
      highPrice: highPrice.toFixed(2),
      offerCount: durationPlans.length,
      availability: "https://schema.org/InStock",
    },
  };
}

/**
 * schema.org "HowTo" for a single device setup guide. Rendered on the
 * installation guide page so each walkthrough is eligible for how-to rich
 * results.
 */
export function howToSchema(guide: {
  device: string;
  app: string;
  time: string;
  intro: string;
  steps: { title: string; detail: string }[];
}): JsonLdObject {
  const minutes = parseInt(guide.time, 10);

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to set up IPTV on ${guide.device}`,
    description: guide.intro,
    ...(Number.isFinite(minutes) ? { totalTime: `PT${minutes}M` } : {}),
    tool: [{ "@type": "HowToTool", name: guide.app }],
    step: guide.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.detail,
    })),
  };
}

/**
 * Generic schema.org "HowTo" for any numbered process shown on a page, such
 * as the buying steps on the home page. Kept separate from howToSchema (the
 * per device install guide builder above) since the required fields differ.
 */
export function processHowToSchema(params: {
  name: string;
  description: string;
  steps: { title: string; description: string }[];
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: params.name,
    description: params.description,
    step: params.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

/** schema.org "BreadcrumbList" from an ordered list of [label, path] pairs. */
export function breadcrumbSchema(
  trail: { name: string; path: string }[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
