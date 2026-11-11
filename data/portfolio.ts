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
    name: "SKYUNITECH",
    description:
      "Integrated Hotelbeds, Expedia, Travelport, and Nirvana travel APIs, with approved certifications, into the SKYUNITECH platform.",
    techStack: [
      "Hotelbeds API",
      "Expedia API",
      "Travelport API",
      "Nirvana API",
    ],
  },
  {
    id: "redhq",
    name: "REDHQ",
    description:
      "A platform for real estate companies to manage property listings, order advertising materials, handle accounting, and use an application dashboard.",
    techStack: ["PHP", "Laravel", "MySQL", "JavaScript"],
  },
  {
    id: "bghmc",
    name: "BGHMC",
    description:
      "Created procurement, inventory management, and patient queuing systems for hospital operations.",
    techStack: [],
  },
] as const;

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
