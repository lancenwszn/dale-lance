"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,color,border-color] duration-300 ${
          scrolled && !open
            ? "border-b border-white/10 bg-ink/90 text-paper backdrop-blur-md"
            : "border-b border-transparent text-paper"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1680px] items-center justify-between px-5 md:px-10">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-[1.35rem] font-bold leading-none tracking-[-0.04em]"
          >
            {site.name}
            <span className={scrolled || open ? "text-orange" : "text-ink"}>.</span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-12 lg:flex xl:gap-20">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[0.9375rem] font-medium underline decoration-current/60 underline-offset-4 transition-opacity hover:opacity-70"
              >
                {item.label}
                <sup className="ml-1 text-[0.6rem] opacity-60">(0{i + 1})</sup>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className={`label hidden items-center gap-1.5 px-4 py-2.5 text-paper transition-colors hover:bg-paper hover:text-ink sm:flex ${
                scrolled ? "bg-orange" : "bg-ink"
              }`}
            >
              Let&apos;s talk <ArrowUpRight size={13} aria-hidden />
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span
                className={`absolute h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-current transition-transform duration-300 ${
                  open ? "-rotate-45" : "translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="atmosphere fixed inset-0 z-40 flex flex-col justify-between px-5 pb-8 pt-24 text-paper lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/15 py-4"
                  >
                    <span className="label text-orange-hi">0{i + 1}</span>
                    <span className="display text-[2.6rem]">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex gap-6">
              <a href={`mailto:${site.email}`} className="label flex items-center gap-2 text-orange-hi">
                Email me <ArrowUpRight size={14} aria-hidden />
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="label flex items-center gap-2 text-orange-hi"
              >
                WhatsApp <ArrowUpRight size={14} aria-hidden />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
