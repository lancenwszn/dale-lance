"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import type { Role } from "@/lib/site";
import { Reveal } from "./Reveal";

const ease = [0.2, 0.7, 0.2, 1] as const;

/**
 * Editorial career timeline. The first role is featured and open by default;
 * every other role is a compact row that expands inline.
 * Roles flagged `earlier` are grouped under an "Earlier career" heading.
 */
export function ExperienceTimeline({ roles }: { roles: Role[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const firstEarlier = roles.findIndex((r) => r.earlier);

  return (
    <ol className="relative">
      {/* timeline spine */}
      <span
        aria-hidden
        className="absolute bottom-0 left-[5px] top-3 w-px bg-gradient-to-b from-orange-hi via-paper/25 to-paper/5 lg:left-[calc(25%-1.25rem)]"
      />

      {roles.map((role, i) => (
        <li key={`${role.title}-${role.period}`}>
          {i === firstEarlier && (
            <Reveal>
              <div className="grid gap-x-10 pb-2 pl-8 pt-14 lg:grid-cols-12 lg:pl-0">
                <p className="label hidden text-paper/60 lg:col-span-3 lg:block">Compact view</p>
                <p className="display text-3xl text-paper/90 md:text-5xl lg:col-span-9">Earlier career</p>
              </div>
            </Reveal>
          )}
          <Reveal>
            <Entry
              role={role}
              index={i}
              featured={i === 0}
              compact={!!role.earlier}
              isOpen={open.has(i)}
              onToggle={() => toggle(i)}
            />
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

function Entry({
  role,
  index,
  featured,
  compact,
  isOpen,
  onToggle,
}: {
  role: Role;
  index: number;
  featured: boolean;
  compact: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `role-panel-${index}`;
  const hasDetails =
    role.responsibilities.length > 0 || !!role.contributions?.length || !!role.achievements?.length;

  const titleSize = featured
    ? "text-[clamp(1.75rem,3.6vw,3.5rem)] leading-[1.05]"
    : compact
      ? "text-xl md:text-2xl leading-tight"
      : "text-[clamp(1.4rem,2.3vw,2.25rem)] leading-[1.1]";

  return (
    <article
      className={`group relative grid gap-x-10 gap-y-3 pl-8 lg:grid-cols-12 lg:pl-0 ${
        featured ? "py-10 lg:py-14" : compact ? "py-6" : "py-8 lg:py-10"
      }`}
    >
      {/* marker */}
      <span
        aria-hidden
        className={`absolute left-0 lg:left-[calc(25%-1.25rem-5px)] ${
          featured
            ? "top-[3.1rem] h-[11px] w-[11px] bg-orange-hi shadow-[0_0_0_5px_rgba(255,107,50,0.22)] lg:top-[4.6rem]"
            : `h-[11px] w-[11px] border border-paper/60 bg-burgundy transition-colors duration-300 group-hover:border-orange-hi group-hover:bg-orange-hi ${
                compact ? "top-[1.95rem]" : "top-[2.6rem] lg:top-[3.2rem]"
              } ${isOpen ? "!border-orange-hi !bg-orange-hi" : ""}`
        }`}
      />

      {/* date column */}
      <div className="lg:col-span-3 lg:pr-12">
        {featured && <p className="display mb-3 text-6xl text-orange-hi">{String(index + 1).padStart(2, "0")}</p>}
        <p className={`label ${featured ? "text-paper" : "pt-1 text-paper/70 lg:pt-2"}`}>{role.period}</p>
        {featured && (
          <p className="label mt-3 inline-flex items-center gap-2 text-orange-hi">
            <span className="inline-block h-1.5 w-1.5 bg-orange-hi" /> Latest role
          </p>
        )}
      </div>

      {/* content */}
      <div className={`lg:col-span-9 ${featured ? "" : "border-t border-paper/15 pt-5 lg:-mt-5"}`}>
        <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3">
          <div className="min-w-0 max-w-3xl">
            <h3 className={`font-medium tracking-[-0.03em] ${titleSize}`}>{role.title}</h3>
            <p className={`label text-orange-hi ${featured ? "mt-4" : "mt-2.5"}`}>{role.org}</p>
          </div>
          {hasDetails && (
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="label flex shrink-0 items-center gap-2.5 py-1 text-paper/80 transition-colors hover:text-orange-hi"
            >
              {isOpen ? "Hide details" : "View details"}
              <span className="flex h-7 w-7 items-center justify-center border border-current">
                <Plus
                  size={13}
                  aria-hidden
                  className={`transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                />
              </span>
            </button>
          )}
        </div>

        <p
          className={`max-w-2xl leading-relaxed text-paper/75 ${
            featured ? "mt-7 text-lg" : compact ? "mt-3" : "mt-4"
          }`}
        >
          {role.summary}
        </p>

        <AnimatePresence initial={false}>
          {isOpen && hasDetails && (
            <motion.div
              id={panelId}
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              className="overflow-hidden"
            >
              <div className="grid gap-x-12 gap-y-8 pt-8 xl:grid-cols-2">
                <DetailList title="Responsibilities" items={role.responsibilities} numbered />
                <div className="space-y-8">
                  <DetailList title="Key contributions" items={role.contributions} />
                  <DetailList title="Achievements" items={role.achievements} />
                  <DetailList title="Areas of focus" items={role.focus} numbered />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}

function DetailList({ title, items, numbered }: { title: string; items?: string[]; numbered?: boolean }) {
  if (!items?.length) return null;
  return (
    <div>
      <p className="label text-paper/50">{title}</p>
      <ul className="mt-3 border-b border-paper/15">
        {items.map((item, n) => (
          <li key={item} className="flex gap-4 border-t border-paper/15 py-2.5 leading-snug text-paper/85">
            {numbered ? (
              <span className="label pt-1 text-orange-hi">{String(n + 1).padStart(2, "0")}</span>
            ) : (
              <span className="mt-2 inline-block h-1 w-1 shrink-0 bg-orange-hi" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
