"use client";

import { useEffect, useRef, useState } from "react";

import { Icon } from "@/components/ui";
import { installGuides } from "@/lib/content";

export function InstallationGuide() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  // Open the guide named in the URL hash (e.g. /installation-guide#firestick).
  useEffect(() => {
    const slug = window.location.hash.replace("#", "");
    const i = installGuides.findIndex((g) => g.slug === slug);
    if (i >= 0) setActive(i);
  }, []);

  // Only fires on an explicit tab click, so landing via a #hash never scrolls.
  const select = (i: number) => {
    setActive(i);
    window.history.replaceState(null, "", `#${installGuides[i].slug}`);
    if (window.innerWidth < 1024) {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const guide = installGuides[active];

  return (
    <div>
      {/* ---- device switcher: wrapped pill row across the top ---- */}
      <p className="text-center text-sm text-white/50">
        Select your device to see its guide
      </p>
      <div
        role="tablist"
        aria-label="Choose your device"
        className="-mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-auto sm:max-w-4xl sm:flex-wrap sm:justify-center sm:gap-2.5 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {installGuides.map((g, i) => {
          const isActive = i === active;
          return (
            <button
              key={g.slug}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => select(i)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2 text-[13px] font-medium transition-colors sm:px-4 sm:py-2.5 sm:text-sm ${
                isActive
                  ? "border-transparent bg-gradient-to-r from-brand-1 to-brand-3 text-[#1a0f07] shadow-lg shadow-brand-3/20"
                  : "border-white/12 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white"
              }`}
            >
              <Icon
                name={g.icon}
                className={`h-4 w-4 shrink-0 ${isActive ? "" : "text-white/45"}`}
              />
              <span className="whitespace-nowrap">{g.short ?? g.device}</span>
            </button>
          );
        })}
      </div>

      {/* ---- active guide ---- */}
      <div ref={panelRef} className="mx-auto mt-8 max-w-3xl scroll-mt-24">
        <div key={guide.slug} className="panel-swap card p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/60">
              <Icon name="clock" className="h-3.5 w-3.5" />~{guide.time} setup
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/60">
              <Icon name="download" className="h-3.5 w-3.5" />
              {guide.app}
            </span>
          </div>

          <h2 className="mt-4 text-xl font-bold sm:text-2xl">
            Set up on {guide.device}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            {guide.intro}
          </p>
          <p className="mt-2 text-xs text-white/40">{guide.appNote}</p>

          <ol className="mt-7 space-y-5">
            {guide.steps.map((step, i) => (
              <li key={step.title} className="relative flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-sm font-semibold text-brand-1">
                    {i + 1}
                  </span>
                  {i < guide.steps.length - 1 ? (
                    <span className="mt-1 w-px grow bg-white/10" />
                  ) : null}
                </div>
                <div className="pb-1 pt-1">
                  <h3 className="text-[15px] font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="flex items-center gap-2 text-[13px] font-semibold text-white/80">
              <Icon name="wrench" className="h-4 w-4 text-brand-2" />
              Tips &amp; troubleshooting
            </p>
            <ul className="mt-3 space-y-2">
              {guide.tips.map((tip) => (
                <li
                  key={tip}
                  className="flex gap-2.5 text-sm leading-relaxed text-white/55"
                >
                  <Icon
                    name="check"
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent"
                  />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
