import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/Button";
import { EditorialHero } from "@/components/sections/EditorialHero";
import { EventsPromo } from "@/components/sections/EventsPromo";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import {
  articles,
  getArticlesByCategory,
  type Article,
  type ArticleCategory,
} from "@/data/articles";
import {
  getFeaturesByCategory,
  type FeatureCategory,
} from "@/data/features";
import { events } from "@/data/events";
import { magazineIssues } from "@/data/magazines";
import { podcastEpisodes } from "@/data/podcast";
import { agentItems } from "@/data/agentPortal";
import { readTimeFromBody } from "@/lib/readTime";

const AGENT_TILES = [
  {
    type: "competition" as const,
    label: "Competitions",
    headline: "Win with the trade",
    description:
      "Fam trips and prize draws across river, ocean, luxury, and expedition.",
    href: "/agent-portal/competitions",
  },
  {
    type: "incentive" as const,
    label: "Incentives",
    headline: "Earn rewards for every booking",
    description:
      "Commission accelerators, loyalty fast-tracks, and seasonal bonuses.",
    href: "/agent-portal/incentives",
  },
  {
    type: "offer" as const,
    label: "Offers",
    headline: "Exclusive offers for clients",
    description:
      "Onboard credit, cabin upgrades, and amenity packages booked through the trade.",
    href: "/agent-portal/offers",
  },
];

const CATEGORY_BLOCKS: {
  key: ArticleCategory;
  label: string;
  hook: string;
}[] = [
  { key: "ocean", label: "Ocean", hook: "Mainstream and premium tonnage" },
  { key: "river", label: "River", hook: "European waterways in focus" },
  { key: "luxury", label: "Luxury", hook: "High-margin small ship product" },
  {
    key: "expedition",
    label: "Expedition",
    hook: "Polar capacity and adventure cruising",
  },
];

const FEATURE_BLOCKS: {
  key: FeatureCategory;
  label: string;
  hook: string;
}[] = [
  {
    key: "analysis-comment",
    label: "Analysis & Comment",
    hook: "How the UK cruise trade is changing",
  },
  {
    key: "interviews",
    label: "Interviews",
    hook: "Voices from the cruise sector",
  },
  {
    key: "mktg-tips",
    label: "Marketing Tips",
    hook: "Practical agency marketing playbook",
  },
  {
    key: "cruise-review",
    label: "Cruise Reviews",
    hook: "First-hand sailings from working agents",
  },
];

function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
}

function AdBanner() {
  return (
    <div className="border-b border-zinc-200 bg-white">
      <Container className="py-4">
        <div className="relative h-36 w-full border border-zinc-300 bg-zinc-100 wf-stripes">
          <span className="absolute top-2 right-2 border border-zinc-300 bg-white px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
            Sponsored
          </span>
        </div>
      </Container>
    </div>
  );
}

