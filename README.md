# Backend Portfolio

The personal portfolio of **Justin Angelo Perez**, a backend engineer focused on Laravel, PHP, API integrations, databases, and software for day-to-day business operations.

## Design

- Near-black charcoal (`#090C10`) with restrained emerald (`#34D399`) accents
- Space Grotesk headings and Inter body typography
- Four navigation sections: About, Experience, Projects, Contact, with API-inspired section labels (`api/about`, `api/experience`, `api/projects`, `api/contact`)
- Minimal hero with the portfolio owner's name and **Backend Engineer** as the prominent headline
- Minimal project cards showing names, implemented functionality, and confirmed technology stacks
- GSAP hero and ScrollTrigger reveal animations that run once and respect reduced-motion settings

The site deliberately avoids code snippets, architecture diagrams, and decorative visualizations. Existing project and career content is maintained in `data/portfolio.ts`.

## Stack

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS 4 and shadcn/ui primitives
- GSAP 3 + ScrollTrigger
- Lucide icons

## Development

Use Node.js 24 (`.nvmrc`).

```bash
npm ci
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run typecheck
npm run build
```

GitHub Actions runs these checks on pushes to `main` and pull requests.

## Project structure

```text
app/
  globals.css                 # Theme, layout, and responsive styles
  layout.tsx                  # Fonts and SEO metadata
  page.tsx                    # Four-section landing page
components/
  portfolio/header.tsx        # Responsive navigation and active-section indicator
  portfolio/motion.tsx        # GSAP animations with cleanup and reduced-motion support
  ui/                         # Shared button and other UI primitives
data/
  portfolio.ts                # Career history, projects, skills, and contact details
```

To update project copy, confirmed tech stacks, employment, or contact details, edit `data/portfolio.ts`. Keep existing projects unless explicitly removing them.

## Deployment

Deploy manually to any supported Next.js host (including Vercel). No automatic Vercel deployment workflow is configured.
