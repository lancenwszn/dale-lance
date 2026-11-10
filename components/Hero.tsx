import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import { getHeroImage, type HeroImage } from "@/lib/hero-image";
import { areas, capabilities, site } from "@/lib/site";
import { AreaCover } from "./AreaCover";
import { RiseLines } from "./Reveal";
import { CtaLink } from "./Ui";

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Hero() {
  const portrait = getHeroImage();
  const wide = !!portrait && !portrait.cutout && (portrait.aspect ?? 0) > 1.15;
  const ticker = capabilities.flatMap((c) => c.items.slice(0, 4));
  const featured = areas[0];

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-orange text-paper">
      <div className="relative flex flex-1 flex-col">
        {/* background */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 65% at 70% 60%, #FF6B32 0%, rgba(255,107,50,0) 70%), linear-gradient(180deg, #E8481C 0%, #F04419 45%, #EE5226 100%)",
          }}
        />
        <HeroGrid />

        {/* ghost name */}
        <p
          aria-hidden
          className="display pointer-events-none absolute inset-x-0 top-[5.25rem] z-[15] hidden select-none whitespace-nowrap text-center text-[15.4vw] leading-none text-white/[0.14] lg:block"
        >
          {site.name}
        </p>

        {wide && portrait && <WidePortrait portrait={portrait} />}

        <div className="relative z-20 mx-auto flex w-full max-w-[1680px] flex-1 flex-col px-5 pt-24 md:px-10">
          <div
            className={`flex flex-1 flex-col lg:pb-10 lg:pt-[calc(15.4vw+0.5rem)] ${
              wide ? "lg:ml-[46%]" : "lg:mr-[46%]"
            }`}
          >
            {/* name */}
            <div className="order-1 lg:order-3 lg:mt-auto lg:pt-8">
              <p className="mb-1 text-lg font-bold tracking-[-0.04em] lg:text-2xl">©2026</p>
              <h1 className="display text-[14.4vw] leading-[0.82] lg:text-[min(8.4vw,9.6rem)]">
                <RiseLines onView={false} delay={0.15} lines={[site.name]} />
              </h1>
            </div>

            {/* statement */}
            <motion.div
              className="order-2 mt-7 max-w-[34rem] lg:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease }}
            >
              <p className="text-[clamp(1.2rem,1.9vw,1.75rem)] lg:indent-10 font-semibold uppercase leading-[1.18] tracking-[-0.025em]">
                {site.headline.map((line) => (
                  <span key={line} className="block lg:[&:not(:first-child)]:indent-0">
                    {line}{" "}
                  </span>
                ))}
              </p>
              <p className="mt-5 max-w-sm text-[0.9375rem] font-medium leading-snug text-ink/85">
                {site.roles.join(" · ")}. {site.positioning}
              </p>
              <div className="mt-6">
                <CtaLink href="/#work">View selected work</CtaLink>
              </div>
            </motion.div>
          </div>

          {/* featured area card */}
          <motion.div
            className={`absolute top-[calc(15.4vw+6.5rem)] z-10 hidden xl:block ${
              wide ? "right-10" : "left-[calc(54%+2.5rem)]"
            }`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
          >
            <Link
              href="/#work"
              className="group block w-[11.5rem] animate-float bg-paper p-2 text-ink shadow-[0_30px_60px_-25px_rgba(49,6,0,0.7)]"
            >
              <AreaCover
                slug={featured.slug}
                className="aspect-square transition-transform duration-500 group-hover:scale-[0.97]"
              />
              <span className="flex items-center justify-between px-1 pb-1 pt-2.5 text-[0.6875rem] font-semibold uppercase">
                <span>
                  <span className="text-orange">✳</span> AI &amp; Digital
                </span>
                <span className="text-ink/60">/Product</span>
              </span>
            </Link>
          </motion.div>
        </div>

        {/* let's talk card */}
        <motion.div
          className={`relative z-30 order-last mx-5 -mt-[7rem] mb-4 self-start md:mx-10 lg:absolute lg:bottom-10 lg:order-none lg:m-0 ${
            wide ? "lg:left-10" : "lg:right-10"
          }`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
        >
          <a
            href={`mailto:${site.email}`}
            className="group flex w-[19rem] max-w-full items-stretch gap-3.5 bg-ink p-2.5 text-paper shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)]"
          >
            {portrait && (
              <span className="relative block h-[4.75rem] w-[4.75rem] shrink-0 overflow-hidden bg-orange">
                <Image
                  src={portrait.src}
                  alt=""
                  fill
                  sizes="76px"
                  className={portrait.cutout ? "object-cover object-top" : "object-cover object-[46%_40%]"}
                />
              </span>
            )}
            <span className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
              <span className="flex items-start justify-between text-[0.8125rem] text-paper/75">
                Let&apos;s Talk <span aria-hidden>✳</span>
              </span>
              <span className="flex items-end justify-between gap-2">
                <span>
                  <span className="block text-[0.9375rem] font-bold leading-tight">Dale Lance</span>
                  <span className="block text-xs text-paper/70">{site.roles[0]}</span>
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-paper text-ink">
                  <ArrowUpRight
                    size={15}
                    aria-hidden
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </span>
            </span>
          </a>
        </motion.div>

        {!wide && <PanelPortrait portrait={portrait} />}
      </div>

      {/* capability strip */}
      <div className="relative z-30 flex items-center bg-paper text-ink">
        <p className="relative z-10 shrink-0 bg-paper py-5 pl-5 pr-8 text-[0.75rem] font-semibold uppercase leading-tight md:pl-10">
          Working
          <br />
          across
        </p>
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((n) => (
              <ul key={n} aria-hidden={n === 1} className="flex shrink-0 items-center">
                {ticker.map((t) => (
                  <li
                    key={t}
                    className="whitespace-nowrap px-8 text-lg font-bold tracking-[-0.04em] text-ink/35 md:text-xl"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Thin white layout grid with plus marks at the intersections. */
function HeroGrid() {
  const cols = [0, 25, 50, 75, 100];
  const rows = [5.75, 28, 52, 76];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-5 inset-y-0 z-[5] md:inset-x-10">
      {cols.map((c) => (
        <span key={c} className="absolute inset-y-0 w-px bg-white/15" style={{ left: `${c}%` }} />
      ))}
      {rows.map((r, i) => (
        <span
          key={r}
          className="absolute -inset-x-10 h-px bg-white/15"
          style={i === 0 ? { top: `${r}rem` } : { top: `${r}%` }}
        />
      ))}
      {rows.map((r, i) =>
        cols.map((c) => (
          <span
            key={`${r}-${c}`}
            className="crosshair text-white"
            style={{
              left: `calc(${c}% - 8px)`,
              top: i === 0 ? `calc(${r}rem - 8px)` : `calc(${r}% - 8px)`,
              transform: "scale(0.7)",
            }}
          />
        )),
      )}
    </div>
  );
}

/**
 * Landscape studio photo: bleeds off the left edge of the hero and fades
 * into the orange background, so the subject faces the words on the right.
 */
function WidePortrait({ portrait }: { portrait: HeroImage }) {
  return (
    <motion.div
      className="relative z-10 order-last min-h-[380px] w-full lg:absolute lg:bottom-0 lg:left-0 lg:order-none lg:h-[min(76%,48vw)] lg:min-h-0 lg:w-auto lg:-translate-x-[13%]"
      style={{ aspectRatio: portrait.aspect ?? 1.5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.2, ease }}
    >
      <div className="hero-photo-mask absolute inset-0">
        <Image
          src={portrait.src}
          alt={`Portrait of ${site.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 75vw, 100vw"
          className="object-cover object-[45%_50%]"
        />
      </div>
    </motion.div>
  );
}

/** Cut-out or portrait-orientation image (or the empty slot). */
function PanelPortrait({ portrait }: { portrait: HeroImage | null }) {
  return (
    <motion.div
      className="relative z-10 order-last mx-auto mt-8 w-full max-w-[26rem] lg:absolute lg:bottom-0 lg:right-[6%] lg:mt-0 lg:w-[min(36vw,66vh)] lg:max-w-none"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, delay: 0.25, ease }}
    >
      <div className="relative aspect-[4/5]">
        {portrait ? (
          <Image
            src={portrait.src}
            alt={`Portrait of ${site.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 26rem"
            className={portrait.cutout ? "object-contain object-bottom" : "object-cover object-top"}
          />
        ) : (
          <div className="absolute inset-0 flex items-end justify-center border border-dashed border-white/50">
            <p className="label p-4 text-center text-paper/80">
              Portrait slot — add the hero image to public/images
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
