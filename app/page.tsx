import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  BriefcaseBusiness,
  Building2,
  Check,
  CircleDot,
  Code2,
  Database,
  Github,
  GraduationCap,
  HeartPulse,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Plane,
  Terminal,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { education, experience, focusAreas, profile, skillGroups } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-5 flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
        <span className="text-muted-foreground">{number}</span>
        <span className="h-px w-8 bg-primary/40" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          className="group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          href="#top"
          aria-label="Justin Angelo Perez, return to top"
        >
          <span className="flex size-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 font-mono text-sm font-bold tracking-tight text-primary transition-colors group-hover:bg-primary/20">
            JP.
          </span>
          <span className="hidden text-sm font-semibold leading-tight tracking-tight text-foreground sm:block">
            justin<span className="text-primary">.</span>dev
            <span className="mt-0.5 block font-mono text-[10px] font-normal tracking-[0.14em] text-muted-foreground">
              BACKEND ENGINEER
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a
              className="rounded-sm text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm" variant="outline" className="h-9 rounded-lg border-primary/25 bg-primary/5 px-3.5 text-primary hover:bg-primary/10 hover:text-primary sm:px-4">
          <a href={`mailto:${profile.email}`}>
            <span className="hidden sm:inline">Let&apos;s connect</span>
            <span className="sm:hidden">Contact</span>
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </Button>
      </div>
    </header>
  );
}

