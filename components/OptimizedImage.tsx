import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "loading" | "priority"> & {
  /**
   * Set this ONLY for images visible in the initial viewport (hero, logo in the
   * header, LCP image). It enables `priority` (preload, no lazy-loading).
   * Everything else stays lazy-loaded — which is the default below.
   */
  aboveTheFold?: boolean;
};

/**
 * Project-standard image component.
 *
 * next/image already lazy-loads and optimizes by default; this wrapper makes the
 * intent explicit and consistent:
 *   - default:            lazy-loaded, async decoding, quality 80
 *   - aboveTheFold:       eager + priority (use sparingly, 1–2 per page)
 *
 * Always pass `width`/`height` (or `fill` + a sized parent) and a `sizes` string
 * for responsive images so the browser downloads the smallest sufficient file.
 */
export function OptimizedImage({
  aboveTheFold = false,
  quality = 80,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      quality={quality}
      priority={aboveTheFold}
      loading={aboveTheFold ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
