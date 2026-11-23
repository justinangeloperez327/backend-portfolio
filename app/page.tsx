import {
  ArrowDown,
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
  primarySkills,
  quickFacts,
  skillGroups,
} from "@/data/portfolio";

const projectIds = new Set<string>(caseStudies.map((project) => project.id));

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
          <div className="hero-layout">
            <div className="hero-intro">
              <p className="hero-role" data-animate="hero">{profile.title}</p>
              <h1 id="hero-title" data-animate="hero">{profile.name}</h1>
              <h2 className="hero-tagline" data-animate="hero">
                Building the systems behind everyday business operations.
              </h2>
              <p className="hero-description" data-animate="hero">
                I develop backend software for travel, real estate, and healthcare, integrating external APIs and building practical business workflows.
              </p>
              <div className="hero-actions" data-animate="hero">
                <Button asChild size="lg">
                  <a href="#projects">
                    View Projects <ArrowDown aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#contact">
                    Contact Me <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <div className="hero-tags" data-animate="hero" aria-label="Specialties">
                <span className="hero-tag hero-tag-accent">PHP</span>
                <span className="hero-tag hero-tag-accent">Laravel</span>
                <span className="hero-tag">API integrations</span>
                <span className="hero-tag">Workflow systems</span>
              </div>
              <p className="hero-location" data-animate="hero">
                {profile.location} <span aria-hidden="true">/</span> Open to backend roles
              </p>
            </div>
            <div className="hero-showcase" data-animate="hero">
              <div className="hero-code-card">
                <div className="hero-code-header">
                  <span className="hero-window-dots" aria-hidden="true"><i /><i /><i /></span>
                  <span>Justin.php</span>
                </div>
                <pre className="hero-code"><code>
                  <span className="code-comment">{"// Backend engineer based in Abu Dhabi"}</span>{"\n"}
                  <span className="code-green">class</span> <span className="code-white">Justin</span> <span className="code-green">extends</span> <span className="code-white">Developer</span>{"\n"}
                  {"{"}{"\n"}
                  {"  "}<span className="code-green">protected array</span> <span className="code-white">$stack</span> = [<span className="code-white">{"'PHP'"}</span>, <span className="code-white">{"'Laravel'"}</span>, <span className="code-white">{"'MySQL'"}</span>];{"\n"}
                  {"\n"}
                  {"  "}<span className="code-green">public function</span> <span className="code-white">handle</span>(<span className="code-white">Requirements</span> <span className="code-white">$brief</span>): <span className="code-white">Software</span>{"\n"}
                  {"  {"}{"\n"}
                  {"    "}<span className="code-green">return</span> <span className="code-white">$this-&gt;understand</span>(<span className="code-white">$brief</span>){"\n"}
                  {"      "}-&gt;<span className="code-white">design</span>(){"\n"}
                  {"      "}-&gt;<span className="code-white">build</span>(){"\n"}
                  {"      "}-&gt;<span className="code-white">ship</span>();{"\n"}
                  {"  }"}{"\n"}
                  {"}"}
                </code></pre>
              </div>
              <div className="hero-stats">
                <div className="hero-stat-card"><strong>4</strong><span>industries: healthcare, real estate, travel, construction</span></div>
                <div className="hero-stat-card"><strong>7+</strong><span>years building backends</span></div>
                <div className="hero-stat-card"><strong>6+</strong><span>integrations in production</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-band about-section" aria-labelledby="about-heading">
          <div className="container section-split">
            <div className="section-intro" data-animate="reveal">
              <p className="section-index">api/about</p>
              <h2 id="about-heading">About</h2>
              <dl className="about-quick-facts">
                {quickFacts.map((fact) => (
                  <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
                ))}
              </dl>
            </div>
            <div className="about-content">
              <div className="about-copy" data-animate="reveal">
                {introduction.about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
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
                      <ul className="skill-tags" aria-label={group.title + " technologies"}>
                        {group.skills.map((skill) => (
                          <li key={skill} className={"skill-tag" + (primarySkills.includes(skill) ? " skill-tag-primary" : "")}>
                            {skill}
                          </li>
                        ))}
                      </ul>
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
              <p className="section-index">api/experience</p>
              <h2 id="experience-heading">Experience</h2>
              <p>Building software and coordinating the processes around it.</p>
            </div>
            <ol className="timeline">
              {experience.map((job) => (
                <li key={job.company + job.period} data-animate="reveal">
                  <div className="job-period">
                    <span>{job.period}</span>
                    {job.period.endsWith("Present") && <span className="current-role">Current role</span>}
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
                  {projectIds.has(job.company.toLowerCase()) && (
                    <a
                      className="text-link"
                      href={"#" + job.company.toLowerCase()}
                      aria-label={"View related project: " + job.company}
                    >
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
              <p className="section-index">api/projects</p>
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
            <p className="section-index">api/contact</p>
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
