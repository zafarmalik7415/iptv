"use client";

import { useMemo, useState } from "react";

import { channelCategories } from "@/lib/content";
import { IconBadge } from "@/components/ui";

export function ChannelExplorer() {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(
    () =>
      channelCategories.filter((cat) => active === "all" || cat.slug === active),
    [active],
  );

  const activeCategory = channelCategories.find((cat) => cat.slug === active);

  return (
    <div>
      <div className="-mx-5 flex flex-nowrap gap-2 overflow-x-auto px-5 pb-1 sm:-mx-8 sm:px-8">
        <FilterButton
          label="All"
          active={active === "all"}
          onClick={() => setActive("all")}
        />
        {channelCategories.map((cat) => (
          <FilterButton
            key={cat.slug}
            label={cat.name}
            active={active === cat.slug}
            onClick={() => setActive(cat.slug)}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Stat value={`${channelCategories.length}`} label="Channel Categories" />
        <Stat
          value={activeCategory ? activeCategory.count : "20,000+"}
          label={activeCategory ? `${activeCategory.name} Channels` : "All Channels"}
        />
        <Stat value="7 Days" label="TV Guide" />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {filtered.map((cat) => (
          <div key={cat.slug} className="card p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <IconBadge name={cat.icon} />
                <div>
                  <h3 className="font-semibold">{cat.name}</h3>
                  <p className="text-xs text-white/45">{cat.count} channels</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {cat.blurb}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.examples.map((ex) => (
                <li
                  key={ex}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/70"
                >
                  {ex}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-5 text-center">
      <p className="text-2xl font-bold gradient-text">{value}</p>
      <p className="mt-1 text-xs text-white/55">{label}</p>
    </div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "bg-white text-[#0a0a0c]"
          : "border border-white/12 text-white/60 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
