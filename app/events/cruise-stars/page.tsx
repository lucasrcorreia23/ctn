import { notFound } from "next/navigation";
import { EventDetailTemplate } from "@/components/templates/EventDetailTemplate";
import { getEventBySlug } from "@/data/events";

export default function CruiseStarsPage() {
  const event = getEventBySlug("cruise-stars");
  if (!event) notFound();
  return <EventDetailTemplate event={event} />;
}
