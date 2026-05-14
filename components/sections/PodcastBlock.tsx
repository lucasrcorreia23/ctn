import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/Button";
import type { PodcastEpisode } from "@/data/podcast";

export function PodcastBlock({
  episodes,
  variant = "section",
}: {
  episodes: PodcastEpisode[];
  variant?: "section" | "card";
}) {
  if (variant === "card") {
    const featured = episodes[0];
    return (
      <div className="flex flex-col gap-4 border border-zinc-200 bg-white p-5">
        <SectionLabel>CTN Podcast</SectionLabel>
        <Placeholder kind="podcast" ratio="16/9" />
        {featured ? (
          <>
            <div className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
              Episode {featured.number} · {featured.duration}
            </div>
            <Link
              href="/podcast"
              className="text-lg font-semibold leading-snug text-zinc-900 hover:underline"
            >
              {featured.title}
            </Link>
            <p className="text-sm text-zinc-600">{featured.summary}</p>
            <LinkButton href="/podcast" variant="outline" size="sm">
              All episodes
            </LinkButton>
          </>
        ) : null}
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <SectionLabel>CTN Podcast</SectionLabel>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
          Conversations from the UK cruise trade
        </h2>
        <p className="mt-3 text-sm text-zinc-600">
          New episodes most weeks. Subscribe wherever you listen.
        </p>
        <Placeholder kind="podcast" ratio="4/3" className="mt-6" />
      </div>
      <ul className="divide-y divide-zinc-200 border border-zinc-200 bg-white lg:col-span-7">
        {episodes.map((ep) => (
          <li key={ep.slug} className="px-5 py-4">
            <div className="flex items-start gap-4">
              <div className="text-2xl font-semibold tabular-nums text-zinc-300">
                {ep.number}
              </div>
              <div className="flex-1">
                <div className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                  {ep.date} · {ep.duration}
                </div>
                <div className="mt-1 text-base font-semibold text-zinc-900">
                  {ep.title}
                </div>
                <div className="mt-1 text-sm text-zinc-600">{ep.summary}</div>
                <div className="mt-2 text-xs text-zinc-500">Guest: {ep.guest}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
