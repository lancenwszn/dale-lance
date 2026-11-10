/**
 * Single source of truth for all site content.
 * Only verified information belongs here — leave things out rather than guess.
 */

export const site = {
  name: "DALE LANCE",
  email: "lance.nwszn@gmail.com",
  /** Contact details are used as link targets only — never printed on the page. */
  whatsapp: "https://wa.me/639565939875",
  roles: ["AI Product Builder", "Systems Architect", "Operations Strategist"],
  positioning:
    "Building intelligent products, designing scalable systems, and transforming business operations.",
  headline: ["I build systems.", "I create products.", "I make ideas work."],
  description:
    "DALE LANCE — AI Product Builder, Systems Architect and Operations Strategist. Building intelligent products, designing scalable systems, and transforming business operations.",
};

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: "/#contact" },
];

export const about = {
  statement:
    "I combine technical knowledge, product thinking, and operational leadership to turn ideas into functional, scalable systems.",
  body: [
    "My background sits where Information Technology, business operations, entrepreneurship, and technology implementation meet. That mix is the point: I can understand the business problem, architect the system behind it, build or coordinate the product, and make it hold up in day-to-day operations.",
    "I am not only a developer and not only a project manager. I work across the whole line — from the requirement on a whiteboard to the deployed system a team actually runs on.",
  ],
  areas: [
    "AI-assisted product development",
    "Systems architecture and technical implementation",
    "Business process automation",
    "Product and project management",
    "Digital platforms and web applications",
    "CRM and integrated business systems",
    "Operational strategy and process improvement",
    "Building and managing teams",
    "Turning business requirements into practical technology",
  ],
  certification: "Lean Six Sigma Yellow Belt",
};

export type Role = {
  title: string;
  /** Industry descriptor — employer names are deliberately not published */
  org: string;
  /** Exactly as supplied — never adjusted. Empty = no dates shown. */
  period: string;
  /** Short description, always visible */
  summary: string;
  /** Revealed by "View details" */
  responsibilities: string[];
  contributions?: string[];
  /** Verified achievements only */
  achievements?: string[];
  focus?: string[];
  /** true = listed in the compact "Earlier career" group */
  earlier?: boolean;
};

/**
 * Career history, newest first. The first entry is the featured role.
 *
 * CONFIDENTIALITY: describe roles, responsibilities and transferable
 * expertise only. No employer names, product names, client names, internal
 * architecture, workflows or implementation details.
 */
export const experience: Role[] = [
  {
    title: "AI Product & Systems Operations Lead",
    org: "US Real Estate Technology & Operations",
    period: "March 2026 – October 2026",
    summary:
      "Led product and systems operations within a US-based real estate technology environment. Worked across product planning, technical coordination, systems implementation, AI-assisted workflows, process automation, and operational infrastructure. Translated business requirements into practical technology solutions while coordinating implementation and delivery.",
    responsibilities: [
      "Led product and systems operations within a US-based real estate technology environment.",
      "Translated business requirements into practical technology solutions.",
      "Coordinated implementation and delivery.",
    ],
    focus: [
      "Product planning",
      "Technical coordination",
      "Systems implementation",
      "AI-assisted workflows",
      "Process automation",
      "Operational infrastructure",
    ],
  },
  {
    title: "Project Manager",
    org: "US Real Estate Operations Startup",
    period: "November 2025 – February 2026",
    summary:
      "Managed cross-functional operational and project activities, coordinating teams, deliverables, timelines, and stakeholder communication. Oversaw workflows across business functions and supported execution, accountability, and operational coordination.",
    responsibilities: [
      "Managed cross-functional operational and project activities.",
      "Coordinated teams, deliverables, timelines, and stakeholder communication.",
      "Oversaw workflows across business functions.",
      "Supported execution, accountability, and operational coordination.",
    ],
    focus: ["Project management", "Team coordination", "Stakeholder communication", "Workflow oversight"],
  },
  {
    title: "Project & Operations Manager",
    org: "US E-Commerce & Dropshipping",
    period: "February 2025 – September 2025",
    summary:
      "Managed project execution and day-to-day business operations for an e-commerce operation. Coordinated workflows, team activities, operational priorities, and process improvements to support business execution.",
    responsibilities: [
      "Managed project execution and day-to-day business operations for an e-commerce operation.",
      "Coordinated workflows, team activities, and operational priorities.",
      "Drove process improvements to support business execution.",
    ],
    focus: ["Project execution", "Business operations", "Workflow coordination", "Process improvement"],
  },
  {
    title: "Operations Manager",
    org: "Dubai-based Crypto Trading Startup",
    period: "June 2024 – December 2024",
    summary:
      "Led operational activities and cross-functional teams across customer service, sales, administration, and technical support. Managed team coordination, performance monitoring, KPIs, service delivery, reporting, and process improvement.",
    responsibilities: [
      "Led operational activities and cross-functional teams.",
      "Covered customer service, sales, administration, and technical support.",
      "Managed team coordination, performance monitoring, and KPIs.",
      "Managed service delivery, reporting, and process improvement.",
    ],
    focus: ["Operations leadership", "Performance and KPIs", "Service delivery", "Reporting"],
  },
  {
    title: "Founder & General Manager",
    org: "E-Commerce – Streetwear & Printing Consumables",
    period: "January 2017 – April 2024",
    summary:
      "Founded and managed an e-commerce business focused on streetwear and printing consumables. Oversaw business operations, team management, sales, marketing, customer experience, and business development.",
    responsibilities: [
      "Founded and managed an e-commerce business focused on streetwear and printing consumables.",
      "Oversaw business operations and team management.",
      "Oversaw sales, marketing, and customer experience.",
      "Led business development.",
    ],
    focus: ["Entrepreneurship", "Business management", "Sales and marketing", "Customer experience"],
  },
  {
    title: "Progressive Leadership Roles",
    org: "BPO – Customer Service, Technical Support & Sales",
    period: "",
    summary:
      "Built a career across customer service, technical support, and sales, progressing through leadership responsibilities. Developed experience in team management, service delivery, performance management, quality assurance, and operational execution.",
    responsibilities: [
      "Built a career across customer service, technical support, and sales.",
      "Progressed through leadership responsibilities.",
      "Developed experience in team management and service delivery.",
      "Developed experience in performance management, quality assurance, and operational execution.",
    ],
    focus: ["Team management", "Service delivery", "Performance management", "Quality assurance"],
    earlier: true,
  },
];

