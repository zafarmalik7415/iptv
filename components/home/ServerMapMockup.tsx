/**
 * Decorative illustration for the "closer servers" section: a UK edge node
 * sending steady streams to nearby devices, with signal rings pulsing outward
 * and packets travelling down each link. Purely presentational (aria-hidden).
 * Motion is CSS only and is disabled under prefers-reduced-motion.
 */
export function ServerMapMockup() {
  const nodes = [
    { x: 404, y: 120, label: "Smart TV", ping: "12 ms" },
    { x: 452, y: 224, label: "Mobile", ping: "9 ms" },
    { x: 404, y: 328, label: "Router", ping: "11 ms" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div
        className="absolute -inset-8 -z-10 rounded-[40px] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(55% 55% at 30% 45%, rgba(255,176,32,0.22), rgba(255,61,129,0.16) 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <svg
        viewBox="0 0 520 440"
        className="w-full rounded-2xl border border-white/10 bg-[#0d0c10] shadow-2xl shadow-black/50"
        role="img"
        aria-label="A UK server sending steady HD and 4K streams to nearby devices"
      >
        <defs>
          <linearGradient id="sm-accent" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffb020" />
            <stop offset="0.5" stopColor="#ff7a45" />
            <stop offset="1" stopColor="#ff3d81" />
          </linearGradient>
          <linearGradient id="sm-unit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* faint dotted grid */}
        <g stroke="#ffffff" strokeOpacity="0.04">
          {[80, 160, 240, 320, 400].map((y) => (
            <line key={`h${y}`} x1="24" y1={y} x2="496" y2={y} />
          ))}
          {[100, 200, 300, 400].map((x) => (
            <line key={`v${x}`} x1={x} y1="32" x2={x} y2="408" />
          ))}
        </g>

        {/* coverage boundary + pulsing signal rings, centred on the node */}
        <circle
          cx="150"
          cy="224"
          r="98"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.12"
          strokeDasharray="2 7"
        />
        <circle cx="150" cy="224" r="98" fill="none" stroke="url(#sm-accent)" strokeWidth="1.5" className="signal-ring" />
        <circle cx="150" cy="224" r="98" fill="none" stroke="url(#sm-accent)" strokeWidth="1.5" className="signal-ring signal-ring-2" />
        <circle cx="150" cy="224" r="98" fill="none" stroke="url(#sm-accent)" strokeWidth="1.5" className="signal-ring signal-ring-3" />

        {/* links from the node to each device */}
        {nodes.map((n, i) => {
          const d = `M188 224 C 270 224, 300 ${n.y}, ${n.x - 14} ${n.y}`;
          return (
            <g key={n.label}>
              <path d={d} fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1.5" />
              <path
                d={d}
                fill="none"
                stroke="url(#sm-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                className={`packet-dash${i === 1 ? " packet-dash-2" : i === 2 ? " packet-dash-3" : ""}`}
              />
            </g>
          );
        })}

        {/* device nodes */}
        {nodes.map((n) => (
          <g key={`node-${n.label}`}>
            <circle cx={n.x} cy={n.y} r="6" fill="#0d0c10" stroke="url(#sm-accent)" strokeWidth="2" />
            <text
              x={n.x + 16}
              y={n.y - 2}
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fontSize="13"
              fontWeight="600"
              fill="#ffffff"
              fillOpacity="0.78"
            >
              {n.label}
            </text>
            <text
              x={n.x + 16}
              y={n.y + 15}
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fontSize="11"
              fontWeight="600"
              fill="#ffb020"
            >
              {n.ping}
            </text>
          </g>
        ))}

        {/* the UK edge node / server rack */}
        <rect x="114" y="150" width="72" height="148" rx="14" fill="#111015" stroke="#ffffff" strokeOpacity="0.12" />
        {[166, 198, 230, 262].map((y, i) => (
          <g key={y}>
            <rect
              x="126"
              y={y}
              width="48"
              height="20"
              rx="5"
              fill={i === 1 ? "url(#sm-accent)" : "url(#sm-unit)"}
              stroke="#ffffff"
              strokeOpacity={i === 1 ? "0" : "0.08"}
            />
            <circle cx="134" cy={y + 10} r="2" fill={i === 1 ? "#1a0f07" : "#ffb020"} fillOpacity={i === 1 ? "0.9" : "0.7"} />
          </g>
        ))}

        <text
          x="150"
          y="326"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="13"
          fontWeight="700"
          fill="#ffffff"
          fillOpacity="0.82"
        >
          UK edge node
        </text>
        <text
          x="150"
          y="344"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="11"
          fill="#ffffff"
          fillOpacity="0.45"
        >
          London · Manchester
        </text>

        {/* corner status chip */}
        <g transform="translate(360 40)">
          <rect width="128" height="26" rx="13" fill="#ffffff" fillOpacity="0.06" />
          <circle cx="16" cy="13" r="4" fill="#2dd4bf" />
          <text
            x="30"
            y="17"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="11"
            fontWeight="600"
            fill="#ffffff"
            fillOpacity="0.7"
          >
            Streaming in 4K
          </text>
        </g>
      </svg>
    </div>
  );
}
