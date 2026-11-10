/**
 * Atmospheric backdrop for the dark sections: large curved forms with a
 * glowing orange rim, slowly drifting. Decorative only.
 */
export function LightTrails({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  const arcs = [
    { cx: -260, cy: 1560, r: 1180 },
    { cx: 1980, cy: -620, r: 1120 },
    { cx: 1560, cy: 1840, r: 1100 },
  ];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute -inset-[6%] h-[112%] w-[112%] animate-drift"
      >
        <defs>
          <linearGradient id="arc-rim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F04419" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#FF7A3D" />
            <stop offset="1" stopColor="#F04419" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="arc-body" cx="50%" cy="50%" r="50%">
            <stop offset="0.86" stopColor="#3A0500" stopOpacity="0" />
            <stop offset="0.97" stopColor="#6E1200" stopOpacity="0.55" />
            <stop offset="1" stopColor="#C2340E" stopOpacity="0.8" />
          </radialGradient>
          <filter id="arc-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>
        {arcs.map((a, i) => (
          <g key={i}>
            <circle {...a} fill="url(#arc-body)" />
            <circle {...a} fill="none" stroke="url(#arc-rim)" strokeWidth="18" filter="url(#arc-glow)" opacity="0.7" />
            <circle {...a} fill="none" stroke="url(#arc-rim)" strokeWidth="2.5" />
          </g>
        ))}
      </svg>
    </div>
  );
}
