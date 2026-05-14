import { notFound } from "next/navigation";
import { EventDetailTemplate } from "@/components/templates/EventDetailTemplate";
import { getEventBySlug } from "@/data/events";

export default function CruiseChallengePage() {
  const event = getEventBySlug("cruise-challenge");
  if (!event) notFound();
  return <EventDetailTemplate event={event} />;
}
