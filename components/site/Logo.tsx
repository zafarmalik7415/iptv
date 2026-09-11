/**
 * The site mark: a TV set carrying the UK flag, with a play button standing in
 * for the screen. The frame and antenna use the brand gradient so the icon
 * reads as ours at a glance; the flag keeps its real colours since that is
 * what signals "UK" at a glance. Renders crisp at any size, no image file.
 */
export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="IPTV Subscription UK logo"
    >
      <defs>
        <linearGradient id="logo-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffb020" />
          <stop offset="0.5" stopColor="#ff7a45" />
          <stop offset="1" stopColor="#ff3d81" />
        </linearGradient>
      </defs>

      {/* antenna */}
      <line x1="21" y1="20" x2="13" y2="8" stroke="url(#logo-accent)" strokeWidth="3" strokeLinecap="round" />
      <line x1="43" y1="20" x2="51" y2="8" stroke="url(#logo-accent)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="13" cy="8" r="3" fill="url(#logo-accent)" />
      <circle cx="51" cy="8" r="3" fill="url(#logo-accent)" />

      {/* TV body */}
      <rect x="6" y="19" width="52" height="33" rx="10" fill="#0d0c10" stroke="url(#logo-accent)" strokeWidth="2.5" />

      {/* play button screen */}
      <path d="M17 28 L33 35.5 L17 43 Z" fill="#ffffff" fillOpacity="0.92" />

      {/* UK flag panel, clipped to the body's rounded right edge */}
      <clipPath id="logo-body">
        <rect x="6" y="19" width="52" height="33" rx="10" />
      </clipPath>
      <g clipPath="url(#logo-body)">
        <g transform="translate(40 19)">
          <rect x="0" y="0" width="18" height="33" fill="#012169" />
          <line x1="0" y1="0" x2="18" y2="33" stroke="#ffffff" strokeWidth="4.4" />
          <line x1="18" y1="0" x2="0" y2="33" stroke="#ffffff" strokeWidth="4.4" />
          <line x1="0" y1="0" x2="18" y2="33" stroke="#c8102e" strokeWidth="1.7" />
          <line x1="18" y1="0" x2="0" y2="33" stroke="#c8102e" strokeWidth="1.7" />
          <rect x="7" y="0" width="4" height="33" fill="#ffffff" />
          <rect x="0" y="14.5" width="18" height="4" fill="#ffffff" />
          <rect x="8" y="0" width="2" height="33" fill="#c8102e" />
          <rect x="0" y="15.5" width="18" height="2" fill="#c8102e" />
        </g>
      </g>
    </svg>
  );
}
