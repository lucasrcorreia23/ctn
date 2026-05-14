import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { EventGrid } from "@/components/sections/EventGrid";
import { events } from "@/data/events";

export default function EventsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="CTN events calendar"
        description="Awards, summit programming, and structured agent recognition across the year."
      />
      <Container className="py-10">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Events" }]}
        />
        <div className="mt-8">
          <EventGrid events={events} />
        </div>
      </Container>
    </>
  );
}
