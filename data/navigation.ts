export interface NavChild {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface HeaderCategory {
  label: string;
  href: string;
}

export const headerCategoriesLeft: HeaderCategory[] = [
  { label: "Ocean", href: "/news/ocean" },
  { label: "River", href: "/news/river" },
];

export const headerCategoriesRight: HeaderCategory[] = [
  { label: "Luxury", href: "/news/luxury" },
  { label: "Expedition", href: "/news/expedition" },
];

export const primaryNav: NavItem[] = [
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Latest", href: "/news/latest" },
      { label: "Ocean", href: "/news/ocean" },
      { label: "River", href: "/news/river" },
      { label: "Luxury", href: "/news/luxury" },
      { label: "Expedition", href: "/news/expedition" },
      { label: "Cabins", href: "/news/cabins" },
    ],
  },
  {
    label: "Features & Analysis",
    href: "/features-analysis",
    children: [
      {
        label: "Analysis & Comment",
        href: "/features-analysis/analysis-comment",
      },
      { label: "Interviews", href: "/features-analysis/interviews" },
      { label: "Marketing Tips", href: "/features-analysis/mktg-tips" },
      { label: "Cruise Reviews", href: "/features-analysis/cruise-review" },
    ],
  },
  {
    label: "Magazines",
    href: "/magazines",
    children: [
      { label: "Cruise Trade News", href: "/magazines/cruise-trade-news" },
      { label: "CTN Digital", href: "/magazines/ctn-digital" },
    ],
  },
  { label: "Podcast", href: "/podcast" },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Wave Awards", href: "/events/wave-awards" },
      { label: "Cruise Summit 2026", href: "/events/cruise-summit-2026" },
      { label: "Cruise Stars", href: "/events/cruise-stars" },
      { label: "Cruise Challenge", href: "/events/cruise-challenge" },
    ],
  },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  {
    label: "Agent Portal",
    href: "/agent-portal",
    children: [
      { label: "Competitions", href: "/agent-portal/competitions" },
      { label: "Incentives", href: "/agent-portal/incentives" },
      { label: "Offers", href: "/agent-portal/offers" },
    ],
  },
];

export const megaMenuColumns: { title: string; items: NavChild[] }[] = [
  {
    title: "Editorial",
    items: [
      { label: "News", href: "/news" },
      { label: "Features & Analysis", href: "/features-analysis" },
      { label: "Magazines", href: "/magazines" },
      { label: "Podcast", href: "/podcast" },
    ],
  },
  {
    title: "News Categories",
    items: [
      { label: "Ocean", href: "/news/ocean" },
      { label: "River", href: "/news/river" },
      { label: "Cabins", href: "/news/cabins" },
      { label: "Luxury", href: "/news/luxury" },
      { label: "Expedition", href: "/news/expedition" },
      { label: "Latest", href: "/news/latest" },
    ],
  },
  {
    title: "Trade",
    items: [
      {
        label: "Events",
        href: "/events",
        children: [
          { label: "Wave Awards", href: "/events/wave-awards" },
          { label: "Cruise Summit 2026", href: "/events/cruise-summit-2026" },
          { label: "Cruise Stars", href: "/events/cruise-stars" },
          { label: "Cruise Challenge", href: "/events/cruise-challenge" },
        ],
      },
      { label: "Knowledge Hub", href: "/knowledge-hub" },
      {
        label: "Agent Portal",
        href: "/agent-portal",
        children: [
          { label: "Competitions", href: "/agent-portal/competitions" },
          { label: "Incentives", href: "/agent-portal/incentives" },
          { label: "Offers", href: "/agent-portal/offers" },
        ],
      },
    ],
  },
];

export const footerColumns: { title: string; links: NavChild[] }[] = [
  {
    title: "Editorial",
    links: [
      { label: "News", href: "/news" },
      { label: "Features & Analysis", href: "/features-analysis" },
      { label: "Magazines", href: "/magazines" },
      { label: "Podcast", href: "/podcast" },
    ],
  },
  {
    title: "News Categories",
    links: [
      { label: "Ocean", href: "/news/ocean" },
      { label: "River", href: "/news/river" },
      { label: "Cabins", href: "/news/cabins" },
      { label: "Luxury", href: "/news/luxury" },
      { label: "Expedition", href: "/news/expedition" },
      { label: "Latest", href: "/news/latest" },
    ],
  },
  {
    title: "Trade",
    links: [
      { label: "Events", href: "/events" },
      { label: "Knowledge Hub", href: "/knowledge-hub" },
      {
        label: "Agent Portal",
        href: "/agent-portal",
        children: [
          { label: "Competitions", href: "/agent-portal/competitions" },
          { label: "Incentives", href: "/agent-portal/incentives" },
          { label: "Offers", href: "/agent-portal/offers" },
        ],
      },
    ],
  },
  {
    title: "Learn More",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Advertise", href: "/advertise" },
      { label: "Subscribe", href: "/subscribe" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
];

export const socialLinks: NavChild[] = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
];
