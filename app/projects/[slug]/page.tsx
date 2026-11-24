import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { CurrentYear } from "@/components/portfolio/current-year";
import { Header } from "@/components/portfolio/header";
import { ProjectGallery } from "@/components/portfolio/project-gallery";
import { caseStudies, profile } from "@/data/portfolio";
import { getProjectImages } from "@/lib/project-images";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return caseStudies.map((project) => ({ slug: project.id }));
}

function findProject(slug: string) {
  return caseStudies.find((project) => project.id === slug);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title + " | " + profile.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const project = findProject((await params).slug);
  if (!project) notFound();

  const images = getProjectImages(project.id, project.name);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main" className="container project-page">
        <Link className="text-link project-back" href="/#projects">
          <ArrowLeft size={15} aria-hidden="true" /> All projects
        </Link>

        <header className="project-page-header">
          <p className="section-index">api/projects/{project.id}</p>
          <h1>{project.title}</h1>
          <p className="project-client">{project.client}</p>
        </header>

        <div className="project-page-body">
          <div>
            <p className="project-description">{project.description}</p>
            <h2>What I worked on</h2>
            <ul className="project-highlights">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <aside className="project-page-meta">
            <h2>Tech stack</h2>
            <ul className="skill-tags" aria-label={project.name + " technology stack"}>
              {project.techStack.map((tech) => (
                <li key={tech} className="skill-tag">{tech}</li>
              ))}
            </ul>
            {"link" in project && project.link && (
              <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">
                Visit {project.name} <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
          </aside>
        </div>

        {images.length > 0 && (
          <section className="project-gallery" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading">Screenshots</h2>
            <ProjectGallery images={images} />
          </section>
        )}
      </main>

      <footer className="container footer">
        <p>© <CurrentYear fallback={new Date().getFullYear()} /> {profile.name}</p>
        <Link href="/#projects">Back to projects</Link>
      </footer>
    </>
  );
}
