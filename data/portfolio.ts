export const profile = {
  name: "Justin Angelo Perez",
  title: "Backend Engineer",
  specialty: "PHP & Laravel",
  location: "Abu Dhabi, UAE",
  email: "justinangeloperez327@gmail.com",
  phone: "0523472306",
  phoneHref: "+971523472306",
  github: "https://github.com/justinangeloperez327",
  summary:
    "Software developer with over six years of professional development experience building business applications across real estate, travel, and healthcare. Experienced in PHP, Laravel, MySQL, third-party API integration, and dashboard development. Work includes property listings, order management, accounting, procurement, inventory, and queuing systems. Combines development experience with practical knowledge of operational workflows, project documentation, and stakeholder coordination.",
} as const;

export const caseStudies = [
  {
    id: "redhq",
    company: "REDHQ",
    domain: "Real estate",
    title: "The software behind property operations.",
    problem:
      "Support an Australian real estate business with property listings, order management, accounting functionality, and application dashboards.",
    contribution:
      "Developed and maintained web applications, built listing, order, and accounting features, and took responsibility for the application dashboard. Integrated third-party services where required.",
    outcome:
      "Delivered application functionality supporting the business’s property and administrative workflows.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
    scope: [
      "Property listings",
      "Order management",
      "Accounting",
      "Dashboards",
    ],
  },
  {
    id: "skyunitech",
    company: "SKYUNITECH",
    domain: "Travel",
    title: "Connecting travel services to one application.",
    problem:
      "Connect external travel services with a travel agency web application.",
    contribution:
      "Developed application features and integrated Hotelbeds, Expedia, Travelport, and Nirvana APIs to connect external travel services with the application.",
    outcome:
      "Connected external provider services with travel application functionality.",
    tags: ["Third-party APIs", "Travel integrations"],
    scope: ["Hotelbeds", "Expedia", "Travelport", "Nirvana"],
  },
  {
    id: "bghmc",
    company: "BGHMC",
    domain: "Healthcare",
    title: "Supporting everyday hospital operations.",
    problem:
      "Support hospital procurement, inventory management, and patient queuing workflows with software.",
    contribution:
      "Contributed to procurement, inventory, and queuing systems. Also provided hardware and software support, troubleshooting desktops and laptops used by hospital staff.",
    outcome:
      "Contributed software functionality and technical support for hospital operations.",
    tags: ["Business applications", "Technical support"],
    scope: ["Procurement", "Inventory", "Patient queuing"],
  },
] as const;

export const integrationWorkflow = {
  label: "Travel service integration",
  application: "Travel agency application",
  applicationNote: "Application features developed at SKYUNITECH",
  connection: "Third-party API integrations",
  contribution:
    "My contribution: application features and provider integrations.",
  providers: ["Hotelbeds", "Expedia", "Travelport", "Nirvana"],
  caption:
    "Conceptual workflow based on professional experience. Shows service relationships, not internal architecture or a live system.",
} as const;

export const skillGroups = [
  {
    title: "Backend development",
    skills: ["PHP", "Laravel", "Node.js"],
    href: "#redhq",
    evidence: "Real estate applications",
  },
  {
    title: "Relational databases",
    skills: ["MySQL", "Microsoft SQL Server", "SQL"],
    href: "#redhq",
    evidence: "Business application development",
  },
  {
    title: "Service integrations",
    skills: [
      "Third-party APIs",
      "Hotelbeds",
      "Expedia",
      "Travelport",
      "Nirvana",
    ],
    href: "#skyunitech",
    evidence: "Travel service integrations",
  },
  {
    title: "Frontend support",
    skills: ["JavaScript", "HTML", "CSS", "React.js", "Next.js", "Vue.js"],
    href: "#redhq",
    evidence: "Application interfaces and dashboards",
  },
  {
    title: "Development tools",
    skills: ["Git", "GitHub"],
    href: "https://github.com/justinangeloperez327",
    evidence: "Browse repositories",
  },
] as const;

export const experience = [
  {
    role: "Project Coordinator",
    company: "Giffin Al Jazira Metal Industries LLC",
    location: "Abu Dhabi, UAE",
    period: "Apr 2026 — Present",
    highlights: [
      "Coordinate site progress, material requisitions, and outstanding actions with the Project Manager and site teams.",
      "Prepare daily progress reports, respond to consultant correspondence, and maintain project documentation.",
    ],
  },
  {
    role: "Software Developer",
    company: "SKYUNITECH",
    location: "",
    period: "Oct 2025 — Jan 2026",
    highlights: [
      "Developed features for a travel agency web application.",
      "Integrated Hotelbeds, Expedia, Travelport, and Nirvana APIs to connect external travel services with the application.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "REDHQ",
    location: "",
    period: "Feb 2021 — Jun 2025",
    highlights: [
      "Developed web applications for an Australian real estate business using PHP, Laravel, MySQL, JavaScript, HTML, and CSS.",
      "Built property listing, order management, and accounting functionality to support business operations.",
      "Developed and maintained the application dashboard.",
      "Integrated third-party APIs to connect external services with application functionality.",
    ],
  },
  {
    role: "Software Developer",
    company: "Dhalogiq",
    location: "",
    period: "Mar 2020 — Feb 2021",
    highlights: [
      "Supported REDHQ as an assigned software developer, contributing to its web applications before transitioning to direct employment with the client.",
    ],
  },
  {
    role: "Software Developer",
    company: "BGHMC",
    location: "",
    period: "Dec 2018 — Feb 2020",
    highlights: [
      "Contributed to the development of procurement, inventory management, and queuing systems supporting hospital operations.",
      "Troubleshot desktop computers and laptops, providing hardware and software support to staff.",
    ],
  },
] as const;

export const education = {
  degree: "Bachelor of Science in Information Technology",
  major: "Major in Software Development",
  university: "University of Baguio",
  location: "Baguio City, Philippines",
  year: "2018",
} as const;

export const introduction = {
  headline: "I build backend systems for",
  emphasis: "business operations.",
  description:
    "PHP, Laravel, and relational databases. Building business applications and connecting services across real estate, travel, and healthcare.",
  about: [
    "I’m Justin, a software developer based in Abu Dhabi. My work spans property platforms, travel services, and hospital operations — systems shaped by the people who use them every day.",
    "I bring development experience alongside practical knowledge of operational workflows, project documentation, and stakeholder coordination. That context helps me translate business requirements into software.",
  ],
} as const;
