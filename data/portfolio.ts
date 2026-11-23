export const profile = {
  name: "Justin Angelo Perez",
  title: "Backend Engineer",
  specialty: "PHP & Laravel",
  location: "Abu Dhabi, UAE",
  email: "justinangeloperez327@gmail.com",
  github: "https://github.com/justinangeloperez327",
  linkedin: "https://www.linkedin.com/in/justrax/",
  summary:
    "Software developer with over seven years of professional development experience building business applications across real estate, travel, and healthcare. Experienced in PHP, Laravel, MySQL, and dashboard development. Work includes property listings, order management, accounting, procurement, inventory, and queuing systems. Combines development experience with practical knowledge of operational workflows, project documentation, and stakeholder coordination.",
} as const;

export const caseStudies = [
  {
    id: "redhq",
    name: "REDHQ",
    title: "Real estate operations platform",
    client: "REDHQ · Australian real estate agencies",
    description:
      "REDHQ (Real Estate Digital Headquarters) is the back-office platform agencies use to run listings, marketing and reporting across their offices. I built and maintained modules in Laravel and MySQL, delivering features from the team’s Jira backlog.",
    highlights: [
      "Corporate dashboard reporting appraisals, listings, sales and settlements month over month, with GCI totals, portal engagement and top offices and agents.",
      "Property pipeline tracking each listing’s status, overdue tasks and marketing assets across offices, synced with the agency CRM.",
      "Marketing order management: supplier jobs, supplier and vendor pricing, print schedules and proof emails for every campaign.",
      "Accounting for campaign costs and the application dashboard agents use day to day.",
    ],
    techStack: ["Laravel", "PHP", "MySQL", "Vue.js", "React", "JavaScript"],
  },
  {
    id: "bghmc",
    name: "BGHMC",
    title: "Hospital procurement, inventory & queuing",
    client: "Baguio General Hospital and Medical Center",
    description:
      "Internal systems for a government hospital in Baguio City, built for the staff who handle supplies and patient flow every day.",
    highlights: [
      "Procurement system tracking purchase requests, approvals and purchase orders for hospital departments.",
      "Inventory system for supplies: stock levels, deliveries and issuance to departments.",
      "Patient queuing system that issues queue numbers and calls patients to service windows.",
    ],
    techStack: ["Laravel", "PHP", "Microsoft SQL Server", "JavaScript"],
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
    title: "Databases",
    skills: ["MySQL", "Microsoft SQL Server", "MongoDB", "SQL"],
    href: "#redhq",
    evidence: "Business application development",
  },
  {
    title: "Frontend support",
    skills: ["JavaScript", "HTML", "CSS", "React.js", "Next.js", "Vue.js"],
    href: "#redhq",
    evidence: "Application interfaces and dashboards",
  },
  {
    title: "Development tools",
    skills: ["Git", "GitHub", "Bitbucket", "Jira"],
    href: "https://github.com/justinangeloperez327",
    evidence: "Browse repositories",
  },
] as const;

type Skill = (typeof skillGroups)[number]["skills"][number];

const skillsOf = (title: string): readonly Skill[] =>
  skillGroups.find((group) => group.title === title)?.skills ?? [];

export const quickFacts = [
  { label: "Location", value: profile.location },
  { label: "Focus", value: "Backend development" },
  {
    label: "Stack",
    value: [...skillsOf("Backend development"), ...skillsOf("Databases").slice(0, 1)].join(", "),
  },
] as const;

export const primarySkills: readonly Skill[] = ["PHP", "Laravel"];

export const experience = [
  {
    role: "Project Coordinator",
    company: "Giffin Al Jazira Metal Industries LLC",
    location: "Abu Dhabi, UAE",
    period: "Apr 2026 – Present",
    highlights: [
      "Coordinate site progress, material requisitions, and outstanding actions with the Project Manager and site teams.",
      "Prepare daily progress reports, respond to consultant correspondence, and maintain project documentation.",
    ],
  },
  {
    role: "Software Developer",
    company: "SKYUNITECH",
    location: "",
    period: "Oct 2025 – Jan 2026",
    highlights: [
      "Developed features for a travel agency web application.",
      "Integrated the Hotelbeds, Expedia, Travelport, and Nirvana APIs and passed each provider’s integration certification.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "REDHQ",
    location: "",
    period: "Feb 2021 – Jun 2025",
    highlights: [
      "Developed web applications for an Australian real estate business using PHP, Laravel, MySQL, JavaScript, HTML, and CSS.",
      "Built property listing management, advertising material ordering, and accounting functionality for real estate companies.",
      "Developed and maintained the application dashboard.",
    ],
  },
  {
    role: "Software Developer",
    company: "Dhalogiq",
    location: "",
    period: "Mar 2020 – Feb 2021",
    highlights: [
      "Supported REDHQ as an assigned software developer, contributing to its web applications before transitioning to direct employment with the client.",
    ],
  },
  {
    role: "Software Developer",
    company: "BGHMC",
    location: "",
    period: "Dec 2018 – Feb 2020",
    highlights: [
      "Created procurement, inventory management, and queuing systems supporting hospital operations.",
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
