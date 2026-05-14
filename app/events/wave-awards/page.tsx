import { notFound } from "next/navigation";
import { EventDetailTemplate } from "@/components/templates/EventDetailTemplate";
import { getEventBySlug } from "@/data/events";

export default function WaveAwardsPage() {
  const event = getEventBySlug("wave-awards");
  if (!event) notFound();
  return <EventDetailTemplate event={event} />;
}
