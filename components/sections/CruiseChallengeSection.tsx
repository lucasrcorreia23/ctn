import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import type { ChallengeEvent } from "@/data/events";

interface CruiseChallengeSectionProps {
  events: ChallengeEvent[];
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CruiseChallengeSection({
  events,
  title = "Next Cruise Challenge",
  ctaLabel = "See the full calendar →",
  ctaHref = "/events",
}: CruiseChallengeSectionProps) {
  return (
    <section className="border-b border-zinc-200 bg-white" aria-labelledby="cruise-challenge-heading">
      <Container className="py-12 lg:py-16">
        <div className="flex items-end justify-between">
          <h2
            id="cruise-challenge-heading"
            className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl"
          >
            {title}
          </h2>
          <Link
            href={ctaHref}
            className="text-sm text-zinc-900 underline-offset-2 hover:underline"
          >
            {ctaLabel}
          </Link>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <li key={event.title}>
              <Link
                href="/events/cruise-challenge"
                className="group block border border-zinc-200 bg-white p-[17px] hover:border-zinc-400 transition-colors"
              >
                <div className="overflow-hidden border border-zinc-200 bg-zinc-100">
                  <Placeholder kind={event.imageKind} ratio="16/9" />
                </div>
                <div className="mt-3 flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.region}</span>
                  </div>
                  <p className="text-base font-bold leading-snug text-zinc-900 group-hover:underline">
                    {event.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
