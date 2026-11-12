import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/portfolio/header";
import { PortfolioMotion } from "@/components/portfolio/motion";
import {
  caseStudies,
  education,
  experience,
  profile,
  introduction,
  skillGroups,
} from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <PortfolioMotion />
      <main id="main">
        <section id="top" className="hero container" aria-labelledby="hero-title">
          <div className="hero-intro">
            <p className="hero-role" data-animate="hero">{profile.title}</p>
            <h1 id="hero-title" data-animate="hero">{profile.name}</h1>
            <p className="hero-statement" data-animate="hero">
              I build the systems behind everyday business operations.
            </p>
            <p className="hero-summary" data-animate="hero">
              From travel supplier integrations to real estate platforms and
              hospital workflows, I develop practical backend-driven software.
            </p>
            <div className="hero-actions" data-animate="hero">
              <Button asChild size="lg">
                <a href="#projects">
                  View Projects <ArrowDownRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">
                  Contact Me <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
            </div>
            <p className="hero-location" data-animate="hero">
              {profile.location} <span aria-hidden="true">/</span> {profile.specialty}
            </p>
          </div>
        </section>

        <section id="about" className="section section-band" aria-labelledby="about-heading">
          <div className="container section-split">
            <div className="section-intro" data-animate="reveal">
              <p className="section-index">01 / About</p>
              <h2 id="about-heading">About</h2>
            </div>
            <div className="about-content">
              <div className="about-copy" data-animate="reveal">
                {introduction.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="education" data-animate="reveal">
                <p className="section-detail">Education</p>
                <h3>{education.degree}</h3>
                <p>{education.major}</p>
                <p>{education.university} · {education.year} · {education.location}</p>
              </div>
              <div className="skills-block" data-animate="reveal">
                <h3>Technical focus</h3>
                <div className="capabilities">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="capability">
                      <h4>{group.title}</h4>
                      <p>{group.skills.join(" · ")}</p>
                      <a className="text-link" href={group.href}>
                        {group.evidence} <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-heading">
          <div className="container section-split">
            <div className="section-intro" data-animate="reveal">
              <p className="section-index">02 / Experience</p>
              <h2 id="experience-heading">Experience</h2>
              <p>Building software and coordinating the processes around it.</p>
            </div>
            <ol className="timeline">
              {experience.map((job, index) => (
                <li key={job.company + job.period} data-animate="reveal">
                  <div className="job-period">
                    <span>{job.period}</span>
                    {index === 0 && <span className="current-role">Current role</span>}
                  </div>
                  <h3>{job.role}</h3>
                  <p className="job-company">
                    {job.company}{job.location && <span> · {job.location}</span>}
                  </p>
                  <ul className="job-highlights">
                    {job.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  {(["REDHQ", "SKYUNITECH", "BGHMC"] as string[]).includes(job.company) && (
                    <a className="text-link" href={"#" + job.company.toLowerCase()}>
                      View related project <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projects" className="section section-band" aria-labelledby="projects-heading">
          <div className="container">
            <div className="section-intro projects-intro" data-animate="reveal">
              <p className="section-index">03 / Projects</p>
              <h2 id="projects-heading">Projects</h2>
            </div>
            <div className="project-list">
              {caseStudies.map((project) => (
                <article id={project.id} key={project.id} className="project-card" data-animate="reveal">
                  <h3>{project.name}</h3>
                  <div className="project-content">
                    <p className="project-description">{project.description}</p>
                    <p className="project-tech" aria-label={project.name + " technology stack"}>
                      {project.techStack.join(" · ")}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact" aria-labelledby="contact-heading">
          <div data-animate="reveal">
            <p className="section-index">04 / Contact</p>
            <h2 id="contact-heading">Let&apos;s build something useful.</h2>
            <p className="contact-copy">
              Interested in working together on backend systems or business applications?
              Get in touch.
            </p>
            <a className="contact-email" href={"mailto:" + profile.email}>
              {profile.email} <ArrowUpRight aria-hidden="true" />
            </a>
            <div className="contact-links">
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <Github size={17} aria-hidden="true" /> GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={"mailto:" + profile.email}>
                <Mail size={17} aria-hidden="true" /> Email
              </a>
              <a href={"tel:" + profile.phoneHref}>{profile.phone}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Back to top <ArrowRight size={16} className="-rotate-90" aria-hidden="true" /></a>
      </footer>
    </>
  );
}
