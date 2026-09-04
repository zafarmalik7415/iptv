import type { Metadata } from "next";
import localFont from "next/font/local";

import { JsonLd } from "@/components/JsonLd";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

/**
 * Site-wide default metadata.
 *
 * - `buildMetadata` supplies metadataBase, the default canonical (home), robots,
 *   Open Graph and Twitter tags. Every child page overrides these with its own
 *   `buildMetadata({ path: ... })`, so each page ends up with exactly one unique
 *   canonical tag.
 * - `title.template` adds the brand suffix to every page title automatically.
 * - `verification.google` renders the Google Search Console <meta> tag.
 */
export const metadata: Metadata = {
  ...buildMetadata({ path: "/" }),
  title: {
    default: `${siteConfig.name}: IPTV Subscription UK for Live TV, Sport and Films`,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.organization.legalName,
  formatDetection: { email: false, address: false, telephone: false },
  verification: {
    // Replace the placeholder token in lib/site.ts with the real value from
    // Google Search Console (HTML tag verification method).
    google: siteConfig.googleSiteVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <WhatsAppButton />

        {/* Business-wide structured data (Organization + WebSite). */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
