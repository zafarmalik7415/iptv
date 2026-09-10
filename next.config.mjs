/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit clean URLs without trailing slashes so they match the canonical tags
  // produced by lib/seo.ts (e.g. /pricing, never /pricing/).
  trailingSlash: false,

  images: {
    // Serve modern formats when the browser supports them; falls back to the
    // original automatically. AVIF first for the best compression.
    formats: ["image/avif", "image/webp"],

    // Breakpoints used when a responsive <Image> has `sizes` / `fill`.
    deviceSizes: [360, 420, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Cache optimized images at the edge for 24h minimum.
    minimumCacheTTL: 60 * 60 * 24,

    // Allow-list external image hosts here before using them in <Image src>.
    // TMDB is the source for the on-demand poster artwork on the homepage
    // (data courtesy of themoviedb.org — this product is not endorsed by TMDB).
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" },
    ],
  },

  // Ship smaller, safer HTML.
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,

  // NOTE: the www -> apex redirect is handled at the Vercel edge (Settings ->
  // Domains -> set iptvsubscriptionsuk.co.uk as the primary domain). Do not add
  // a redirect here as well or the two bounce against each other in a loop.
};

export default nextConfig;
