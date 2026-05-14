import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Placeholder } from "@/components/ui/Placeholder";
import { LinkButton } from "@/components/ui/Button";
import { TrendingList } from "@/components/sections/TrendingList";
import { PodcastBlock } from "@/components/sections/PodcastBlock";
import type { Article } from "@/data/articles";
import type { PodcastEpisode } from "@/data/podcast";
import type { MagazineIssue } from "@/data/magazines";

export function CruiseCorner({
  trending,
  episodes,
  magazine,
}: {
  trending: Article[];
  episodes: PodcastEpisode[];
  magazine: MagazineIssue;
}) {
  return (
    <section
      className="border-b border-zinc-200 bg-zinc-50"
      aria-labelledby="cruise-corner"
    >
      <Container className="py-12 lg:py-16">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Cruise Corner</SectionLabel>
            <h2
              id="cruise-corner"
              className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
            >
              The CTN ecosystem at a glance
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600">
              Listen, read, and follow what the UK cruise trade is talking about.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <PodcastBlock variant="card" episodes={episodes} />
          </div>

          <div className="lg:col-span-6">
            <div className="flex h-full flex-col gap-4 border border-zinc-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <SectionLabel>Magazine</SectionLabel>
                <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                  {magazine.issue}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-[160px_1fr]">
                <Placeholder kind="magazine" ratio="3/4" />
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold leading-snug text-zinc-900">
                    <Link
                      href={`/magazines/${magazine.brand}`}
                      className="hover:underline"
                    >
                      {magazine.title}
                    </Link>
                  </h3>
                  <ul className="space-y-1 text-sm text-zinc-600">
                    {magazine.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex gap-2">
                        <span aria-hidden className="text-zinc-400">·</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <LinkButton
                      href={`/magazines/${magazine.brand}`}
                      variant="primary"
                      size="sm"
                    >
                      Read this issue
                    </LinkButton>
                    <LinkButton href="/magazines" variant="outline" size="sm">
                      Magazines hub
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-12">
            <TrendingList
              articles={trending.slice(0, 6)}
              title="Trending hub"
              layout="grid"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
