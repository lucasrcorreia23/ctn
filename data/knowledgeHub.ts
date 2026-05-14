export interface KnowledgeCategory {
  slug: string;
  title: string;
  description: string;
  resourceCount: number;
}

export interface KnowledgeResource {
  slug: string;
  title: string;
  category: string;
  format: "Guide" | "Course" | "Toolkit" | "Webinar";
  duration: string;
  summary: string;
}

export const knowledgeCategories: KnowledgeCategory[] = [
  {
    slug: "selling-cruise",
    title: "Selling Cruise",
    description:
      "Practical resources to lift conversion across mainstream, premium, and luxury cruise selling.",
    resourceCount: 18,
  },
  {
    slug: "destinations",
    title: "Destinations",
    description: "Region-by-region briefings to support specialist destination selling.",
    resourceCount: 22,
  },
  {
    slug: "ship-knowledge",
    title: "Ship Knowledge",
    description: "Fleet briefings, cabin tier walkthroughs, and product comparators.",
    resourceCount: 26,
  },
  {
    slug: "marketing",
    title: "Marketing",
    description: "Campaign templates, content frameworks, and email playbooks.",
    resourceCount: 14,
  },
  {
    slug: "compliance",
    title: "Compliance",
    description: "ATOL, ABTA, and regulatory updates for cruise-focused agencies.",
    resourceCount: 9,
  },
  {
    slug: "data-and-insight",
    title: "Data & Insight",
    description: "Booking pattern data, benchmark studies, and forward visibility reports.",
    resourceCount: 11,
  },
];

export const knowledgeResources: KnowledgeResource[] = [
  {
    slug: "first-cruise-conversion-playbook",
    title: "First Cruise Conversion Playbook",
    category: "Selling Cruise",
    format: "Guide",
    duration: "20 min read",
    summary:
      "A structured playbook for moving first-time cruise clients from enquiry to deposit in fewer than three contacts.",
  },
  {
    slug: "river-destination-briefing-rhine",
    title: "River Destination Briefing: Rhine",
    category: "Destinations",
    format: "Guide",
    duration: "15 min read",
    summary: "A working agent's briefing on the Rhine, with selling notes by season.",
  },
  {
    slug: "luxury-suite-comparator",
    title: "Luxury Suite Comparator",
    category: "Ship Knowledge",
    format: "Toolkit",
    duration: "Interactive",
    summary:
      "Side-by-side comparator covering top-tier suites across the five leading luxury lines.",
  },
  {
    slug: "autumn-cruise-marketing-templates",
    title: "Autumn Cruise Marketing Templates",
    category: "Marketing",
    format: "Toolkit",
    duration: "Download",
    summary:
      "Ready-to-use marketing assets for the autumn cruise window, including email, social, and print formats.",
  },
  {
    slug: "atol-and-cruise-briefing-2026",
    title: "ATOL and Cruise Briefing 2026",
    category: "Compliance",
    format: "Webinar",
    duration: "45 min",
    summary:
      "An on-demand briefing on ATOL and ABTA developments most relevant to cruise selling in 2026.",
  },
  {
    slug: "forward-booking-benchmarks",
    title: "Forward Booking Benchmarks",
    category: "Data & Insight",
    format: "Guide",
    duration: "25 min read",
    summary: "Quarterly benchmarks on UK cruise forward booking patterns across product tiers.",
  },
];
