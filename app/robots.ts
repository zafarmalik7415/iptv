import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * Auto-generates /robots.txt.
 *
 * - Allows every well-behaved crawler to index the whole site.
 * - Blocks Next.js internals and API routes from being crawled.
 * - Points crawlers at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/404", "/500"],
      },
      // Explicitly welcome the major search + social crawlers.
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "Slurp", allow: "/" }, // Yahoo
      { userAgent: "YandexBot", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
