import type { ReactNode } from "react";

import { Button, Container, Icon } from "@/components/ui";
import { whatsappLink } from "@/lib/content";

interface CtaSectionProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  /** Small reassurance line under the buttons. */
  note?: string;
  /** Tones down the padding for a mid page band. */
  compact?: boolean;
}

/**
 * Reusable call to action band. Primary button points at pricing by default,
 * with a WhatsApp button next to it so people can ask first.
 */
export function CtaSection({
  eyebrow = "Ready when you are",
  title,
  description,
  primaryHref = "/pricing",
  primaryLabel = "See plans and pricing",
  note = "No contract · Cancel any time · 7 day money back guarantee",
  compact = false,
}: CtaSectionProps) {
  return (
    <section
      className={`glow-top relative overflow-hidden border-t border-white/10 ${
        compact ? "py-16 md:py-20" : "py-24 md:py-32"
      }`}
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-6 text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-[2.6rem]">
            {title}
          </h2>
          {description ? (
            <p className="mx-auto mt-5 max-w-xl text-white/65">{description}</p>
          ) : null}

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={primaryHref}
              className="w-full px-7 py-3.5 text-base sm:w-auto"
            >
              {primaryLabel}
              <Icon name="arrow-right" className="h-4 w-4" />
            </Button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-7 py-3.5 text-base font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/15 sm:w-auto"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.745 3.047 9.377L1.05 31.3l6.13-1.96A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.31 22.594c-.386 1.09-1.918 1.994-3.14 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.98-.574 1.55-.574.184 0 .35.01.5.016.44.02.66.046.95.74.362.87 1.242 3.166 1.348 3.388.108.222.216.522.066.832-.14.32-.264.454-.486.708-.222.254-.432.45-.654.722-.204.238-.434.492-.178.932.256.43 1.138 1.876 2.446 3.04 1.688 1.502 3.078 1.976 3.562 2.178.36.15.79.114 1.052-.168.334-.36.744-.958 1.162-1.548.296-.42.67-.472 1.062-.324.4.14 2.53 1.192 2.964 1.408.434.216.722.32.83.5.106.184.106 1.048-.28 2.14Z" />
              </svg>
              Ask on WhatsApp
            </a>
          </div>

          {note ? <p className="mt-4 text-xs text-white/45">{note}</p> : null}
        </div>
      </Container>
    </section>
  );
}
