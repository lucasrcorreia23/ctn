import { notFound } from "next/navigation";
import { EventDetailTemplate } from "@/components/templates/EventDetailTemplate";
import { getEventBySlug } from "@/data/events";

export default function CruiseSummit2026Page() {
  const event = getEventBySlug("cruise-summit-2026");
  if (!event) notFound();
  return <EventDetailTemplate event={event} />;
}
