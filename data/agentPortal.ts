export type AgentItemType = "competition" | "incentive" | "offer";

export interface AgentItem {
  slug: string;
  type: AgentItemType;
  title: string;
  brand: string;
  endsAt: string;
  summary: string;
  reward: string;
}

export const agentItems: AgentItem[] = [
  {
    slug: "win-a-luxury-fam-trip",
    type: "competition",
    title: "Win a Luxury Cruise Fam Trip",
    brand: "Coastline Luxury Cruises",
    endsAt: "2026-06-30",
    summary:
      "Complete the luxury accreditation pathway by the end of June for a chance to win one of ten fam trip places.",
    reward: "Ten fam trip places",
  },
  {
    slug: "win-a-river-cruise-weekend",
    type: "competition",
    title: "Win a River Cruise Weekend",
    brand: "Continental River Lines",
    endsAt: "2026-07-15",
    summary:
      "Submit three river cruise bookings before the deadline to enter the prize draw for a weekend sailing.",
    reward: "Weekend river cruise",
  },
  {
    slug: "double-commission-on-luxury-suites",
    type: "incentive",
    title: "Double Commission on Luxury Suites",
    brand: "Coastline Luxury Cruises",
    endsAt: "2026-06-15",
    summary:
      "Earn double commission on every luxury suite booking made during the summer selling window.",
    reward: "Up to double commission",
  },
  {
    slug: "fast-track-loyalty-tier",
    type: "incentive",
    title: "Fast-Track Loyalty Tier",
    brand: "Coastline Group",
    endsAt: "2026-08-01",
    summary:
      "Hit the qualifying booking threshold by August to fast-track to the highest agency loyalty tier for 2027.",
    reward: "Top loyalty tier for 2027",
  },
  {
    slug: "free-place-on-an-expedition-cruise",
    type: "incentive",
    title: "Free Place on an Expedition Cruise",
    brand: "Polar Voyages",
    endsAt: "2026-09-01",
    summary:
      "Earn a free expedition cruise place when you confirm three full-paying expedition bookings.",
    reward: "Free expedition place",
  },
  {
    slug: "client-exclusive-onboard-credit",
    type: "offer",
    title: "Client Exclusive Onboard Credit",
    brand: "Continental River Lines",
    endsAt: "2026-06-30",
    summary:
      "Trade-only onboard credit available across selected river itineraries when booked through the agent portal.",
    reward: "GBP 150 onboard credit",
  },
  {
    slug: "free-cabin-upgrade-promotion",
    type: "offer",
    title: "Free Cabin Upgrade Promotion",
    brand: "Atlantic Ocean Lines",
    endsAt: "2026-07-31",
    summary:
      "Complimentary cabin upgrades on selected ocean itineraries when booked through preferred agents.",
    reward: "One-tier cabin upgrade",
  },
  {
    slug: "early-deposit-amenity-package",
    type: "offer",
    title: "Early Deposit Amenity Package",
    brand: "Coastline Luxury Cruises",
    endsAt: "2026-06-21",
    summary:
      "Clients booking early deposits unlock an exclusive amenity package across the luxury fleet.",
    reward: "Exclusive amenity pack",
  },
];

export const agentTypeLabels: Record<AgentItemType, string> = {
  competition: "Competitions",
  incentive: "Incentives",
  offer: "Offers",
};

export function getAgentItemsByType(type: AgentItemType): AgentItem[] {
  return agentItems.filter((i) => i.type === type);
}
