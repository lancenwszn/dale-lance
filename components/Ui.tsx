import { ArrowUpRight } from "lucide-react";

/** Small tag chip with the orange asterisk, used above headings. */
export function Chip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 px-2.5 py-1.5 text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.02em] ${
        dark ? "bg-white/10 text-paper" : "bg-fog text-ink"
      }`}
    >
      <span aria-hidden className="text-sm leading-none text-orange">
        ✳
      </span>
      {children}
    </p>
  );
}

/** Boxed call-to-action: accent edge on the left, arrow square on the right. */
export function CtaLink({
  href,
  children,
  tone = "light",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "fog" | "dark";
  external?: boolean;
}) {
  const tones = {
    light: "bg-paper text-ink border-ink",
    fog: "bg-fog text-ink border-orange",
    dark: "bg-ink text-paper border-orange",
  } as const;
  const square = tone === "light" ? "bg-ink text-paper" : "bg-orange text-paper";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center gap-8 border-l-[3px] py-1.5 pl-4 pr-1.5 text-[0.8125rem] font-semibold uppercase tracking-[0.01em] transition-transform hover:-translate-y-0.5 ${tones[tone]}`}
    >
      {children}
      <span className={`flex h-8 w-8 items-center justify-center ${square}`}>
        <ArrowUpRight
          size={15}
          aria-hidden
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </span>
    </a>
  );
}
