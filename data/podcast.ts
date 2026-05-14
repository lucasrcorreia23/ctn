export interface PodcastEpisode {
  slug: string;
  number: number;
  title: string;
  guest: string;
  date: string;
  duration: string;
  summary: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    slug: "ep-42-the-luxury-shift",
    number: 42,
    title: "The Luxury Shift Explained",
    guest: "Helena Marsh, CTN",
    date: "2026-05-10",
    duration: "38 min",
    summary:
      "A clear-eyed look at why luxury cruise has become the structural growth story of the UK trade.",
  },
  {
    slug: "ep-41-river-cruise-shoulder-season",
    number: 41,
    title: "Selling River Cruise Shoulder Season",
    guest: "A senior river product lead",
    date: "2026-05-03",
    duration: "32 min",
    summary:
      "How agents are unlocking shoulder season river demand without discounting the headline rate.",
  },
  {
    slug: "ep-40-first-cruise-conversion",
    number: 40,
    title: "First Cruise Conversion Done Right",
    guest: "A high-performing UK agency owner",
    date: "2026-04-26",
    duration: "41 min",
    summary:
      "Inside the practical workflow that lifts first-cruise conversion by more than two times the industry average.",
  },
  {
    slug: "ep-39-expedition-cruise-pipeline",
    number: 39,
    title: "Inside the Expedition Pipeline",
    guest: "An expedition cruise commercial lead",
    date: "2026-04-19",
    duration: "36 min",
    summary:
      "Polar capacity, pricing discipline, and what the next two seasons hold for UK agents.",
  },
  {
    slug: "ep-38-cabin-tier-rethink",
    number: 38,
    title: "The Cabin Tier Rethink",
    guest: "Daniel Okafor, CTN",
    date: "2026-04-12",
    duration: "29 min",
    summary:
      "Why cabin categorisation finally matters again and what to expect from the autumn brochure cycle.",
  },
];

export function getEpisodeBySlug(slug: string): PodcastEpisode | undefined {
  return podcastEpisodes.find((e) => e.slug === slug);
}