export type Area = {
  slug: "product" | "systems" | "automation" | "web";
  index: string;
  title: string;
  summary: string;
  points: string[];
};

/**
 * Areas of work — transferable capabilities, not project case studies.
 * Nothing here names or describes a specific product, client or system.
 */
export const areas: Area[] = [
  {
    slug: "product",
    index: "01",
    title: "AI & Digital Product Development",
    summary: "Taking a business requirement through to a delivered digital product.",
    points: [
      "Coordinating AI-assisted product development",
      "Working with modern web application technologies",
      "Translating business requirements into digital solutions",
      "Supporting technical implementation and product delivery",
    ],
  },
  {
    slug: "systems",
    index: "02",
    title: "Systems Architecture & Integration",
    summary: "Planning how systems fit together, and coordinating the work to get them live.",
    points: [
      "Systems planning and technical coordination",
      "API and third-party service integration",
      "Digital platform implementation",
      "Systems reliability and deployment coordination",
    ],
  },
  {
    slug: "automation",
    index: "03",
    title: "Business Automation & Operations",
    summary: "Making the way a business runs clearer, faster, and more consistent.",
    points: [
      "Business process improvement",
      "Workflow automation",
      "CRM and operational systems",
      "Process documentation and standardization",
      "Cross-functional operational coordination",
    ],
  },
  {
    slug: "web",
    index: "04",
    title: "Web Development & Digital Infrastructure",
    summary: "Building and maintaining the web presence a business depends on.",
    points: [
      "Website and landing page development",
      "Frontend implementation",
      "Deployment and hosting coordination",
      "Technical troubleshooting and performance improvements",
    ],
  },
];

/** Personal venture — independent of any employer. */
export const venture = {
  name: "SZN Labs",
  status: "Venture in development",
  summary:
    "My personal venture: a product studio intended to develop and own multiple digital products and AI-powered applications. It is in development and has not launched.",
};

export const capabilities = [
  {
    index: "01",
    title: "Product & AI",
    items: [
      "AI Product Development",
      "Web Application Development",
      "Product Operations",
      "Product Management",
      "Technical Implementation",
    ],
  },
  {
    index: "02",
    title: "Systems & Automation",
    items: [
      "Systems Architecture",
      "API Integration",
      "Business Automation",
      "CRM Integration",
      "Workflow Design",
      "Technical Deployment",
    ],
  },
  {
    index: "03",
    title: "Business & Operations",
    items: [
      "Operations Strategy",
      "Project Management",
      "Process Improvement",
      "SOP Development",
      "Team Leadership",
      "Lean Six Sigma",
    ],
  },
  {
    index: "04",
    title: "Digital & Marketing Systems",
    items: [
      "SEO",
      "AEO",
      "GEO",
      "Website Development",
      "Lead Generation",
      "Marketing Automation",
      "Analytics and Reporting",
    ],
  },
];

/** General technical competencies — not tied to any particular product. */
export const technologies = ["Next.js", "React", "TypeScript", "Supabase", "GitHub", "Vercel"];