function CodeProfile() {
  return (
    <div className="relative mx-auto w-full max-w-[475px] lg:mr-0">
      <div className="absolute -inset-4 rounded-[2rem] bg-primary/[0.035] blur-3xl" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#101923] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.025] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-[#fa7a78]/80" />
            <span className="size-2.5 rounded-full bg-[#ffce73]/80" />
            <span className="size-2.5 rounded-full bg-[#7bddae]/80" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
            <Code2 className="size-3.5" aria-hidden="true" />
            profile.ts
          </div>
          <span className="w-11" aria-hidden="true" />
        </div>

        <div className="overflow-x-auto px-4 py-7 font-mono text-[12px] leading-[2.15] sm:px-7 sm:text-[13px]">
          <div className="whitespace-pre"><span className="mr-4 select-none text-[#526576]">01</span><span className="text-[#b8a7fb]">const</span> <span className="text-[#e9f2f8]">engineer</span> = {"{"}</div>
          <div className="whitespace-pre"><span className="mr-4 select-none text-[#526576]">02</span>  <span className="text-[#9db6ca]">name</span>: <span className="text-[#a8f5d1]">&quot;Justin Angelo Perez&quot;</span>,</div>
          <div className="whitespace-pre"><span className="mr-4 select-none text-[#526576]">03</span>  <span className="text-[#9db6ca]">role</span>: <span className="text-[#a8f5d1]">&quot;Backend Engineer&quot;</span>,</div>
          <div className="whitespace-pre"><span className="mr-4 select-none text-[#526576]">04</span>  <span className="text-[#9db6ca]">stack</span>: [</div>
          <div className="whitespace-pre"><span className="mr-4 select-none text-[#526576]">05</span>    <span className="text-[#a8f5d1]">&quot;PHP&quot;</span>, <span className="text-[#a8f5d1]">&quot;Laravel&quot;</span>,</div>
          <div className="whitespace-pre"><span className="mr-4 select-none text-[#526576]">06</span>    <span className="text-[#a8f5d1]">&quot;MySQL&quot;</span>, <span className="text-[#a8f5d1]">&quot;Node.js&quot;</span></div>
          <div className="whitespace-pre"><span className="mr-4 select-none text-[#526576]">07</span>  ],</div>
          <div className="whitespace-pre"><span className="mr-4 select-none text-[#526576]">08</span>  <span className="text-[#9db6ca]">location</span>: <span className="text-[#a8f5d1]">&quot;Abu Dhabi, UAE&quot;</span>,</div>
          <div className="whitespace-pre"><span className="mr-4 select-none text-[#526576]">09</span>  <span className="text-[#9db6ca]">focus</span>: <span className="text-[#a8f5d1]">&quot;Business applications&quot;</span></div>
          <div className="whitespace-pre"><span className="mr-4 select-none text-[#526576]">10</span>{"}"};</div>
        </div>

        <div className="flex items-center gap-2 border-t border-white/[0.08] bg-[#0c151e] px-6 py-4">
          <span className="flex size-6 items-center justify-center rounded-md bg-primary/10">
            <Check className="size-3.5 text-primary" aria-hidden="true" />
          </span>
          <span className="font-mono text-[11px] text-muted-foreground">Focused on practical, maintainable software.</span>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 hidden items-center gap-2 rounded-xl border border-primary/25 bg-[#12251f] px-4 py-3 text-xs font-medium text-primary shadow-2xl sm:flex lg:-left-8">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-25" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        Backend-first thinking
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-white/[0.07]">
      <div className="pointer-events-none absolute inset-0 grid-pattern" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-72 right-[-20%] -z-10 size-[750px] rounded-full bg-[radial-gradient(circle,rgba(47,126,112,0.18),transparent_65%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28 lg:grid-cols-[1.18fr_0.82fr] lg:gap-10 lg:pt-36">
        <div className="max-w-[650px]">
          <Badge variant="outline" className="mb-9 gap-2 border-primary/25 bg-primary/[0.06] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
            <CircleDot className="size-3" aria-hidden="true" />
            Backend Engineer · Abu Dhabi
          </Badge>
          <p className="mb-4 font-mono text-sm font-medium tracking-wide text-muted-foreground">
            Hi, I&apos;m <span className="text-primary">Justin Angelo Perez.</span>
          </p>
          <h1 className="max-w-[660px] text-[clamp(2.95rem,5.7vw,5.5rem)] font-semibold leading-[1.085] tracking-[-0.065em] text-foreground">
            Building the <span className="text-glow">backend</span> behind better business.
          </h1>
          <p className="mt-7 max-w-[540px] text-base leading-8 text-muted-foreground sm:text-[17px]">
            PHP &amp; Laravel developer building practical systems for real estate, travel,
            and healthcare — from API integrations to business-critical workflows.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-xl px-6 font-semibold">
              <a href={`mailto:${profile.email}`}>
                Get in touch
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-xl border-white/[0.13] bg-white/[0.025] px-6">
              <a href="#experience">
                View experience
                <ArrowDownRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary/75" aria-hidden="true" />
              Abu Dhabi, UAE
            </span>
            <span className="inline-flex items-center gap-2">
              <Layers3 className="size-4 text-primary/75" aria-hidden="true" />
              PHP · Laravel · MySQL
            </span>
          </div>
        </div>
        <CodeProfile />
      </div>

      <div className="relative border-t border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-7 px-5 py-7 sm:grid-cols-3 sm:px-8 sm:py-8">
          <div>
            <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">6<span className="text-primary">+</span></p>
            <p className="mt-1 text-xs text-muted-foreground">Years in software development</p>
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">03</p>
            <p className="mt-1 text-xs text-muted-foreground">Industries served</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Full stack<span className="text-primary">.</span></p>
            <p className="mt-1 text-xs text-muted-foreground">Backend-led web development</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading number="01" eyebrow="About me" title="Engineering with business context." />
        <div>
          <p className="text-lg leading-[1.95] text-[#d0dce6]">
            I&apos;m a software developer with <strong className="font-semibold text-foreground">over six years of experience</strong> building and maintaining web applications across real estate, travel, and healthcare.
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            {profile.summary.split("Work includes ")[1]}
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
              <Workflow className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">Application workflows</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Orders, inventory, accounting, and queueing systems.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
              <Blocks className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">System integrations</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Connecting services through third-party APIs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  const icons = [Building2, Plane, HeartPulse];
  return (
    <section id="expertise" className="border-y border-white/[0.07] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            number="02"
            eyebrow="What I've worked on"
            title="Software built around real workflows."
            description="Application areas drawn from professional work across three industries."
          />
          <p className="hidden shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:block">Selected experience / 03</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = icons[index];
            return (
              <Card key={area.title} className="group relative justify-between gap-0 overflow-hidden rounded-2xl border-white/[0.09] bg-[#101822] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-[#14202b]">
                <div>
                  <div className="mb-12 flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07]">
                      <Icon className="size-5 text-primary" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{area.number} / 03</span>
                  </div>
                  <h3 className="text-[21px] font-semibold leading-snug tracking-tight text-foreground">{area.title}</h3>
                  <p className="mt-4 min-h-28 text-sm leading-[1.8] text-muted-foreground">{area.description}</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.08] pt-6">
                  {area.tags.map((tag) => (
                    <Badge variant="outline" key={tag} className="rounded-md border-white/[0.09] bg-white/[0.035] px-2.5 py-1.5 font-normal text-[#b9cad6]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <SectionHeading
          number="03"
          eyebrow="Career"
          title="A track record of building and delivering."
          description="From healthcare and real estate software to travel systems and project coordination."
        />
        <Badge variant="outline" className="h-fit rounded-md border-primary/20 bg-primary/[0.05] px-3 py-2 font-mono text-[11px] text-primary">
          2018 — Present
        </Badge>
      </div>

      <div className="relative ml-2 border-l border-white/[0.12] pl-7 sm:ml-3 sm:pl-10">
        {experience.map((job, index) => (
          <article key={`${job.company}-${job.period}`} className="relative pb-12 last:pb-0">
            <span className={`absolute -left-[34px] top-2 size-3 rounded-full border-[3px] border-background ring-2 sm:-left-[46px] ${index === 0 ? "bg-primary ring-primary/70" : "bg-[#557b76] ring-[#557b76]/45"}`} aria-hidden="true" />
            <div className="grid items-start gap-5 lg:grid-cols-[190px_1fr] lg:gap-9">
              <div className="pt-0.5">
                <p className="font-mono text-xs leading-6 text-muted-foreground">{job.period}</p>
                {index === 0 && (
                  <Badge variant="outline" className="mt-2 border-primary/20 bg-primary/[0.055] text-primary">
                    Current role
                  </Badge>
                )}
              </div>
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-6 transition-colors hover:border-white/[0.14] sm:p-7">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{job.role}</h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {job.company}{job.location && <span className="font-normal text-muted-foreground"> · {job.location}</span>}
                </p>
                <ul className="mt-5 space-y-3">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary/75" aria-hidden="true" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const icons = [Terminal, Database, Code2, BriefcaseBusiness];

  return (
    <section id="skills" className="border-y border-white/[0.07] bg-[#0d141e]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading
            number="04"
            eyebrow="Technical toolkit"
            title="The tools behind the work."
            description="A practical stack spanning server-side development, relational databases, and modern web interfaces."
          />
          <div className="mt-10 inline-flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
              <Code2 className="size-4 text-primary" aria-hidden="true" />
            </span>
            <p className="text-sm text-muted-foreground">Primary focus: <strong className="font-semibold text-foreground">PHP &amp; Laravel</strong></p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <div className="rounded-2xl border border-white/[0.08] bg-[#111b26] p-6" key={group.title}>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/[0.07]">
                    <Icon className="size-5 text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold tracking-tight text-foreground">{group.title}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-md border border-white/[0.05] bg-white/[0.055] px-3 py-1.5 text-xs font-normal text-[#c2d2dc]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="flex flex-col justify-between gap-7 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 sm:flex-row sm:items-center sm:p-9">
        <div className="flex items-start gap-5">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.07]">
            <GraduationCap className="size-6 text-primary" aria-hidden="true" />
          </span>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">Education</p>
            <h2 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{education.degree}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{education.major}</p>
            <p className="mt-3 text-sm text-[#c2d0dc]">{education.university} · {education.location}</p>
          </div>
        </div>
        <span className="self-start rounded-md border border-white/[0.09] px-3 py-1.5 font-mono text-sm text-muted-foreground sm:self-auto">
          {education.year}
        </span>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 pb-16 pt-3 sm:px-8 sm:pb-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-primary/20 bg-[#12281f] px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
        <div className="pointer-events-none absolute -right-32 -top-40 size-[500px] rounded-full bg-[radial-gradient(circle,rgba(168,245,209,0.17),transparent_66%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 opacity-40 grid-pattern" aria-hidden="true" />
        <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary/80">05 / Get in touch</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.15] tracking-[-0.05em] text-[#e9fff5] sm:text-4xl lg:text-5xl">
              Have a role or a project in mind?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#aec9bd]">
              I&apos;d welcome a conversation about backend development, business applications, and the systems that support them.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#c2dfd2]">
              <a className="inline-flex items-center gap-2 transition-colors hover:text-white" href={`mailto:${profile.email}`}>
                <Mail className="size-4" aria-hidden="true" /> {profile.email}
              </a>
              <a className="inline-flex items-center gap-2 transition-colors hover:text-white" href={`tel:${profile.phoneHref}`}>
                <Phone className="size-4" aria-hidden="true" /> {profile.phone}
              </a>
            </div>
          </div>
          <Button asChild size="lg" className="h-12 w-fit rounded-xl bg-primary px-6 text-primary-foreground hover:bg-[#c5ffe3]">
            <a href={`mailto:${profile.email}?subject=Backend%20Engineering%20Opportunity`}>
              Send an email <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Justin Angelo Perez. Built with Next.js &amp; shadcn/ui.</p>
        <div className="flex items-center gap-6">
          <a
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Justin Angelo Perez on GitHub (opens in new tab)"
          >
            <Github className="size-4" aria-hidden="true" /> GitHub
            <ArrowUpRight className="size-3" aria-hidden="true" />
          </a>
          <a className="inline-flex items-center gap-2 transition-colors hover:text-primary" href="#top">
            Back to top <ArrowRight className="size-3 -rotate-90" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:translate-y-0"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
