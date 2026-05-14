export interface MagazineIssue {
  slug: string;
  brand: "cruise-trade-news" | "ctn-digital";
  title: string;
  issue: string;
  date: string;
  pageCount: number;
  highlights: string[];
}

export const magazineBrandLabels: Record<MagazineIssue["brand"], string> = {
  "cruise-trade-news": "Cruise Trade News",
  "ctn-digital": "CTN Digital",
};

export const magazineIssues: MagazineIssue[] = [
  {
    slug: "ctn-may-2026",
    brand: "cruise-trade-news",
    title: "Cruise Trade News — May 2026",
    issue: "Issue 124",
    date: "2026-05-01",
    pageCount: 84,
    highlights: [
      "Luxury small ship deep dive",
      "Wave Awards entry guide",
      "Agent commission ladder review",
    ],
  },
  {
    slug: "ctn-april-2026",
    brand: "cruise-trade-news",
    title: "Cruise Trade News — April 2026",
    issue: "Issue 123",
    date: "2026-04-01",
    pageCount: 78,
    highlights: [
      "Expedition pipeline preview",
      "Suite tier yield analysis",
      "First-cruise conversion benchmarks",
    ],
  },
  {
    slug: "ctn-march-2026",
    brand: "cruise-trade-news",
    title: "Cruise Trade News — March 2026",
    issue: "Issue 122",
    date: "2026-03-01",
    pageCount: 80,
    highlights: [
      "Brochure design review",
      "River cruise shoulder season",
      "Cabin tier rethink",
    ],
  },
  {
    slug: "ctn-digital-q2-2026",
    brand: "ctn-digital",
    title: "CTN Digital — Q2 2026",
    issue: "Volume 9",
    date: "2026-04-15",
    pageCount: 36,
    highlights: [
      "Agency tech roundup",
      "Loyalty programme deep dive",
      "Marketing automation case study",
    ],
  },
  {
    slug: "ctn-digital-q1-2026",
    brand: "ctn-digital",
    title: "CTN Digital — Q1 2026",
    issue: "Volume 8",
    date: "2026-01-15",
    pageCount: 32,
    highlights: [
      "Forward booking data preview",
      "Distribution mix benchmarks",
      "Email marketing best practice",
    ],
  },
];

export function getIssuesForBrand(brand: MagazineIssue["brand"]): MagazineIssue[] {
  return magazineIssues.filter((m) => m.brand === brand);
}

export function getIssueBySlug(slug: string): MagazineIssue | undefined {
  return magazineIssues.find((m) => m.slug === slug);
}
