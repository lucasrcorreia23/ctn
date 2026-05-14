import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { LinkButton } from "@/components/ui/Button";
import { toneFor } from "@/lib/categoryStyle";
import type { EventItem } from "@/data/events";

export function EventsPromo({ events }: { events: EventItem[] }) {
  if (events.length === 0) return null;

  const [featured, ...rest] = events;
  const remaining = rest.slice(0, 3);
  const eventTone = toneFor("event");

  return (
    <section
      className="border-b border-zinc-200 bg-white"
      aria-labelledby="events-promo"
    >
      <Container className="py-12 lg:py-16">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
           
            <h2
              id="events-promo"
              className="mt-2 text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl"
            >
              Where the UK cruise trade meets
            </h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-600 sm:text-base">
              Industry awards, summit programming, and structured agent
              recognition across the year.
            </p>
          </div>
          <Link
            href="/events"
            className="text-sm font-medium text-zinc-900 underline-offset-2 hover:underline"
          >
            See the full calendar →
          </Link>
        </div>

        <article className="mt-10 border border-zinc-200 bg-zinc-50">
          <div className="grid gap-0 lg:grid-cols-12">
            <Link
              href={`/events/${featured.slug}`}
              aria-hidden="true"
              tabIndex={-1}
              className="block lg:col-span-7"
            >
              <Placeholder kind={featured.imageKind} ratio="16/9" />
            </Link>
            <div className="flex flex-col gap-4 p-6 lg:col-span-5 lg:p-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                <span className="border border-zinc-300 bg-white px-2 py-0.5 text-zinc-700">
                  Featured
                </span>
                <span className={eventTone}>Event</span>
                <span aria-hidden>·</span>
                <span>{featured.status}</span>
                <span aria-hidden>·</span>
                <span>{featured.location}</span>
              </div>
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
                <Link
                  href={`/events/${featured.slug}`}
                  className="hover:underline"
                >
                  {featured.title}
                </Link>
              </h3>
              <p className="text-sm text-zinc-600 sm:text-base">
                {featured.tagline}
              </p>
              <div className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                <time>{featured.date}</time>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                <LinkButton
                  href={`/events/${featured.slug}`}
                  variant="primary"
                  size="sm"
                >
                  View event
                </LinkButton>
              </div>
            </div>
          </div>
        </article>

        {remaining.length > 0 ? (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {remaining.map((event) => (
              <li key={event.slug}>
                <article className="flex h-full flex-col">
                  <Link
                    href={`/events/${event.slug}`}
                    className="group flex h-full flex-col gap-3 border border-zinc-200 bg-white p-4 hover:border-zinc-400"
                  >
                    <Placeholder kind={event.imageKind} ratio="16/9" />
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                      <span className={eventTone}>Event</span>
                      <span aria-hidden>·</span>
                      <span>{event.status}</span>
                      <span aria-hidden>·</span>
                      <span>{event.location}</span>
                    </div>
                    <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:underline">
                      {event.title}
                    </h3>
                    <div className="mt-auto text-xs text-zinc-500">
                      <time>{event.date}</time>
                    </div>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}
