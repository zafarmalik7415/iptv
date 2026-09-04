import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/* --------------------------------------------------------------- Container -- */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

/* ------------------------------------------------------------------ Button -- */

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const cls = `${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`;
  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

/* ---------------------------------------------------------- SectionHeading -- */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2 className="mt-6 text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-relaxed text-white/60 ${
            align === "center" ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------- Icon -- */

export type IconName =
  | "bolt"
  | "devices"
  | "grid"
  | "calendar"
  | "globe"
  | "shield"
  | "tv"
  | "film"
  | "trophy"
  | "sparkles"
  | "compass"
  | "check"
  | "arrow-right"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "menu"
  | "close"
  | "mail"
  | "chat"
  | "play"
  | "phone"
  | "laptop"
  | "gamepad"
  | "box"
  | "cast"
  | "star"
  | "x-circle"
  | "clock"
  | "wrench"
  | "download";

const PATHS: Record<IconName, ReactNode> = {
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5L20 10h-6.5L14.5 2z" />,
  devices: (
    <>
      <rect x="2" y="4" width="14" height="11" rx="2" />
      <path d="M2 19h14M18 9h4v10h-4z" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.8 3.8 9S14.5 18.5 12 21C9.5 18.5 8.2 15.2 8.2 12S9.5 5.5 12 3z" />
    </>
  ),
  shield: <path d="M12 3 4 6v6c0 5 3.4 8.3 8 9.5 4.6-1.2 8-4.5 8-9.5V6l-8-3z" />,
  tv: (
    <>
      <rect x="2" y="5" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 3v18M16 3v18M3 8h5M3 16h5M16 8h5M16 16h5" />
    </>
  ),
  trophy: (
    <>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4M9 21h6M12 13v4" />
    </>
  ),
  sparkles: (
    <path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3zM19 14l.9 2.2L22 17l-2.1.8L19 20l-.9-2.2L16 17l2.1-.8L19 14z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2z" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  "arrow-right": <path d="M5 12h14M13 5l7 7-7 7" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  "chevron-left": <path d="m15 18-6-6 6-6" />,
  "chevron-right": <path d="m9 18 6-6-6-6" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M6 18 18 6" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  chat: <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z" />,
  play: <path d="M8 5v14l11-7-11-7z" />,
  phone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10 19h4" />
    </>
  ),
  laptop: (
    <>
      <rect x="4" y="4" width="16" height="12" rx="2" />
      <path d="M2 20h20M9 20l1-4M15 20l-1-4" />
    </>
  ),
  gamepad: (
    <>
      <rect x="2" y="7" width="20" height="10" rx="5" />
      <path d="M7 11v2M6 12h2M15.5 11.5h.01M18 13.5h.01" />
    </>
  ),
  box: (
    <>
      <path d="M3 8 12 3l9 5v8l-9 5-9-5V8z" />
      <path d="m3 8 9 5 9-5M12 13v8" />
    </>
  ),
  cast: (
    <>
      <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
      <path d="M2 12a6 6 0 0 1 6 6M2 16a2 2 0 0 1 2 2M2 20h.01" />
    </>
  ),
  star: (
    <path d="M12 3.5l2.6 5.7 6.2.7-4.6 4.2 1.2 6.1L12 17.3 6.6 20.4l1.2-6.1L3.2 10l6.2-.8L12 3.5z" />
  ),
  "x-circle": (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4l-5 5A2 2 0 1 0 7.3 19.7l5-5a4 4 0 0 0 5.4-5.4l-2.3 2.3-2.1-.6-.6-2.1 1.6-2.1z" />
  ),
  download: <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16" />,
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

/* ---------------------------------------------------------------- IconBadge - */

export function IconBadge({ name }: { name: IconName }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-brand-1/20 to-brand-3/20 text-white">
      <Icon name={name} />
    </span>
  );
}