export default function HomePage() {
  const sortedArticles = sortByDateDesc(articles);
  const lead = sortedArticles[0];
  const secondary = sortedArticles[1];
  const latestList = sortedArticles.slice(2, 12);

  const usedSlugs = new Set<string>([
    lead.slug,
    secondary.slug,
    ...latestList.map((a) => a.slug),
  ]);

  const magazineLead = magazineIssues[0];

  // Hero row 2: 1 large feature + 2 side articles
  const heroPool: Article[] = sortedArticles
    .filter((a) => !usedSlugs.has(a.slug))
    .slice(0, 3);
  heroPool.forEach((a) => usedSlugs.add(a.slug));
  const [secondFeature, ...heroPair] = heroPool;

  // Latest News mix: 4 most-recent articles not used above
  const latestMixed: Article[] = sortedArticles
    .filter((a) => !usedSlugs.has(a.slug))
    .slice(0, 4);

  const podcastLead = podcastEpisodes[0];
  const podcastMore = podcastEpisodes.slice(1, 4);

  return (
    <>
      {/* 1. Hero — Latest list + 2-row Z-pattern (featured articles + secondary + magazine) */}
      <EditorialHero
        article={lead}
        latest={latestList}
        secondary={secondary}
        magazine={magazineLead}
        secondFeature={secondFeature}
        sidePair={heroPair}
      />

      {/* 3. Wave Awards — featured event (uses EventsPromo light theme) */}
      <EventsPromo events={events} />

     
      {/* 4. News by Category — 4-col grid, each column = category (1 featured image+headline + 3 text-only headlines) */}
      <section
        className="border-b border-zinc-200 bg-white"
        aria-labelledby="news-by-category"
      >
        <Container className="py-12 lg:py-16">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
            
              <h2
                id="news-by-category"
                className="mt-2 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl"
              >
                Across the UK cruise categories
              </h2>
            </div>
            <Link
              href="/news"
              className="text-sm font-semibold text-zinc-900 underline-offset-2 hover:underline"
            >
              All news →
            </Link>
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {CATEGORY_BLOCKS.map((block) => {
              const items = sortByDateDesc(
                getArticlesByCategory(block.key),
              ).slice(0, 4);
              if (items.length === 0) return null;
              const [featured, ...rest] = items;
              return (
                <div key={block.key} className="flex flex-col">
                  <div className="border-b border-zinc-900 pb-2">
                    <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                      <Link
                        href={`/news/${block.key}`}
                        className="hover:underline"
                      >
                        {block.label}
                      </Link>
                    </h3>
                  </div>

                  <article className="mt-4 flex flex-col gap-3">
                    <Link
                      href={`/news/${featured.slug}`}
                      aria-hidden="true"
                      tabIndex={-1}
                      className="block"
                    >
                      <Placeholder kind={featured.imageKind} ratio="4/3" />
                    </Link>
                    <h4 className="text-base font-bold leading-snug text-zinc-900 sm:text-lg">
                      <Link
                        href={`/news/${featured.slug}`}
                        className="hover:underline"
                      >
                        {featured.title}
                      </Link>
                    </h4>
                  </article>

                  {rest.length > 0 ? (
                    <ol className="mt-3 divide-y divide-zinc-200 border-t border-zinc-200">
                      {rest.map((article) => (
                        <li key={article.slug} className="py-3">
                          <Link
                            href={`/news/${article.slug}`}
                            className="block text-sm font-semibold leading-snug text-zinc-900 hover:underline"
                          >
                            {article.title}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 8. Ad banner #1 */}
      <AdBanner />

      {/* 9. Podcast + Magazines */}
      <section className="border-b border-zinc-200 bg-white" aria-label="Podcast and magazines">
        <Container className="py-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-zinc-200">

            {/* LEFT: Podcast */}
            <div className="lg:pr-10">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                  The CTN Podcast
                </span>
                <Link href="/podcast" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-900 hover:underline">
                  See all episodes →
                </Link>
              </div>
              <Link href="/podcast" className="group mt-5 block">
                <Placeholder kind="podcast" ratio="16/9" />
                <p className="mt-3 text-sm font-semibold leading-snug text-zinc-900 group-hover:underline">
                  {podcastLead.title}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{podcastLead.guest}</p>
              </Link>
            </div>

            {/* RIGHT: Magazines */}
            <div className="lg:pl-10">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                  Latest Magazine Editions
                </span>
                <Link href="/magazines" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-900 hover:underline">
                  View all →
                </Link>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {magazineIssues.slice(0, 2).map((mag) => (
                  <Link key={mag.slug} href={`/magazines/${mag.brand}`} className="group">
                    <Placeholder kind="magazine" ratio="3/4" label={mag.issue} />
                    <p className="mt-2 text-xs font-semibold leading-snug text-zinc-900 group-hover:underline">
                      {mag.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 10-13. Features & Analysis — 4 sections, 4 items each */}
      {FEATURE_BLOCKS.map((block) => {
        const items = sortByDateDesc(getFeaturesByCategory(block.key)).slice(
          0,
          4,
        );
        if (items.length < 2) return null;
        return (
          <section
            key={block.key}
            className="border-b border-zinc-200 bg-white"
            aria-labelledby={`features-${block.key}`}
          >
            <Container className="py-12 lg:py-16">
              <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                    {block.label}
                  </div>
                  <h2
                    id={`features-${block.key}`}
                    className="mt-2 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl"
                  >
                    {block.hook}
                  </h2>
                </div>
                <Link
                  href={`/features-analysis/${block.key}`}
                  className="text-sm font-semibold text-zinc-900 underline-offset-2 hover:underline"
                >
                  More {block.label} →
                </Link>
              </div>

              <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((feature) => {
                  const minutes = readTimeFromBody(feature.body);
                  return (
                    <li key={feature.slug}>
                      <Link
                        href={`/features-analysis/${feature.slug}`}
                        className="group flex flex-col gap-3"
                      >
                        <Placeholder kind={feature.imageKind} ratio="16/9" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                          {feature.categoryLabel}
                        </span>
                        <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:underline">
                          {feature.title}
                        </h3>
                        <div className="mt-auto text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                          {feature.author} · {feature.date} · {minutes} min
                          read
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Container>
          </section>
        );
      })}

      {/* 14. Ad banner #2 */}
      <AdBanner />

      {/* 15. Agent Portal CTA */}
      <section
        className="border-b border-zinc-200 bg-white"
        aria-labelledby="agent-routing"
      >
        <Container className="py-12 lg:py-16">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Agent Portal</SectionLabel>
              <h2
                id="agent-routing"
                className="mt-3 text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl"
              >
                Incentives and rewards
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-600">
                Pick a track and head straight to the live opportunities.
              </p>
            </div>
            <Link
              href="/agent-portal"
              className="text-sm font-medium text-zinc-900 underline-offset-2 hover:underline"
            >
              Open the agent portal →
            </Link>
          </div>

          <ul className="mt-8 grid gap-4 lg:grid-cols-3">
            {AGENT_TILES.map((tile) => {
              const count = agentItems.filter(
                (i) => i.type === tile.type,
              ).length;
              return (
                <li key={tile.type}>
                  <article className="flex h-full flex-col gap-3 border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-900">
                    <div className="flex items-center justify-between">
                      <SectionLabel>{tile.label}</SectionLabel>
                      <span className="border border-zinc-300 bg-zinc-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                        {count} active
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold leading-snug text-zinc-900">
                      <Link href={tile.href} className="hover:underline">
                        {tile.headline}
                      </Link>
                    </h3>
                    <p className="text-sm text-zinc-600">{tile.description}</p>
                    <div className="mt-auto pt-2">
                      <LinkButton href={tile.href} variant="outline" size="sm">
                        Browse {tile.label.toLowerCase()}
                      </LinkButton>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* 16. The CTN Briefing — newsletter */}
      <NewsletterCTA />
    </>
  );
}
