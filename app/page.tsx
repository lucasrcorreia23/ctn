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
import { knowledgeCategories } from "@/data/knowledgeHub";
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

function KnowledgeHubBand({ id }: { id: string }) {
  return (
    <section
      className="border-y border-zinc-900 bg-white"
      aria-labelledby={id}
    >
      <Container className="py-10 lg:py-12">
        <div className="border border-dashed border-zinc-900 bg-zinc-50 p-4 sm:p-6">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-zinc-500">
            <span>AD SLOT · 970 × 250</span>
            <span>CTN Sponsored</span>
          </div>
          <div className="mt-4 grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Placeholder kind="training" ratio="16/9" />
            </div>
            <div className="lg:col-span-7">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                Knowledge Hub · {knowledgeCategories.length} categories
              </div>
              <h2
                id={id}
                className="mt-2 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl"
              >
                Practical training for cruise selling
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-zinc-700 sm:text-base">
                Guides, toolkits, and webinars built with active UK agencies.
                Browse {knowledgeCategories.length} topic areas covering
                selling cruise, destinations, ship knowledge, marketing,
                compliance, and data.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <LinkButton
                  href="/knowledge-hub"
                  variant="primary"
                  size="sm"
                >
                  Open Knowledge Hub
                </LinkButton>
                <LinkButton
                  href="/newsletter"
                  variant="outline"
                  size="sm"
                >
                  Get weekly briefings
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
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
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                News by Category
              </div>
              <h2
                id="news-by-category"
                className="mt-2 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl"
              >
                Across the UK cruise verticals
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
                  <div className="flex items-baseline justify-between border-b border-zinc-900 pb-2">
                    <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                      <Link
                        href={`/news/${block.key}`}
                        className="hover:underline"
                      >
                        {block.label}
                      </Link>
                    </h3>
                    <Link
                      href={`/news/${block.key}`}
                      className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-700 hover:underline"
                    >
                      More {block.label} →
                    </Link>
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

      {/* 8. Knowledge Hub band #1 */}
      <KnowledgeHubBand id="kh-band-1" />

      {/* 9. Magazines + Podcast */}
      <section
        className="border-b border-zinc-200 bg-white"
        aria-labelledby="series-multimedia"
      >
        <Container className="py-12 lg:py-16">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                Magazines & Podcast
              </div>
              <h2
                id="series-multimedia"
                className="mt-2 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl"
              >
                Read the issue, hear the conversation
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* Magazines */}
            <div className="lg:col-span-6">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                  Magazines
                </div>
                <Link
                  href="/magazines"
                  className="text-xs font-semibold text-zinc-900 underline-offset-2 hover:underline"
                >
                  Hub →
                </Link>
              </div>
              <Link
                href={`/magazines/${magazineLead.brand}`}
                className="group mt-4 grid gap-4 sm:grid-cols-[180px_1fr]"
              >
                <Placeholder kind="magazine" ratio="3/4" />
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                    Latest issue · {magazineLead.issue}
                  </span>
                  <h3 className="text-lg font-bold leading-snug text-zinc-900 group-hover:underline sm:text-xl">
                    {magazineLead.title}
                  </h3>
                  <ul className="space-y-1 text-sm text-zinc-700">
                    {magazineLead.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span aria-hidden className="text-zinc-400">
                          ·
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    {magazineLead.pageCount} pages · {magazineLead.date}
                  </div>
                </div>
              </Link>
            </div>

            {/* Podcast */}
            <div className="lg:col-span-6">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                  Podcast
                </div>
                <Link
                  href="/podcast"
                  className="text-xs font-semibold text-zinc-900 underline-offset-2 hover:underline"
                >
                  All episodes →
                </Link>
              </div>
              <Link
                href="/podcast"
                className="group mt-4 flex flex-col gap-3"
              >
                <Placeholder kind="podcast" ratio="16/9" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                  Episode {podcastLead.number} · {podcastLead.duration}
                </span>
                <h3 className="text-lg font-bold leading-snug text-zinc-900 group-hover:underline sm:text-xl">
                  {podcastLead.title}
                </h3>
                <p className="text-sm text-zinc-600">
                  Guest: {podcastLead.guest}
                </p>
              </Link>
              <ol className="mt-4 divide-y divide-zinc-200 border-t border-zinc-200">
                {podcastMore.map((ep) => (
                  <li key={ep.slug} className="py-3">
                    <Link href="/podcast" className="group flex gap-3">
                      <span className="text-lg font-bold tabular-nums text-zinc-300">
                        {ep.number}
                      </span>
                      <div className="flex flex-1 flex-col gap-1">
                        <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                          {ep.duration} · {ep.date}
                        </span>
                        <span className="text-sm font-semibold leading-snug text-zinc-900 group-hover:underline">
                          {ep.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ol>
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

      {/* 14. Knowledge Hub band #2 */}
      <KnowledgeHubBand id="kh-band-2" />

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
