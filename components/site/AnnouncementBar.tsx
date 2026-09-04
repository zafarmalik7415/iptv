"use client";

import { useEffect, useState } from "react";

import { announcement } from "@/lib/content";
import { Icon } from "@/components/ui";

const KEY = "promo-dismissed-v1";

export function AnnouncementBar() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    try {
      setHidden(sessionStorage.getItem(KEY) === "1");
    } catch {
      setHidden(false);
    }
  }, []);

  if (hidden) return null;

  return (
    <div className="relative z-[60] bg-gradient-to-r from-brand-1 via-brand-2 to-brand-3 text-[#1a0f07]">
      <div className="container-x flex items-center justify-center gap-3 py-2 text-center text-sm font-medium">
        <span className="hidden rounded-full bg-black/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide sm:inline-block">
          {announcement.badge}
        </span>
        <span>
          {announcement.text}{" "}
          <span className="font-bold">{announcement.price}</span>{" "}
          <span className="line-through opacity-60">{announcement.strike}</span>{" "}
          <span className="font-semibold">· {announcement.save}</span>
        </span>
      </div>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {
            /* ignore */
          }
          setHidden(true);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 hover:bg-black/10"
      >
        <Icon name="close" className="h-4 w-4" />
      </button>
    </div>
  );
}
