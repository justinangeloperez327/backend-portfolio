import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/portfolio/header";
import { Workflow } from "@/components/portfolio/workflow";
import {
  caseStudies,
  education,
  experience,
  profile,
  introduction,
  skillGroups,
} from "@/data/portfolio";

function SectionTitle({
  label,
  title,
  description,
  nested = false,
}: {
  label: string;
  title: string;
  description?: string;
  nested?: boolean;
}) {
  return (
    <div className="section-title">
      <p className="eyebrow">{label}</p>
      {nested ? <h3>{title}</h3> : <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section id="top" className="hero container">
          <div className="hero-intro">
            <p className="hero-role">{profile.title}</p>
            <h1>{profile.name}</h1>
            <p className="hero-description">{introduction.description}</p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#projects">
                  View projects <ArrowDownRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub profile (opens in a new tab)"
                >
                  <Github aria-hidden="true" /> GitHub{" "}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="section section-tinted">
            <div className="container about-layout">
              <SectionTitle
                label="About"
                title="Understanding the workflow comes first."
              />
              <div className="about-copy">
                {introduction.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <div className="education">
                  <p className="eyebrow">Education</p>
                  <h3>{education.degree}</h3>
                  <p>{education.major}</p>
                  <p>
                    {education.university} · {education.year}
                    <br />
                    {education.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="experience" className="section section-tinted">
            <div className="container experience-layout">
              <SectionTitle
                label="Experience"
                nested
                title="Development, with operational perspective."
                description="A career spanning business software, technical support, and project coordination."
              />
              <ol className="timeline">
                {experience.map((job, index) => (
                  <li key={`${job.company}-${job.period}`}>
                    <p className="job-period">
                      {job.period}
                      {index === 0 && <span>Current role</span>}
                    </p>
                    <h4>{job.role}</h4>
                    <p className="job-company">
                      {job.company}
                      {job.location && <span> · {job.location}</span>}
                    </p>
                    <p className="job-summary">{job.highlights[0]}</p>
                    {job.company === "REDHQ" && (
                      <a className="text-link" href="#redhq">
                        Explore the work{" "}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                    {job.company === "SKYUNITECH" && (
                      <a className="text-link" href="#skyunitech">
                        Explore the integrations{" "}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                    {job.company === "BGHMC" && (
                      <a className="text-link" href="#bghmc">
                        Explore the systems{" "}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div id="capabilities" className="section container">
            <SectionTitle
              label="Technical capabilities"
              nested
              title="A practical toolkit. Connected to the work."
              description="A foundation in server-side development, with the tools to support the complete application."
            />
            <div className="capabilities">
              {skillGroups.map((group) => (
                <article key={group.title} className="capability">
                  <h4>{group.title}</h4>
                  <p>{group.skills.join(" · ")}</p>
                  <a className="text-link" href={group.href}>
                    {group.evidence}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="section container">
          <div className="section-heading-row">
            <SectionTitle
              label="Projects"
              title="Built around the way people work."
              description="Contributions to business applications across three industries."
            />
            <span className="section-aside">
              Real estate · Travel · Healthcare
            </span>
          </div>
          <div className="case-studies">
            {caseStudies.map((study) => (
              <article id={study.id} key={study.id} className="case-study">
                <div className="case-overview">
                  <p className="eyebrow">
                    {study.company} <span>/ {study.domain}</span>
                  </p>
                  <h3>{study.title}</h3>
                  <div className="tag-list">
                    {study.tags.map((tag) => (
                      <Badge variant="outline" key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="professional-label">Professional experience</p>
                </div>
                <div className="case-details">
                  <div>
                    <h4>Business need</h4>
                    <p>{study.problem}</p>
                  </div>
                  <div>
                    <h4>My contribution</h4>
                    <p>{study.contribution}</p>
                  </div>
                  <div className="case-outcome">
                    <h4>Delivered work</h4>
                    <p>{study.outcome}</p>
                  </div>
                  {study.id === "skyunitech" && <Workflow />}
                </div>
                <div className="case-scope">
                  <span className="technical-label">Application scope</span>
                  <ul>
                    {study.scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="section container contact">
          <p className="eyebrow">Contact</p>
          <h2>
            Let’s talk about the
            <br />
            systems you’re building.
          </h2>
          <p>
            Have a backend engineering opportunity or a business application in
            mind? I’d welcome a conversation.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="contact-links">
            <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight size={16} aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} aria-hidden="true" />
              Send an email
            </a>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top">
          Back to top{" "}
          <ArrowRight size={16} className="-rotate-90" aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
