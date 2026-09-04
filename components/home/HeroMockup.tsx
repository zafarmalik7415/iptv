/**
 * Decorative SVG mockup of the streaming app on a TV — stands in for a product
 * screenshot in the hero. Purely presentational (aria-hidden). Swap for a real
 * screenshot later by replacing this component with an <OptimizedImage>.
 */
export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      <div
        className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[40px] opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(255,176,32,0.28), rgba(255,61,129,0.18) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 960 560"
        className="w-full rounded-2xl border border-white/10 bg-[#0d0c10] shadow-2xl shadow-black/50"
        role="img"
        aria-label="Preview of the IPTV app showing a live channel grid"
      >
        <defs>
          <linearGradient id="hm-accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffb020" />
            <stop offset="0.5" stopColor="#ff7a45" />
            <stop offset="1" stopColor="#ff3d81" />
          </linearGradient>
          <linearGradient id="hm-tile" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.09" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* top bar */}
        <rect x="0" y="0" width="960" height="56" fill="#111015" />
        <circle cx="28" cy="28" r="10" fill="url(#hm-accent)" />
        <rect x="48" y="21" width="96" height="14" rx="7" fill="#ffffff" opacity="0.75" />
        <rect x="760" y="18" width="60" height="20" rx="10" fill="#ff3d81" opacity="0.9" />
        <text x="774" y="32" fontSize="11" fontFamily="sans-serif" fill="#1a0f07" fontWeight="700">
          LIVE
        </text>
        <rect x="840" y="18" width="90" height="20" rx="10" fill="#ffffff" opacity="0.12" />

        {/* sidebar */}
        <rect x="0" y="56" width="150" height="504" fill="#0f0e13" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i} transform={`translate(24 ${96 + i * 60})`}>
            <rect
              width="26"
              height="26"
              rx="8"
              fill={i === 1 ? "url(#hm-accent)" : "#ffffff"}
              opacity={i === 1 ? 1 : 0.12}
            />
            <rect x="38" y="7" width="72" height="12" rx="6" fill="#ffffff" opacity={i === 1 ? 0.7 : 0.25} />
          </g>
        ))}

        {/* featured now-playing */}
        <rect x="176" y="84" width="760" height="196" rx="14" fill="url(#hm-tile)" stroke="#ffffff" strokeOpacity="0.08" />
        <circle cx="556" cy="182" r="34" fill="url(#hm-accent)" />
        <path d="M548 166l24 16-24 16z" fill="#1a0f07" />
        <rect x="208" y="232" width="220" height="12" rx="6" fill="#ffffff" opacity="0.6" />
        <rect x="208" y="252" width="130" height="10" rx="5" fill="#ffffff" opacity="0.25" />
        <rect x="208" y="210" width="360" height="6" rx="3" fill="#ffffff" opacity="0.12" />
        <rect x="208" y="210" width="150" height="6" rx="3" fill="url(#hm-accent)" />

        {/* channel grid */}
        {Array.from({ length: 8 }).map((_, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          return (
            <g key={i} transform={`translate(${176 + col * 194} ${300 + row * 130})`}>
              <rect width="178" height="112" rx="12" fill="url(#hm-tile)" stroke="#ffffff" strokeOpacity="0.07" />
              <rect x="14" y="14" width="34" height="34" rx="9" fill="#ffffff" opacity={i % 3 === 0 ? 0.9 : 0.14} />
              <rect x="14" y="66" width="120" height="9" rx="4.5" fill="#ffffff" opacity="0.45" />
              <rect x="14" y="83" width="70" height="8" rx="4" fill="#ffffff" opacity="0.2" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
