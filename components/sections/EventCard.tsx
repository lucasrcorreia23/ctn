import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder";
import type { EventItem } from "@/data/events";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col gap-3 border border-zinc-200 bg-white p-4 hover:border-zinc-400"
    >
      <Placeholder kind={event.imageKind} ratio="16/9" />
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
        <span>{event.status}</span>
        <span aria-hidden>·</span>
        <span>{event.location}</span>
      </div>
      <h3 className="text-lg font-semibold leading-snug text-zinc-900 group-hover:underline">
        {event.title}
      </h3>
      <p className="text-sm text-zinc-600">{event.tagline}</p>
      <div className="mt-auto text-xs uppercase tracking-[0.16em] text-zinc-500">
        {event.date}
      </div>
    </Link>
  );
}
