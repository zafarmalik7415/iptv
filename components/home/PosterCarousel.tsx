"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { OptimizedImage } from "@/components/OptimizedImage";
import { Icon } from "@/components/ui";
import { onDemandTitles } from "@/lib/content";

// w185 is plenty for a 150-168px wide card and roughly half the bytes of w342.
const TMDB_IMG = "https://image.tmdb.org/t/p/w185";

export function PosterCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const scrollByCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    // Roughly one "page" of visible cards, minus one for context.
    const amount = Math.max(el.clientWidth * 0.8, 240);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mt-8 flex items-end justify-between">
        <p className="text-sm font-semibold text-white/80">
          Trending In The Library This Week
        </p>
        <p className="hidden text-xs text-white/40 sm:block">Updated Weekly</p>
      </div>

      <div className="group relative mt-4">
        <ArrowButton
          side="left"
          disabled={atStart}
          onClick={() => scrollByCards(-1)}
        />
        <ArrowButton
          side="right"
          disabled={atEnd}
          onClick={() => scrollByCards(1)}
        />

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {onDemandTitles.map((t) => (
            <article
              key={t.title}
              className="relative aspect-[2/3] w-[150px] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:z-10 hover:-translate-y-1 hover:border-white/25 sm:w-[168px]"
            >
              <OptimizedImage
                src={`${TMDB_IMG}/${t.poster}`}
                alt={`${t.title} poster`}
                fill
                sizes="168px"
                quality={85}
                className="object-cover"
              />

              <span className="absolute left-2 top-2 flex items-center gap-1 rounded-md bg-black/55 px-1.5 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur">
                <Icon name="star" className="h-3 w-3 text-brand-1" />
                {t.rating.toFixed(1)}
              </span>
              <span className="absolute right-2 top-2 rounded-md bg-black/55 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white/80 backdrop-blur">
                {t.kind}
              </span>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-2.5 pt-8">
                <p className="line-clamp-2 text-[12px] font-semibold leading-tight text-white">
                  {t.title}
                </p>
                <p className="mt-1 text-[10px] text-white/55">
                  {t.genre} · {t.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}

function ArrowButton({
  side,
  disabled,
  onClick,
}: {
  side: "left" | "right";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={side === "left" ? "Scroll left" : "Scroll right"}
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#0d0c10]/90 text-white shadow-lg backdrop-blur transition hover:border-white/40 hover:bg-[#0d0c10] disabled:pointer-events-none disabled:opacity-0 md:flex ${
        side === "left" ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"
      }`}
    >
      <Icon
        name={side === "left" ? "chevron-left" : "chevron-right"}
        className="h-5 w-5"
      />
    </button>
  );
}
