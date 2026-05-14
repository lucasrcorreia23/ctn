import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { DetailHeader } from "@/components/sections/DetailHeader";
import { EventGrid } from "@/components/sections/EventGrid";
import { events, type EventItem } from "@/data/events";

export function EventDetailTemplate({ event }: { event: EventItem }) {
  const others = events.filter((e) => e.slug !== event.slug);

  return (
    <>
      <DetailHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: event.title },
        ]}
        eyebrow={`Events · ${event.status}`}
        title={event.title}
        excerpt={event.tagline}
        meta={`${event.date} · ${event.location}`}
        imageKind={event.imageKind}
        imageRatio="4/3"
      />

      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <article className="space-y-4 text-base leading-relaxed text-zinc-700 lg:col-span-8">
            {event.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </article>
          <aside className="space-y-4 lg:col-span-4">
            <div className="border border-zinc-200 bg-white p-5">
              <SectionLabel>Highlights</SectionLabel>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {event.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span aria-hidden className="text-zinc-400">·</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-zinc-200 bg-zinc-50 p-5">
              <SectionLabel>Register interest</SectionLabel>
              <p className="mt-3 text-sm text-zinc-600">
                This is a wireframe prototype. In the live site this CTA would open
                the registration flow.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <LinkButton href="/contact" variant="primary" size="sm">
                  Request information
                </LinkButton>
                <LinkButton href="/events" variant="outline" size="sm">
                  All CTN events
                </LinkButton>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <section className="border-t border-zinc-200 bg-zinc-50">
        <Container className="py-12">
          <SectionLabel>Other CTN events</SectionLabel>
          <div className="mt-6">
            <EventGrid events={others} />
          </div>
        </Container>
      </section>
    </>
  );
}
