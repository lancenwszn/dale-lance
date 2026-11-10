import type { Area } from "@/lib/site";

/**
 * Abstract cover art for each area of work. Purely decorative geometry —
 * deliberately not a diagram or depiction of any real product or system.
 */
export function AreaCover({ slug, className = "" }: { slug: Area["slug"]; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        {slug === "product" && <ProductArt />}
        {slug === "systems" && <SystemsArt />}
        {slug === "automation" && <AutomationArt />}
        {slug === "web" && <WebArt />}
      </svg>
    </div>
  );
}

function ProductArt() {
  return (
    <>
      <rect width="800" height="500" fill="#F04419" />
      <circle cx="620" cy="110" r="270" fill="#FF6B32" opacity="0.55" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={250 + i * 34}
          y={110 + i * 34}
          width="230"
          height="230"
          fill={i === 3 ? "#F7F7F5" : "none"}
          stroke={i === 3 ? "none" : "#111"}
          strokeWidth="1.5"
          opacity={i === 3 ? 1 : 0.35 + i * 0.2}
        />
      ))}
      <g stroke="#111" strokeWidth="9" strokeLinecap="square">
        <path d="M467 277v140M397 347h140M418 298l98 98M516 298l-98 98" />
      </g>
    </>
  );
}

function SystemsArt() {
  const dots: [number, number][] = [];
  for (let y = 0; y < 5; y++) for (let x = 0; x < 9; x++) dots.push([120 + x * 70, 110 + y * 70]);
  return (
    <>
      <rect width="800" height="500" fill="#E7E7E7" />
      <g fill="#111" opacity="0.28">
        {dots.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x - 2.5} y={y - 2.5} width="5" height="5" />
        ))}
      </g>
      <path
        d="M120 320 H260 V180 H400 V320 H540 V180 H680"
        fill="none"
        stroke="#111"
        strokeWidth="2"
      />
      <path d="M400 320 V390 H610" fill="none" stroke="#F04419" strokeWidth="3" />
      {[
        [260, 180],
        [540, 320],
        [680, 180],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x - 13} y={y - 13} width="26" height="26" fill="#F7F7F5" stroke="#111" strokeWidth="2" />
      ))}
      <rect x="380" y="300" width="40" height="40" fill="#F04419" />
      <rect x="596" y="376" width="28" height="28" fill="#111" />
    </>
  );
}

function AutomationArt() {
  return (
    <>
      <defs>
        <radialGradient id="auto-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#F04419" stopOpacity="0.75" />
          <stop offset="1" stopColor="#F04419" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="#2B0400" />
      <circle cx="400" cy="250" r="300" fill="url(#auto-glow)" />
      <g fill="none" stroke="#FF6B32">
        <circle cx="400" cy="250" r="80" strokeWidth="2" />
        <circle cx="400" cy="250" r="140" strokeWidth="1.5" strokeDasharray="5 9" />
        <circle cx="400" cy="250" r="205" strokeWidth="1" strokeOpacity="0.6" />
      </g>
      <path d="M400 110 A140 140 0 0 1 540 250" fill="none" stroke="#F7F7F5" strokeWidth="5" />
      <path d="M540 250 l-13 -24 h26 z" fill="#F7F7F5" />
      <path d="M400 390 A140 140 0 0 1 260 250" fill="none" stroke="#F7F7F5" strokeWidth="5" />
      <path d="M260 250 l13 24 h-26 z" fill="#F7F7F5" />
      <rect x="388" y="238" width="24" height="24" fill="#F7F7F5" />
    </>
  );
}

function WebArt() {
  return (
    <>
      <rect width="800" height="500" fill="#111" />
      <circle cx="140" cy="430" r="260" fill="#F04419" opacity="0.35" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${190 + i * 60} ${70 + i * 55})`}>
          <rect width="360" height="240" fill={i === 2 ? "#F7F7F5" : "#111"} stroke="#F7F7F5" strokeOpacity={i === 2 ? 1 : 0.4} strokeWidth="1.5" />
          <path d="M0 34H360" stroke={i === 2 ? "#111" : "#F7F7F5"} strokeOpacity={i === 2 ? 1 : 0.4} strokeWidth="1.5" />
          <rect x="14" y="12" width="10" height="10" fill={i === 2 ? "#F04419" : "#F7F7F5"} opacity={i === 2 ? 1 : 0.4} />
        </g>
      ))}
      <g transform="translate(310 180)">
        <rect x="24" y="58" width="150" height="22" fill="#111" />
        <rect x="24" y="96" width="230" height="8" fill="#111" opacity="0.25" />
        <rect x="24" y="116" width="190" height="8" fill="#111" opacity="0.25" />
        <rect x="24" y="150" width="84" height="30" fill="#F04419" />
      </g>
    </>
  );
}
