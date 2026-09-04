/**
 * Single source of truth for the site's indexable routes. The sitemap and any
 * navigation menus should read from here so nothing drifts out of sync.
 */

export interface SiteRoute {
  path: `/${string}` | "/";
  label: string;
  /** Sitemap hint. */
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  /** Sitemap priority, 0.0–1.0. Home highest, then money pages. */
  priority: number;
}

export const siteRoutes: SiteRoute[] = [
  { path: "/", label: "Home", changeFrequency: "weekly", priority: 1.0 },
  { path: "/pricing", label: "Pricing", changeFrequency: "weekly", priority: 0.9 },
  { path: "/channels", label: "Channels", changeFrequency: "weekly", priority: 0.8 },
  {
    path: "/installation-guide",
    label: "Installation Guide",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/faq", label: "FAQ", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", label: "Contact", changeFrequency: "yearly", priority: 0.5 },
];
