import type { ArticleImageKind } from "@/data/articles";

export type FeatureCategory =
  | "analysis-comment"
  | "interviews"
  | "mktg-tips"
  | "cruise-review";

export interface Feature {
  slug: string;
  title: string;
  category: FeatureCategory;
  categoryLabel: string;
  date: string;
  author: string;
  excerpt: string;
  body: string[];
  imageKind: ArticleImageKind;
}

export const featureCategoryLabels: Record<FeatureCategory, string> = {
  "analysis-comment": "Analysis & Comment",
  interviews: "Interviews",
  "mktg-tips": "Marketing Tips",
  "cruise-review": "Cruise Reviews",
};

export const features: Feature[] = [
  {
    slug: "what-the-luxury-shift-means-for-agency-revenue",
    title: "What the Luxury Shift Means for Agency Revenue",
    category: "analysis-comment",
    categoryLabel: "Analysis & Comment",
    date: "2026-05-09",
    author: "Helena Marsh",
    excerpt:
      "The rebalancing toward luxury cruise has clear revenue implications for UK agencies. We work through the numbers.",
    body: [
      "The luxury cruise rebalancing has been the most visible structural shift in the UK trade over the past two years.",
      "For agencies, the revenue implications are clearest in the suite tier, where the average commission per booking has risen by more than thirty percent.",
      "We work through three illustrative agency mixes and what the shift means for forward planning.",
    ],
    imageKind: "ship",
  },
  {
    slug: "interview-with-a-uk-luxury-cruise-director",
    title: "Interview With a UK Luxury Cruise Director",
    category: "interviews",
    categoryLabel: "Interviews",
    date: "2026-05-07",
    author: "Daniel Okafor",
    excerpt:
      "We sit down with a senior UK luxury cruise leader to talk distribution, capacity, and what comes next.",
    body: [
      "In a wide-ranging interview, we discuss distribution strategy, capacity allocation, and the future of agent-led luxury cruise selling.",
      "Topics include the changing definition of luxury, the role of the agency channel in the post-pandemic recovery, and pricing discipline through 2027.",
      "The interview closes with a candid view on the next wave of training investment.",
    ],
    imageKind: "portrait",
  },
  {
    slug: "five-marketing-moves-for-the-autumn-cruise-window",
    title: "Five Marketing Moves for the Autumn Cruise Window",
    category: "mktg-tips",
    categoryLabel: "Marketing Tips",
    date: "2026-05-05",
    author: "Priya Bansal",
    excerpt:
      "Practical, low-cost marketing actions for cruise agencies in the run up to the autumn selling window.",
    body: [
      "Five tactical marketing moves agencies can implement in the next two weeks ahead of the autumn cruise window.",
      "Each move is mapped to a measurable outcome, from enquiry lift to repeat capture.",
      "All five are achievable without external agency support.",
    ],
    imageKind: "generic",
  },
  {
    slug: "river-cruise-review-the-rhine-in-october",
    title: "River Cruise Review: The Rhine in October",
    category: "cruise-review",
    categoryLabel: "Cruise Reviews",
    date: "2026-05-03",
    author: "Tom Whitfield",
    excerpt:
      "A working agent's perspective on an October Rhine sailing, with notes on what sells and what does not.",
    body: [
      "An October Rhine sailing offers a clear lens on the shoulder-season river product.",
      "Highlights include the autumn light, quieter ports, and a meaningfully different excursion mix.",
      "We close with selling notes mapped directly to common client objections.",
    ],
    imageKind: "river",
  },
  {
    slug: "comment-the-case-for-structured-fam-trips",
    title: "Comment: The Case for Structured Fam Trips",
    category: "analysis-comment",
    categoryLabel: "Analysis & Comment",
    date: "2026-04-29",
    author: "Helena Marsh",
    excerpt:
      "Fam trips remain a high-value tool, but only when structured around clear commercial outcomes.",
    body: [
      "Fam trips remain one of the highest-yielding training investments suppliers can make.",
      "However, the commercial return depends entirely on whether the trip is structured around measurable outcomes.",
      "Three operators are showing how to do this well; we walk through their model.",
    ],
    imageKind: "ship",
  },
  {
    slug: "interview-with-a-river-cruise-product-lead",
    title: "Interview With a River Cruise Product Lead",
    category: "interviews",
    categoryLabel: "Interviews",
    date: "2026-04-27",
    author: "Priya Bansal",
    excerpt:
      "A product lead at a major river line walks us through the 2027 brochure planning cycle.",
    body: [
      "A senior product lead at a major river cruise line walks us through the 2027 brochure planning cycle.",
      "Topics include itinerary refresh, suite tier expansion, and shoulder-season investment.",
      "We close with the team's view on how distribution will evolve over the next two years.",
    ],
    imageKind: "river",
  },
  {
    slug: "how-to-rebuild-your-cruise-content-calendar",
    title: "How to Rebuild Your Cruise Content Calendar",
    category: "mktg-tips",
    categoryLabel: "Marketing Tips",
    date: "2026-04-25",
    author: "Daniel Okafor",
    excerpt:
      "A practical guide to rebuilding the cruise content calendar around supplier campaign timing.",
    body: [
      "A practical step-by-step guide to rebuilding the cruise content calendar around supplier campaign rhythm.",
      "We provide a template plus three worked examples from active agencies.",
      "The aim is to reduce planning friction and align effort with the highest-converting campaign windows.",
    ],
    imageKind: "generic",
  },
  {
    slug: "expedition-cruise-review-svalbard-in-summer",
    title: "Expedition Cruise Review: Svalbard in Summer",
    category: "cruise-review",
    categoryLabel: "Cruise Reviews",
    date: "2026-04-23",
    author: "Tom Whitfield",
    excerpt:
      "A first-hand review of a small-vessel Svalbard sailing, with selling notes for UK agents.",
    body: [
      "A small-vessel Svalbard sailing is one of the strongest expedition introductions an agent can take.",
      "Highlights include the wildlife density, ice-edge navigation, and the role of the expedition team.",
      "We close with practical objection handling for clients new to expedition product.",
    ],
    imageKind: "expedition",
  },
  {
    slug: "analysis-the-shoulder-season-economics",
    title: "Analysis: The Shoulder Season Economics",
    category: "analysis-comment",
    categoryLabel: "Analysis & Comment",
    date: "2026-04-21",
    author: "Priya Bansal",
    excerpt:
      "Shoulder-season cruise is delivering quietly strong yields. We unpack why and what it means for the autumn brochure cycle.",
    body: [
      "Shoulder-season cruise is increasingly the most profitable window for several UK agencies.",
      "We work through the unit economics, including incremental commission and reduced discount drag.",
      "The implication for autumn brochure design is concrete and actionable.",
    ],
    imageKind: "ship",
  },
  {
    slug: "comment-why-cabin-tier-clarity-finally-matters",
    title: "Comment: Why Cabin Tier Clarity Finally Matters",
    category: "analysis-comment",
    categoryLabel: "Analysis & Comment",
    date: "2026-04-17",
    author: "Daniel Okafor",
    excerpt:
      "The cabin tier rethink is more than a brochure refresh; it changes how agents structure the upsell conversation.",
    body: [
      "The cabin tier rethink across mainstream and premium ocean cruise is more than cosmetic.",
      "It changes the structure of the upsell conversation and unlocks a clearer side-by-side comparator.",
      "Agencies that adapt their training in 2026 will compound the advantage through 2027.",
    ],
    imageKind: "cabin",
  },
  {
    slug: "interview-with-a-luxury-product-marketer",
    title: "Interview With a Luxury Product Marketer",
    category: "interviews",
    categoryLabel: "Interviews",
    date: "2026-04-15",
    author: "Helena Marsh",
    excerpt:
      "A senior luxury product marketer walks us through the next-generation suite tier strategy and what it means for the trade.",
    body: [
      "A senior luxury product marketer explains how next-generation suite tiers are designed.",
      "The conversation covers premium positioning, agent education investment, and forward commercial terms.",
      "We close with a candid look at where the trade still has work to do.",
    ],
    imageKind: "portrait",
  },
  {
    slug: "interview-with-an-expedition-cruise-leader",
    title: "Interview With an Expedition Cruise Leader",
    category: "interviews",
    categoryLabel: "Interviews",
    date: "2026-04-11",
    author: "Tom Whitfield",
    excerpt:
      "An expedition cruise leader talks polar capacity, expedition team retention, and the agent-led sale.",
    body: [
      "An expedition cruise leader shares a candid view on polar capacity discipline for 2027.",
      "We discuss expedition team retention and the increasing importance of the agent-led sale.",
      "The conversation closes with a forward look on Antarctic deposit windows.",
    ],
    imageKind: "expedition",
  },
  {
    slug: "ten-email-templates-for-cruise-conversion",
    title: "Ten Email Templates for Cruise Conversion",
    category: "mktg-tips",
    categoryLabel: "Marketing Tips",
    date: "2026-04-09",
    author: "Priya Bansal",
    excerpt:
      "Ten short, working email templates aligned to the cruise customer lifecycle, from first enquiry to repeat capture.",
    body: [
      "Ten short, working email templates aligned to the cruise customer lifecycle.",
      "Each template is mapped to a measurable conversion event and an estimated response uplift.",
      "All ten can be deployed inside a standard agency email tool with minimal adaptation.",
    ],
    imageKind: "generic",
  },
  {
    slug: "social-channels-that-actually-convert-cruise",
    title: "Social Channels That Actually Convert Cruise",
    category: "mktg-tips",
    categoryLabel: "Marketing Tips",
    date: "2026-04-05",
    author: "Daniel Okafor",
    excerpt:
      "Which social channels return real cruise enquiries in 2026 and which ones are noise. A practical agency-level view.",
    body: [
      "We benchmark the social channels delivering measurable cruise enquiries in 2026.",
      "The data shows a clear bifurcation between channels that drive enquiry and channels that drive awareness only.",
      "We close with a recommended channel mix for a typical UK cruise agency.",
    ],
    imageKind: "generic",
  },
  {
    slug: "ocean-cruise-review-the-mediterranean-in-may",
    title: "Ocean Cruise Review: The Mediterranean in May",
    category: "cruise-review",
    categoryLabel: "Cruise Reviews",
    date: "2026-04-03",
    author: "Helena Marsh",
    excerpt:
      "A working agent's review of a May Mediterranean sailing, with selling notes by port and cabin tier.",
    body: [
      "A May Mediterranean sailing offers a clear view of the shoulder-season ocean product.",
      "Highlights include port programming, cabin tier mix, and onboard food and beverage.",
      "Selling notes by port and by cabin tier close the review.",
    ],
    imageKind: "ship",
  },
  {
    slug: "luxury-cruise-review-the-aegean-suite-tier",
    title: "Luxury Cruise Review: The Aegean Suite Tier",
    category: "cruise-review",
    categoryLabel: "Cruise Reviews",
    date: "2026-03-31",
    author: "Daniel Okafor",
    excerpt:
      "A first-hand assessment of an Aegean luxury sailing, focused on the suite tier and onboard service ratios.",
    body: [
      "An Aegean luxury sailing is a strong demonstration of the suite-tier product at its best.",
      "We work through onboard service ratios, suite tier inclusions, and the broader value narrative.",
      "Practical selling notes for high-margin agency conversion close the review.",
    ],
    imageKind: "ship",
  },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}

export function getFeaturesByCategory(category: FeatureCategory): Feature[] {
  return features.filter((f) => f.category === category);
}

export function getRelatedFeatures(slug: string, limit = 3): Feature[] {
  const current = getFeatureBySlug(slug);
  if (!current) return [];
  return features
    .filter((f) => f.slug !== slug && f.category === current.category)
    .slice(0, limit);
}
