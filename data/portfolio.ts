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

export const focusAreas = [
  {
    number: "01",
    title: "Real estate platforms",
    description:
      "Property listings, order management, accounting workflows, and application dashboards developed for an Australian real estate business.",
    tags: ["PHP", "Laravel", "MySQL", "Dashboards"],
  },
  {
    number: "02",
    title: "Travel service integrations",
    description:
      "Travel agency application features connecting external travel services, including Hotelbeds, Expedia, Travelport, and Nirvana APIs.",
    tags: ["Third-party APIs", "Travel platforms", "Integrations"],
  },
  {
    number: "03",
    title: "Hospital operations",
    description:
      "Software supporting procurement, inventory management, and patient queuing workflows, alongside technical support for hospital staff.",
    tags: ["Procurement", "Inventory", "Queuing"],
  },
] as const;

export const skillGroups = [
  { title: "Backend", skills: ["PHP", "Laravel", "Node.js"] },
  { title: "Databases", skills: ["MySQL", "Microsoft SQL Server", "SQL"] },
  { title: "Frontend", skills: ["JavaScript", "HTML", "CSS", "React.js", "Next.js", "Vue.js"] },
  { title: "Development tools", skills: ["Git", "GitHub"] },
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
