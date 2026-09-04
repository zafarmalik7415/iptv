"use client";

import { useMemo, useState } from "react";

import { channelCategories } from "@/lib/content";
import { Icon, IconBadge } from "@/components/ui";

export function ChannelExplorer() {
  const [active, setActive] = useState<string>("all");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return channelCategories
      .filter((cat) => active === "all" || cat.slug === active)
      .map((cat) => ({
        ...cat,
        matches: q
          ? cat.examples.filter((ex) => ex.toLowerCase().includes(q))
          : cat.examples,
      }))
      .filter((cat) => !q || cat.matches.length > 0);
  }, [active, q]);

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
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

        <label className="relative w-full lg:w-72">
          <span className="sr-only">Search channels</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a channel…"
            className="w-full rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-sm outline-none placeholder:text-white/35 focus:border-brand-2/60"
          />
        </label>
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
              {cat.matches.map((ex) => (
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

      {filtered.length === 0 ? (
        <div className="card mt-10 flex flex-col items-center gap-2 p-10 text-center">
          <Icon name="compass" className="h-6 w-6 text-white/40" />
          <p className="text-sm text-white/60">
            No channels match “{query}”. Try a different name. The full line up
            has 20,000+ channels and this page only lists popular examples.
          </p>
        </div>
      ) : null}
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
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "bg-white text-[#0a0a0c]"
          : "border border-white/12 text-white/60 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
