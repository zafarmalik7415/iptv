import type { Metadata } from "next";

import { SITE_URL, siteConfig } from "@/lib/site";

/**
 * Default focus keywords for the site. Individual pages can append their own via
 * `keywords`. These are hints for humans/tools — modern Google ignores the
 * meta keywords tag, so we keep the list short and honest.
 */
export const DEFAULT_KEYWORDS = [
  "IPTV subscription",
  "IPTV subscription UK",
  "UK IPTV subscription",
  "IPTV UK",
  "live TV streaming UK",
] as const;

export interface SeoParams {
  /**
   * Page title WITHOUT the brand suffix. The root layout applies the
   * "%s | IPTV UK" template automatically. Omit for the home page.
   */
  title?: string;
  /** Meta description for this page. Falls back to the site description. */
  description?: string;
  /**
   * Route path, always starting with "/", e.g. "/pricing" or "/faq".
   * This is the single input that determines the canonical URL, so every page
   * MUST pass it. The home page passes "/" (the default).
   */
  path?: string;
  /** Absolute or root-relative share image. Defaults to the site OG image. */
  image?: string;
  /** Extra keywords to merge with {@link DEFAULT_KEYWORDS}. */
  keywords?: string[];
  /** Open Graph object type. "website" for most marketing pages. */
  type?: "website" | "article";
  /**
   * When true, emit a noindex/nofollow robots directive (e.g. thank-you pages).
   * The canonical tag is still emitted so the URL stays self-referential.
   */
  noIndex?: boolean;
  /**
   * When true, use the title exactly as given and skip the brand template.
   * Used by the home page so its title isn't "Home | IPTV UK".
   */
  titleAbsolute?: boolean;
}

/**
 * Build an absolute, normalised URL for a given route path.
 * - guarantees exactly one leading slash
 * - collapses accidental double slashes
 * - strips trailing slashes (except the root, which stays "/")
 * - drops any query string or hash so canonicals never vary
 */
export function absoluteUrl(path: string = "/"): string {
  const [withoutHash] = path.split("#");
  const [pathnameOnly] = withoutHash.split("?");
  const normalised = `/${pathnameOnly}`
    .replace(/\/{2,}/g, "/")
    .replace(/\/+$/, "");
  return normalised === "" ? `${SITE_URL}/` : `${SITE_URL}${normalised}`;
}

/**
 * Resolve an asset reference to an absolute URL. Pass-through for URLs that are
 * already absolute. Social crawlers require absolute og:image / twitter:image
 * URLs, so we never rely on metadataBase resolution for these.
 */
export function absoluteAsset(src: string): string {
  if (/^https?:\/\//i.test(src)) return src;
  return `${SITE_URL}/${src.replace(/^\/+/, "")}`;
}

/**
 * Central metadata factory. Every `page.tsx` / `layout.tsx` should export its
 * metadata via this function so that title, description, canonical URL, Open
 * Graph, and Twitter tags are always consistent and — critically — every page
 * gets exactly one correct, unique canonical tag.
 */
export function buildMetadata(params: SeoParams = {}): Metadata {
  const {
    title,
    description = siteConfig.description,
    path = "/",
    image = siteConfig.ogImage,
    keywords = [],
    type = "website",
    noIndex = false,
    titleAbsolute = false,
  } = params;

  const canonical = absoluteUrl(path);
  const imageUrl = absoluteAsset(image);
  const resolvedTitle: Metadata["title"] = title
    ? titleAbsolute
      ? { absolute: title }
      : title
    : undefined; // undefined -> root layout's `title.default` is used

  // Text used inside OG/Twitter where a concrete string is required.
  const socialTitle = title ?? "IPTV Subscription UK: 20,000+ Channels, Sport and Films";

  const mergedKeywords = Array.from(
    new Set<string>([...DEFAULT_KEYWORDS, ...keywords]),
  );

  return {
    metadataBase: new URL(SITE_URL),
    title: resolvedTitle,
    description,
    keywords: mergedKeywords,
    alternates: {
      // The ONLY place a canonical is defined. Always absolute, always unique.
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false, nocache: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      url: canonical,
      locale: siteConfig.locale,
      images: [
        {
          url: imageUrl,
          width: siteConfig.ogImageWidth,
          height: siteConfig.ogImageHeight,
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
  };
}
