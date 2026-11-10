import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { about, areas, capabilities, experience, nav, site, technologies, venture } from "@/lib/site";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { LightTrails } from "./LightTrails";
import { AreaCover } from "./AreaCover";
import { Reveal, RiseLines } from "./Reveal";
import { Chip, CtaLink } from "./Ui";

const shell = "relative mx-auto w-full max-w-[1680px] px-5 md:px-10";
const muted = "text-ink/35";

/* ————————————————— ABOUT ————————————————— */

export function About() {
  const facts = [
    {
      label: "Education",
      big: "BSIT",
      text: `${about.education.degree} — ${about.education.school}, ${about.education.place}.`,
    },
    { label: "Certification", big: "LSS", text: `${about.certification}.` },
    {
      label: "Disciplines",
      big: "03",
      text: "Product, systems, and operations — practised as one discipline.",
    },
  ];

  return (
    <section id="about" className="relative bg-paper py-24 text-ink md:py-36">
      <div className={shell}>
        <Chip>Idea to operation.</Chip>
        <Reveal className="mt-6">
          <h2 className="display max-w-[20ch] text-[clamp(2rem,5.6vw,6rem)]">
            I turn ideas into functional, <span className={muted}>scalable systems.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08} className="flex min-h-[15rem] flex-col bg-white p-6">
              <p className="flex items-center gap-2 text-[0.75rem] font-semibold uppercase">
                <span aria-hidden className="text-orange">
                  ✳
                </span>
                {f.label}
              </p>
              <p className="mt-auto text-[3.75rem] font-bold leading-none tracking-[-0.06em]">{f.big}</p>
              <p className="mt-4 max-w-xs text-sm leading-snug text-ink/60">{f.text}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-2xl font-semibold leading-snug tracking-[-0.03em] md:text-[1.75rem]">
              {about.statement}
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-ink/70">
              {about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7">
            <Chip>What the work covers</Chip>
            <ol className="mt-5 border-b border-ink/15">
              {about.areas.map((a, i) => (
                <li key={a}>
                  <Reveal
                    delay={(i % 3) * 0.05}
                    y={14}
                    className="flex items-baseline gap-5 border-t border-ink/15 py-3.5"
                  >
                    <span className="text-xs font-semibold text-orange">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-lg font-semibold leading-snug tracking-[-0.02em]">{a}</span>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— EXPERIENCE ————————————————— */

export function Experience() {
  return (
    <section id="experience" className="atmosphere relative overflow-hidden py-24 text-paper md:py-36">
      <LightTrails />

      <div className={shell}>
        <Chip dark>Career journey</Chip>
        <h2 className="display mt-6 text-[clamp(2.75rem,10.5vw,11.5rem)]">
          <RiseLines lines={["Experience"]} />
        </h2>

        <div className="mt-14 md:mt-20">
          <ExperienceTimeline roles={experience} />

          {/* foundation */}
          <Reveal>
            <div className="mt-10 grid gap-x-10 gap-y-6 border-y border-paper/25 py-10 lg:grid-cols-12">
              <p className="label text-paper/70 lg:col-span-3">Foundation</p>
              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-9">
                <div>
                  <p className="label text-orange-hi">Education</p>
                  <p className="mt-2 text-xl font-semibold leading-snug tracking-[-0.02em]">
                    {about.education.degree}
                  </p>
                  <p className="text-paper/65">
                    {about.education.school}, {about.education.place}
                  </p>
                </div>
                <div>
                  <p className="label text-orange-hi">Certification</p>
                  <p className="mt-2 text-xl font-semibold leading-snug tracking-[-0.02em]">
                    {about.certification}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ————————————————— WORK ————————————————— */

export function Work() {
  return (
    <section id="work" className="relative bg-paper py-24 text-ink md:py-36">
      <div className={shell}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Chip>What I do</Chip>
            <h2 className="display mt-6 text-[clamp(2.5rem,9.2vw,10.5rem)]">
              <RiseLines
                lines={[
                  <>
                    Areas of <span className={muted}>work.</span>
                  </>,
                ]}
              />
            </h2>
          </div>
          <p className="pb-2 text-sm font-semibold uppercase text-ink/50">
            ({String(areas.length).padStart(2, "0")}) Capability areas
          </p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-14 md:mt-20 md:grid-cols-2">
          {areas.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 2) * 0.1}>
              <article className="group">
                <div className="relative overflow-hidden">
                  <AreaCover
                    slug={a.slug}
                    className="aspect-[8/4.6] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-3 top-3 bg-paper px-2.5 py-1.5 text-[0.6875rem] font-semibold uppercase text-ink">
                    <span aria-hidden className="mr-1.5 text-orange">
                      ✳
                    </span>
                    Area /{a.index}
                  </span>
                </div>
                <h3 className="display mt-5 text-[clamp(1.5rem,2.6vw,2.6rem)] leading-[0.95]">{a.title}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-ink/70">{a.summary}</p>
                <ul className="mt-5 border-b border-ink/15">
                  {a.points.map((p, n) => (
                    <li key={p} className="flex items-baseline gap-5 border-t border-ink/15 py-3">
                      <span className="text-xs font-semibold text-orange">{String(n + 1).padStart(2, "0")}</span>
                      <span className="font-semibold leading-snug tracking-[-0.02em]">{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 grid gap-x-10 gap-y-5 bg-white p-6 md:p-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Chip>{venture.status}</Chip>
            <p className="display mt-5 text-[clamp(2rem,4.4vw,4.5rem)]">{venture.name}</p>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-ink/70 lg:col-span-7">{venture.summary}</p>
        </Reveal>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink/50">
          Details of employer and client work are confidential. This section describes capabilities and
          experience, not specific products or systems.
        </p>
      </div>
    </section>
  );
}

/* ————————————————— CAPABILITIES ————————————————— */

export function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-ink py-24 text-paper md:py-36">
      <div className={shell}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Chip dark>Skills &amp; capabilities</Chip>
            <h2 className="display mt-6 text-[clamp(1.9rem,7vw,8rem)]">
              <RiseLines
                lines={[
                  <>
                    Core <span className="text-paper/35">capabilities.</span>
                  </>,
                ]}
              />
            </h2>
          </div>
          <p className="max-w-sm text-lg leading-snug text-paper/65 lg:col-span-4 lg:pb-3">
            Four disciplines, one practice: understand the business problem, architect the system, build the
            product, run the operation.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="group flex flex-col bg-white/[0.05] p-6">
              <div className="flex items-start justify-between">
                <span
                  aria-hidden
                  className="flex h-12 w-12 items-center justify-center bg-white/[0.07] text-xl text-paper/50 transition-colors duration-500 group-hover:bg-orange group-hover:text-paper"
                >
                  ✳
                </span>
                <span className="text-sm font-semibold text-paper/40">/{c.index}</span>
              </div>
              <h3 className="display mt-10 text-[1.6rem] leading-[0.95]">{c.title}</h3>
              <ul className="mt-6 border-b border-white/12">
                {c.items.map((item) => (
                  <li key={item} className="border-t border-white/12 py-2.5 text-[0.9375rem] text-paper/75">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-4 grid gap-x-10 gap-y-5 bg-white/[0.05] p-6 lg:grid-cols-12 lg:items-center">
          <p className="text-sm font-semibold uppercase text-paper/50 lg:col-span-3">
            <span aria-hidden className="mr-2 text-orange">
              ✳
            </span>
            Technologies
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 lg:col-span-9">
            {technologies.map((t) => (
              <li key={t} className="text-xl font-bold tracking-[-0.04em] text-paper/80 md:text-2xl">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ————————————————— CONTACT ————————————————— */

export function Contact() {
  return (
    <section id="contact" className="atmosphere relative overflow-hidden px-3 py-16 md:px-10 md:py-28">
      <LightTrails flip />

      <div className="relative mx-auto max-w-[1400px] bg-paper p-6 text-ink sm:p-10 lg:p-14">
        <p className="text-sm font-bold uppercase tracking-[-0.02em]">{site.name}</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <h2 className="display text-[clamp(2.3rem,8.4vw,9rem)]">
            <RiseLines
              lines={[
                "Let’s build",
                "something",
                <span key="l3" className={muted}>
                  that works.
                </span>,
              ]}
            />
          </h2>
          <p className="pb-2 text-lg font-bold tracking-[-0.04em]">
            ©2026 <span className="ml-1 text-xs font-medium tracking-normal text-ink/50">[Email or WhatsApp]</span>
          </p>
        </div>

        <Reveal className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-2">
          <div>
            <Chip>Ready to start?</Chip>
            <p className="display mt-5 text-[clamp(2rem,4vw,3.75rem)]">
              Get in
              <br />
              touch
            </p>
            <p className="mt-5 max-w-sm leading-relaxed text-ink/65">
              Have a product to build, a system to design, or an operation that needs to run better? Email is
              or WhatsApp is the best way to reach me.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaLink href={`mailto:${site.email}`} tone="fog">
                Send an email
              </CtaLink>
              <CtaLink href={site.whatsapp} tone="dark" external>
                WhatsApp me
              </CtaLink>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Email:", value: "Send an email", href: `mailto:${site.email}`, external: false },
              { label: "WhatsApp:", value: "Start a chat", href: site.whatsapp, external: true },
            ].map((t) => (
              <a
                key={t.label}
                href={t.href}
                {...(t.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex min-h-[12rem] flex-col justify-between bg-fog p-5 transition-colors hover:bg-ink hover:text-paper"
              >
                <span className="text-sm opacity-60">{t.label}</span>
                <span className="flex items-center justify-between text-[1.0625rem] font-bold uppercase tracking-[-0.03em]">
                  {t.value}
                  <ArrowUpRight
                    size={18}
                    aria-hidden
                    className="text-orange transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ————————————————— FOOTER ————————————————— */

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-fog pt-14 text-ink">
      <div className={shell}>
        <div className="grid gap-10 pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="max-w-sm text-lg font-semibold leading-snug tracking-[-0.02em]">{site.positioning}</p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <p className="text-sm text-ink/50">Navigation</p>
            <ul className="mt-3 space-y-1.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-line pb-0.5 font-semibold">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:col-span-3">
            <p className="text-sm text-ink/50">Contact</p>
            <ul className="mt-3 space-y-1.5">
              {[
                { label: "Email", href: `mailto:${site.email}`, external: false },
                { label: "WhatsApp", href: site.whatsapp, external: true },
              ].map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="link-line inline-flex items-center gap-1.5 pb-0.5 font-semibold"
                  >
                    {c.label} <ArrowUpRight size={14} aria-hidden className="shrink-0 text-orange" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-ink/15 py-5 text-sm font-semibold">
          <span>©2026 {site.name}</span>
          <Link href="/#top" className="flex items-center gap-2 transition-colors hover:text-orange">
            Back to top <ArrowUp size={14} aria-hidden />
          </Link>
        </div>
      </div>

      <p
        aria-hidden
        className="display pointer-events-none -mb-[0.1em] select-none whitespace-nowrap text-center text-[15.4vw] leading-[0.8]"
      >
        {site.name}
      </p>
    </footer>
  );
}
