export type ArticleCategory =
  | "ocean"
  | "river"
  | "luxury"
  | "expedition"
  | "cabins"
  | "latest";

export type ArticleImageKind =
  | "ship"
  | "river"
  | "cabin"
  | "expedition"
  | "stage"
  | "magazine"
  | "podcast"
  | "training"
  | "portrait"
  | "generic";

export interface Article {
  slug: string;
  title: string;
  category: ArticleCategory;
  categoryLabel: string;
  date: string;
  author: string;
  excerpt: string;
  body: string[];
  imageKind: ArticleImageKind;
  trending?: boolean;
  editorsPick?: boolean;
}

export const categoryLabels: Record<ArticleCategory, string> = {
  ocean: "Ocean",
  river: "River",
  luxury: "Luxury",
  expedition: "Expedition",
  cabins: "Cabins",
  latest: "Latest",
};

export const articles: Article[] = [
  {
    slug: "premium-demand-fuels-surge-in-small-ship-interest",
    title: "Premium Demand Fuels Surge in Small Ship Interest",
    category: "luxury",
    categoryLabel: "Luxury",
    date: "2026-05-08",
    author: "Helena Marsh",
    excerpt:
      "Operators report record forward bookings for boutique vessels as travel agents lean into high-margin small ship product.",
    body: [
      "Premium demand for small ship cruising has accelerated through the spring booking window, with several luxury lines reporting double-digit growth in 2027 forward sales. Agents report that clients are actively trading down vessel size in exchange for richer included experiences.",
      "The shift is most pronounced among repeat cruise customers in the 55 to 70 bracket, where higher per-passenger spend is offsetting capacity constraints. Lines are also responding with extended itineraries and an increased number of overnight calls.",
      "For travel agents, the message from suppliers is consistent: small ship product converts faster, generates higher commission per booking, and is increasingly the gateway into the wider luxury portfolio.",
    ],
    imageKind: "ship",
    trending: true,
    editorsPick: true,
  },
  {
    slug: "river-cruise-operators-expand-training-for-agents",
    title: "River Cruise Operators Expand Training for Agents",
    category: "river",
    categoryLabel: "River",
    date: "2026-05-06",
    author: "Daniel Okafor",
    excerpt:
      "Three of the UK's largest river cruise lines have rolled out new accreditation programmes ahead of the autumn selling season.",
    body: [
      "River cruise operators have collectively expanded agent training capacity by more than forty percent, citing strong demand for shoulder-season departures and a growing pipeline of first-time river clients.",
      "The new programmes prioritise destination expertise and product comparison, replacing earlier training that focused largely on onboard features. Several lines are now bundling fam trips into the accreditation pathway.",
      "Cruise Trade News understands the move follows agent feedback that customers are asking more sophisticated questions earlier in the sales conversation, particularly around itinerary depth and excursion inclusion.",
    ],
    imageKind: "river",
    trending: true,
  },
  {
    slug: "luxury-cruise-brands-rethink-advisor-education",
    title: "Luxury Cruise Brands Rethink Advisor Education",
    category: "luxury",
    categoryLabel: "Luxury",
    date: "2026-05-04",
    author: "Priya Bansal",
    excerpt:
      "Suppliers are moving away from one-off webinars in favour of structured advisor pathways aimed at long-term loyalty.",
    body: [
      "Luxury cruise brands are restructuring their advisor education programmes, with several rolling out tiered certification tracks for the first time. The shift reflects an industry-wide acknowledgement that one-off webinars are insufficient to support the high-touch sale.",
      "Programmes now combine product training, destination immersion, and commercial coaching, with successful completion unlocking enhanced commercial terms.",
      "Agents told CTN that the new pathways have made it materially easier to justify investment in luxury cruise expertise within their wider business.",
    ],
    imageKind: "ship",
    editorsPick: true,
  },
  {
    slug: "expedition-cruise-growth-creates-new-selling-opportunities",
    title: "Expedition Cruise Growth Creates New Selling Opportunities",
    category: "expedition",
    categoryLabel: "Expedition",
    date: "2026-05-02",
    author: "Tom Whitfield",
    excerpt:
      "New small-vessel capacity in the polar regions is opening up agent commission opportunities outside the traditional cruise calendar.",
    body: [
      "The expedition cruise category continues to deliver above-market growth, with several operators adding small-vessel capacity for the 2026 and 2027 polar seasons. Travel agents are increasingly being positioned as essential intermediaries given the complexity of the product.",
      "Operators emphasise that the expedition customer is rarely an impulse booker. The average expedition lead time exceeds nine months, giving agents an unusually long planning runway and a high probability of multi-element add-on sales.",
      "Training capacity has scaled accordingly, with at least four lines launching new expedition-focused accreditation in the past six months.",
    ],
    imageKind: "expedition",
    trending: true,
  },
  {
    slug: "how-agents-can-convert-first-time-cruise-customers",
    title: "How Agents Can Convert First Time Cruise Customers",
    category: "latest",
    categoryLabel: "Latest",
    date: "2026-04-30",
    author: "Helena Marsh",
    excerpt:
      "Conversion rates for first-time cruisers continue to climb. Here is what the highest-performing agents are doing differently.",
    body: [
      "First-time cruise conversion is one of the clearest signals of agent quality in the current market, with high-performing agencies converting at more than twice the industry average.",
      "Common practices across these agencies include early-stage itinerary comparison, structured cabin grade explanation, and proactive follow-up at fourteen and twenty-eight days. None require additional supplier support.",
      "Lines have responded by simplifying product fact sheets and reformatting commission structures to reward repeat bookings on first-cruise clients.",
    ],
    imageKind: "portrait",
    editorsPick: true,
  },
  {
    slug: "ocean-newbuild-pipeline-stays-strong-into-2028",
    title: "Ocean Newbuild Pipeline Stays Strong Into 2028",
    category: "ocean",
    categoryLabel: "Ocean",
    date: "2026-04-28",
    author: "Daniel Okafor",
    excerpt:
      "Capacity additions across mainstream and premium ocean cruise will continue at pace, with implications for pricing and agent allocations.",
    body: [
      "The ocean cruise newbuild pipeline remains robust through 2028, with capacity additions weighted toward mainstream and premium tonnage. Lines have confirmed that allocations will be distributed more aggressively toward high-performing agency partners.",
      "For agents, the implication is that early commitment to preferred partners is likely to be increasingly important as capacity tightens in popular itineraries.",
      "Pricing is expected to remain firm through 2026, with discounting concentrated on shoulder-season repositioning sailings.",
    ],
    imageKind: "ship",
  },
  {
    slug: "river-cruise-bookings-climb-in-shoulder-season",
    title: "River Cruise Bookings Climb in Shoulder Season",
    category: "river",
    categoryLabel: "River",
    date: "2026-04-26",
    author: "Priya Bansal",
    excerpt:
      "Off-peak European river sailings are running well ahead of last year, lifting overall yields for the segment.",
    body: [
      "European river cruise operators are reporting that shoulder-season bookings are running materially ahead of last year, with March and November departures showing the steepest year-on-year gains.",
      "Agents attribute the shift to better-targeted shoulder season marketing and to a maturing customer base that is increasingly comfortable booking outside peak summer windows.",
      "Operators expect the trend to continue, with several lines preparing dedicated shoulder-season campaigns for autumn 2026.",
    ],
    imageKind: "river",
  },
  {
    slug: "cabin-categorisation-finally-gets-a-rethink",
    title: "Cabin Categorisation Finally Gets a Rethink",
    category: "cabins",
    categoryLabel: "Cabins",
    date: "2026-04-24",
    author: "Tom Whitfield",
    excerpt:
      "Lines are simplifying suite and balcony tiers in response to long-standing agent frustration over inconsistent naming.",
    body: [
      "Cabin categorisation across mainstream and premium ocean cruise is undergoing its most significant rethink in more than a decade, with several lines committing to simpler tier names and more consistent grade definitions.",
      "Agents have long argued that inconsistent naming makes side-by-side comparison difficult, which suppresses upsell conversion.",
      "The first wave of changes is expected to land in lines' autumn 2026 brochures, with full system harmonisation likely by spring 2027.",
    ],
    imageKind: "cabin",
  },
  {
    slug: "expedition-fleets-tackle-sustainability-reporting",
    title: "Expedition Fleets Tackle Sustainability Reporting",
    category: "expedition",
    categoryLabel: "Expedition",
    date: "2026-04-22",
    author: "Helena Marsh",
    excerpt:
      "Polar and high-latitude operators are publishing more detailed environmental metrics, partly in response to agent and client demand.",
    body: [
      "Expedition operators are publishing increasingly granular sustainability data, including per-passenger fuel use, waste-to-shore volumes, and itinerary-level carbon disclosures.",
      "Agents say client interest in these metrics has risen sharply over the past year, particularly among under-50 expedition customers.",
      "The wider industry is watching the segment closely as a leading indicator of how transparent reporting may evolve across cruise overall.",
    ],
    imageKind: "expedition",
  },
  {
    slug: "luxury-suites-redefine-onboard-spend",
    title: "Luxury Suites Redefine Onboard Spend",
    category: "luxury",
    categoryLabel: "Luxury",
    date: "2026-04-20",
    author: "Daniel Okafor",
    excerpt:
      "Top-tier suite occupants now account for a disproportionate share of onboard revenue, reshaping how lines design upgrades.",
    body: [
      "Top-tier suite customers have become the dominant contributors to onboard revenue across several luxury fleets, prompting lines to reconsider how suite product is positioned in upgrade flows.",
      "Agents are increasingly being briefed to introduce suite-tier upgrades earlier in the sales conversation, often before final itinerary selection.",
      "The change is also influencing brochure design, with several lines committing to clearer single-page suite comparators by next season.",
    ],
    imageKind: "cabin",
    trending: true,
  },
  {
    slug: "ocean-itinerary-trends-shaping-2027-brochures",
    title: "Ocean Itinerary Trends Shaping 2027 Brochures",
    category: "ocean",
    categoryLabel: "Ocean",
    date: "2026-04-18",
    author: "Priya Bansal",
    excerpt:
      "Shorter ocean itineraries and bolt-on land programmes are reshaping how mainstream brochures are structured for the next season.",
    body: [
      "Mainstream ocean cruise brochures for 2027 are leaning heavily into shorter itineraries supplemented by structured land programmes, reflecting consumer demand for richer destinations and lower mid-cruise switching friction.",
      "Agents report that the shift simplifies the sales conversation for first-time cruisers and supports stronger pre- and post-cruise sales.",
      "Operators expect the move to widen the addressable cruise audience by appealing to customers who currently view long itineraries as inflexible.",
    ],
    imageKind: "ship",
  },
  {
    slug: "river-suite-bookings-out-perform-twin-cabins",
    title: "River Suite Bookings Out-Perform Twin Cabins",
    category: "river",
    categoryLabel: "River",
    date: "2026-04-16",
    author: "Tom Whitfield",
    excerpt:
      "Premium river product is converting at materially higher rates than entry-grade staterooms across early 2027 sailings.",
    body: [
      "River cruise suite bookings are now running ahead of entry-grade twin cabins for several lines, marking a clear shift in the price-mix of forward bookings.",
      "Agents say the trend reflects both a maturing audience and improved product comparison tools.",
      "Operators expect the gap to widen further as more lines refresh their suite offerings.",
    ],
    imageKind: "river",
  },
  {
    slug: "agency-loyalty-tools-target-cruise-repeat-bookings",
    title: "Agency Loyalty Tools Target Cruise Repeat Bookings",
    category: "latest",
    categoryLabel: "Latest",
    date: "2026-04-14",
    author: "Helena Marsh",
    excerpt:
      "New cross-line loyalty solutions are giving independent agencies a sharper way to lock in repeat cruise bookings.",
    body: [
      "Independent agencies are deploying cross-line loyalty programmes designed to keep repeat cruise customers in the agency channel rather than migrating direct.",
      "Early results from pilot programmes show repeat capture rates rising by ten to fifteen percentage points within a year of launch.",
      "Suppliers have largely welcomed the trend, on the basis that the booking source remains intermediated.",
    ],
    imageKind: "generic",
    trending: true,
  },
  {
    slug: "expedition-pricing-firms-up-for-2027-season",
    title: "Expedition Pricing Firms Up for 2027 Season",
    category: "expedition",
    categoryLabel: "Expedition",
    date: "2026-04-12",
    author: "Daniel Okafor",
    excerpt:
      "Polar capacity remains tight, supporting headline pricing for the 2027 expedition cruise season.",
    body: [
      "Polar expedition capacity for 2027 is essentially sold through across several leading operators, with pricing trending up by mid-single digits compared with the 2026 season.",
      "Agents have been advised to bring forward conversations on flagship Antarctic departures, where space is now genuinely scarce.",
      "Lines are also pushing earlier deposit windows to support stronger forward visibility.",
    ],
    imageKind: "expedition",
  },
  {
    slug: "cabin-upgrade-flows-deliver-stronger-yields",
    title: "Cabin Upgrade Flows Deliver Stronger Yields",
    category: "cabins",
    categoryLabel: "Cabins",
    date: "2026-04-10",
    author: "Priya Bansal",
    excerpt:
      "Restructured upgrade conversations are unlocking measurable yield gains for agencies focused on the suite-grade segment.",
    body: [
      "Restructured cabin upgrade flows are now generating measurable yield improvements for agencies that have invested in agent training on suite-tier products.",
      "The change is most visible on long-haul ocean and river itineraries, where the marginal upgrade conversion is higher.",
      "Operators are expected to expand suite-tier brochure coverage further in 2027.",
    ],
    imageKind: "cabin",
  },
  {
    slug: "luxury-yacht-lines-court-uk-trade",
    title: "Luxury Yacht Lines Court UK Trade",
    category: "luxury",
    categoryLabel: "Luxury",
    date: "2026-04-08",
    author: "Tom Whitfield",
    excerpt:
      "Two new yacht-class operators are courting UK agents with bespoke training and elevated commercial terms.",
    body: [
      "Two yacht-class luxury operators have stepped up their UK trade outreach, with bespoke training programmes and enhanced commercial terms now available to high-performing agencies.",
      "Agents say the product is uniquely suited to clients seeking small group experiences and increasingly views it as a stepping stone to private charter.",
      "Both lines have signalled plans to double UK headcount over the next twelve months.",
    ],
    imageKind: "ship",
  },
  {
    slug: "ocean-fly-cruise-packages-return-to-the-fore",
    title: "Ocean Fly Cruise Packages Return to the Fore",
    category: "ocean",
    categoryLabel: "Ocean",
    date: "2026-04-06",
    author: "Helena Marsh",
    excerpt:
      "Fly-cruise bundling is returning as a primary growth lever, particularly across Mediterranean and Caribbean itineraries.",
    body: [
      "Fly-cruise packaging is regaining prominence as operators rebalance their distribution mix, with agents reporting stronger conversion on bundled departures.",
      "Lines have responded by widening fly-cruise inventory and simplifying departure-city options.",
      "The trend is particularly visible in Mediterranean and Caribbean programmes, where bundled pricing closes the gap with cruise-only competitors.",
    ],
    imageKind: "ship",
  },
  {
    slug: "river-cruise-tariff-design-rewards-loyal-agents",
    title: "River Cruise Tariff Design Rewards Loyal Agents",
    category: "river",
    categoryLabel: "River",
    date: "2026-04-04",
    author: "Daniel Okafor",
    excerpt:
      "Reworked commission ladders now favour agencies that maintain consistent booking volumes through the year.",
    body: [
      "River cruise commission ladders are being restructured to reward consistent year-round booking volume rather than peak-season spikes.",
      "Several lines have introduced quarterly accelerators that recognise agencies maintaining stable production.",
      "Agents broadly view the change as positive, particularly for businesses with structured cruise plans.",
    ],
    imageKind: "river",
  },
  {
    slug: "wave-awards-2026-opens-entries",
    title: "Wave Awards 2026 Opens Entries",
    category: "latest",
    categoryLabel: "Latest",
    date: "2026-04-02",
    author: "Priya Bansal",
    excerpt:
      "The UK cruise industry's longest-running awards programme has confirmed the criteria and entry windows for 2026.",
    body: [
      "The Wave Awards 2026 entry window is now open, with refreshed criteria across the agency, marketing, and supplier categories.",
      "Organisers say submission volumes are tracking well ahead of last year, reflecting the maturing recognition the awards command across the UK trade.",
      "Shortlisted entrants will be confirmed in early autumn ahead of the ceremony.",
    ],
    imageKind: "stage",
    trending: true,
  },
  {
    slug: "cruise-summit-2026-agenda-preview",
    title: "Cruise Summit 2026 Agenda Preview",
    category: "latest",
    categoryLabel: "Latest",
    date: "2026-04-01",
    author: "Tom Whitfield",
    excerpt:
      "Cruise Summit 2026 will tilt heavily toward commercial strategy, with new sessions targeted at agency owners and team leads.",
    body: [
      "The Cruise Summit 2026 agenda has been confirmed, with a clear tilt toward commercial strategy and agency-level operational excellence.",
      "Owner-track sessions cover topics including loyalty design, partner concentration, and forward visibility.",
      "Suppliers will hold separate breakouts focused on product readiness and brochure design.",
    ],
    imageKind: "stage",
  },
  {
    slug: "cruise-stars-returns-with-new-agent-recognition-format",
    title: "Cruise Stars Returns with New Agent Recognition Format",
    category: "latest",
    categoryLabel: "Latest",
    date: "2026-03-30",
    author: "Helena Marsh",
    excerpt:
      "Cruise Stars 2026 introduces a revised judging framework focused on agent capability and customer outcomes.",
    body: [
      "Cruise Stars 2026 has introduced a revised judging framework that places greater emphasis on agent capability and demonstrable customer outcomes.",
      "Categories now include a dedicated track for first-cruise conversion excellence.",
      "Entries close in the autumn ahead of the spring 2027 ceremony.",
    ],
    imageKind: "stage",
  },
  {
    slug: "cruise-challenge-training-hub",
    title: "Cruise Challenge Training Hub",
    category: "latest",
    categoryLabel: "Latest",
    date: "2026-03-28",
    author: "Daniel Okafor",
    excerpt:
      "The Cruise Challenge training hub launches with three new modules focused on selling small ship product.",
    body: [
      "The Cruise Challenge training hub is now live with three new modules dedicated to small ship and yacht-class selling.",
      "Each module includes practical role play, brochure dissection, and an end-of-module assessment.",
      "Agencies completing all three modules will be entered into the annual Cruise Challenge leaderboard.",
    ],
    imageKind: "training",
  },
  {
    slug: "agents-flag-strong-interest-in-grand-voyages",
    title: "Agents Flag Strong Interest in Grand Voyages",
    category: "latest",
    categoryLabel: "Latest",
    date: "2026-03-26",
    author: "Priya Bansal",
    excerpt:
      "Long-itinerary grand voyage product is generating its strongest forward sales in five years.",
    body: [
      "Grand voyage product across luxury and premium ocean lines is generating its strongest forward sales in five years, with several itineraries already at high pre-deposit conversion.",
      "Agents say the product is benefiting from a stronger value narrative compared with shorter premium itineraries.",
      "Operators are responding with deeper pre- and post-cruise programmes to extend the customer journey further.",
    ],
    imageKind: "ship",
  },
  {
    slug: "ocean-shore-excursion-margins-tighten",
    title: "Ocean Shore Excursion Margins Tighten",
    category: "ocean",
    categoryLabel: "Ocean",
    date: "2026-03-24",
    author: "Tom Whitfield",
    excerpt:
      "Excursion supply costs have risen ahead of forward selling rates, squeezing margins on bundled shore programmes.",
    body: [
      "Shore excursion margins are tightening as supplier costs rise faster than forward customer pricing.",
      "Lines have responded by simplifying shore product portfolios and prioritising owner-operated tours.",
      "Agents say the change has reduced product confusion at the point of sale.",
    ],
    imageKind: "ship",
  },
  {
    slug: "river-cruise-marketing-shifts-to-storytelling",
    title: "River Cruise Marketing Shifts to Storytelling",
    category: "river",
    categoryLabel: "River",
    date: "2026-03-22",
    author: "Helena Marsh",
    excerpt:
      "Operators are leaning into editorial-style brand storytelling, with measurable lift in agent enquiry volume.",
    body: [
      "River cruise marketing has shifted decisively toward editorial-style storytelling, with measurable improvements in agent-led enquiry volume.",
      "The change reflects an explicit acknowledgement that the river product is sold as much through narrative as through feature listing.",
      "Agents have welcomed the shift, particularly the move toward share-friendly long-form content.",
    ],
    imageKind: "river",
  },
  {
    slug: "luxury-lines-bring-back-extended-pre-cruise-stays",
    title: "Luxury Lines Bring Back Extended Pre Cruise Stays",
    category: "luxury",
    categoryLabel: "Luxury",
    date: "2026-03-20",
    author: "Daniel Okafor",
    excerpt:
      "Multi-night pre-cruise hotel programmes are returning across luxury cruise itineraries, reshaping land-side margins.",
    body: [
      "Luxury lines are systematically reintroducing extended pre-cruise hotel programmes, often spanning two or more nights at the embarkation city.",
      "Agents say the change supports a more complete trip narrative and lifts ancillary revenue.",
      "The trend is most evident on transatlantic and Asia-origin itineraries.",
    ],
    imageKind: "ship",
  },
  {
    slug: "cabins-with-a-view-still-command-a-premium",
    title: "Cabins With a View Still Command a Premium",
    category: "cabins",
    categoryLabel: "Cabins",
    date: "2026-03-18",
    author: "Priya Bansal",
    excerpt:
      "Balcony cabin demand remains robust, with the price premium over oceanview tiers stable into 2027.",
    body: [
      "Balcony cabin demand has held firm across mainstream and premium ocean cruise, with the price premium over oceanview tiers stable into the 2027 season.",
      "Operators continue to expand balcony share within new build programmes.",
      "Agents say the consistency makes the upgrade conversation materially easier at the point of sale.",
    ],
    imageKind: "cabin",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  if (category === "latest") return [...articles];
  return articles.filter((a) => a.category === category);
}

export function getTrendingArticles(limit = 5): Article[] {
  return articles.filter((a) => a.trending).slice(0, limit);
}

export function getEditorsPicks(limit = 3): Article[] {
  return articles.filter((a) => a.editorsPick).slice(0, limit);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];
  return articles
    .filter((a) => a.slug !== slug && a.category === current.category)
    .slice(0, limit);
}
