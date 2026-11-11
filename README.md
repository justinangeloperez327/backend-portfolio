# Backend Portfolio

A responsive portfolio for **Justin Angelo Perez**, a backend engineer focused on PHP, Laravel, relational databases, and business application development.

## Tech stack

- **Next.js 16** with the App Router and TypeScript
- **React 19**
- **Tailwind CSS 4**
- **shadcn/ui** components (new-york style)
- **Lucide** icons

The application is a static, content-driven personal portfolio. No database, API keys, or external services are required.

## Getting started

Use **Node.js 24** (`nvm use`).

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
app/
  globals.css        # Theme tokens, Tailwind styles, visual utilities
  layout.tsx          # Root layout and SEO metadata
  page.tsx            # Portfolio landing page
components/
  ui/                 # shadcn/ui primitives
data/
  portfolio.ts        # Single source of truth for resume information
lib/
  utils.ts            # Tailwind class merging helper
public/
  favicon.svg
```

## Editing content

Update `data/portfolio.ts` to change the professional summary, case studies, conceptual integration workflow, technical skills, employment history, and education. Edit `app/page.tsx` to change page layout or sections.

The shadcn/ui CLI is configured via `components.json`. You can add components with:

```bash
npx shadcn@latest add <component-name>
```

## Deployment

Deploy using a standard Next.js host such as Vercel, or run `npm run build && npm run start` on your own Node.js server. No automatic deployment workflow is configured.

## Content

Career details are based on the supplied resume. Case studies describe verified contributions; the travel diagram is explicitly conceptual, and no fabricated project metrics or confidential client data are included.
