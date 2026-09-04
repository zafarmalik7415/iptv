import type { MetadataRoute } from "next";

import { siteRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

/**
 * Auto-generates /sitemap.xml from the central route list.
 * Uses `absoluteUrl` so every <loc> matches its page's canonical tag exactly.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return siteRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
