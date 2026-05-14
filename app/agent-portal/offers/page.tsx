import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { AgentIncentivesGrid } from "@/components/sections/AgentIncentivesGrid";
import { getAgentItemsByType } from "@/data/agentPortal";

export default function OffersPage() {
  const items = getAgentItemsByType("offer");
  return (
    <>
      <PageHero
        eyebrow="Agent Portal · Offers"
        title="Client exclusive offers"
        description="Trade-only client offers across the cruise portfolio, refreshed each week."
      />
      <Container className="py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Agent Portal", href: "/agent-portal" },
            { label: "Offers" },
          ]}
        />
        <div className="mt-8">
          <AgentIncentivesGrid items={items} showTypeFilter={false} />
        </div>
      </Container>
    </>
  );
}
