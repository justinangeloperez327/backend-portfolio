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
    id: "skyunitech",
    company: "SKYUNITECH",
    domain: "Travel",
    title: "SKYUNITECH",
    summary: "Travel agency API integrations.",
    problem:
      "A travel platform connecting external travel agency services through API integrations.",
    contribution:
      "Integrated travel agency APIs, including Hotelbeds, Expedia, Travelport, and Nirvana, into SKYUNITECH.",
    outcome: "Delivered travel API integrations with approved certifications.",
    tags: ["API integrations", "Travel services"],
    scope: ["Hotelbeds", "Expedia", "Travelport", "Nirvana"],
  },
  {
    id: "redhq",
    company: "REDHQ",
    domain: "Real estate",
    title: "REDHQ",
    summary: "Property and business management for real estate companies.",
    problem:
      "A platform where real estate companies manage property listings, order advertising materials, and handle accounting and dashboards.",
    contribution:
      "Built property listing management, ordering for materials used in property advertising, accounting functionality, and the application dashboard.",
    outcome:
      "Delivered functionality supporting property advertising and business administration.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript"],
    scope: [
      "Property listings",
      "Advertising material orders",
      "Accounting",
      "Dashboard",
    ],
  },
  {
    id: "bghmc",
    company: "BGHMC",
    domain: "Healthcare",
    title: "BGHMC",
    summary: "Procurement, inventory, and queuing systems.",
    problem:
      "Hospital systems for managing procurement, tracking inventory, and organizing patient queues.",
    contribution:
      "Created the procurement, inventory management, and queuing systems for BGHMC.",
    outcome:
      "Delivered three systems supporting day-to-day hospital operations.",
    tags: ["Business applications", "Hospital operations"],
    scope: ["Procurement", "Inventory management", "Patient queuing"],
  },
] as const;

export const integrationWorkflow = {
  label: "Travel service integration",
  application: "SKYUNITECH",
  applicationNote: "Travel platform",
  connection: "Third-party API integrations",
  contribution:
    "My contribution: travel API integrations with approved certifications.",
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
      "Integrated Hotelbeds, Expedia, Travelport, and Nirvana APIs, with approved certifications, into SKYUNITECH.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "REDHQ",
    location: "",
    period: "Feb 2021 — Jun 2025",
    highlights: [
      "Developed web applications for an Australian real estate business using PHP, Laravel, MySQL, JavaScript, HTML, and CSS.",
      "Built property listing management, advertising material ordering, and accounting functionality for real estate companies.",
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
      "Created procurement, inventory management, and queuing systems supporting hospital operations.",
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
  about: [
    "I’m Justin, a software developer based in Abu Dhabi. My work spans property platforms, travel services, and hospital operations — systems shaped by the people who use them every day.",
    "I bring development experience alongside practical knowledge of operational workflows, project documentation, and stakeholder coordination. That context helps me translate business requirements into software.",
  ],
} as const;
