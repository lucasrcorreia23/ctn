import type { ArticleImageKind } from "@/data/articles";

export interface EventItem {
  slug: string;
  title: string;
  tagline: string;
  date: string;
  location: string;
  status: "Open" | "Upcoming" | "Live" | "Closed";
  body: string[];
  highlights: string[];
  imageKind: ArticleImageKind;
}

export const events: EventItem[] = [
  {
    slug: "wave-awards",
    title: "Wave Awards 2026",
    tagline: "Celebrating excellence across the UK cruise trade.",
    date: "2026-11-12",
    location: "London",
    status: "Open",
    body: [
      "The Wave Awards 2026 mark twenty-five years of celebrating excellence across the UK cruise trade.",
      "Entry is open across agency, supplier, and marketing categories, with a dedicated track for new entrants.",
      "Winners will be revealed at the ceremony in London in November 2026.",
    ],
    highlights: [
      "Entry open to all UK trade",
      "Twenty-five years of recognition",
      "Dedicated new entrant track",
      "Black tie ceremony in central London",
    ],
    imageKind: "stage",
  },
  {
    slug: "cruise-summit-2026",
    title: "Cruise Summit 2026",
    tagline: "Strategy, commercial planning, and the year ahead.",
    date: "2026-09-23",
    location: "Manchester",
    status: "Upcoming",
    body: [
      "Cruise Summit 2026 is the UK trade's defining strategic gathering.",
      "The agenda tilts heavily toward commercial strategy and agency operational excellence.",
      "Owner-track sessions sit alongside dedicated supplier breakouts and product showcases.",
    ],
    highlights: [
      "Owner-track strategy sessions",
      "Supplier product showcases",
      "Forward visibility workshops",
      "Networking dinner included",
    ],
    imageKind: "stage",
  },
  {
    slug: "cruise-stars",
    title: "Cruise Stars 2026",
    tagline: "Recognising the agents shaping cruise selling.",
    date: "2026-10-08",
    location: "Birmingham",
    status: "Open",
    body: [
      "Cruise Stars 2026 returns with a revised judging framework focused on agent capability and customer outcomes.",
      "Categories include first-cruise conversion, repeat capture, and emerging-product expertise.",
      "Entries close in early autumn ahead of the ceremony in Birmingham.",
    ],
    highlights: [
      "Revised 2026 judging framework",
      "First-cruise conversion category",
      "Repeat capture recognition",
      "Emerging-product agent of the year",
    ],
    imageKind: "stage",
  },
  {
    slug: "cruise-challenge",
    title: "Cruise Challenge",
    tagline: "The training-led leaderboard for selling cruise.",
    date: "2026-12-01",
    location: "Online & UK Hubs",
    status: "Live",
    body: [
      "The Cruise Challenge is a training-led leaderboard programme designed to recognise agents who invest in product expertise.",
      "Modules cover small ship, river, luxury, and expedition product.",
      "The annual leaderboard is published in December.",
    ],
    highlights: [
      "Four product training tracks",
      "Quarterly progression milestones",
      "End-of-year leaderboard",
      "Recognition at Wave Awards",
    ],
    imageKind: "training",
  },
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug);
}

export interface ChallengeEvent {
  title: string;
  date: string;
  region: string;
  imageKind: ArticleImageKind;
}

export const challengeEvents: ChallengeEvent[] = [
  {
    title: "Southampton Cruise Challenge",
    date: "3rd June 2026",
    region: "South East",
    imageKind: "stage",
  },
  {
    title: "Cardiff Cruise Challenge",
    date: "10th June 2026",
    region: "South Wales",
    imageKind: "stage",
  },
  {
    title: "Edinburgh Cruise Challenge",
    date: "17th June 2026",
    region: "Scotland",
    imageKind: "stage",
  },
  {
    title: "Leeds Cruise Challenge",
    date: "1st July 2026",
    region: "North East",
    imageKind: "stage",
  },
];
