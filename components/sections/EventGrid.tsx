import { EventCard } from "@/components/sections/EventCard";
import type { EventItem } from "@/data/events";

export function EventGrid({ events }: { events: EventItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.slug} event={event} />
      ))}
    </div>
  );
}
