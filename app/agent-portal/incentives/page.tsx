import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { AgentIncentivesGrid } from "@/components/sections/AgentIncentivesGrid";
import { getAgentItemsByType } from "@/data/agentPortal";

export default function IncentivesPage() {
  const items = getAgentItemsByType("incentive");
  return (
    <>
      <PageHero
        eyebrow="Agent Portal · Incentives"
        title="Live agent incentives"
        description="Commission accelerators, loyalty fast-tracks, and supplier rewards live now."
      />
      <Container className="py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Agent Portal", href: "/agent-portal" },
            { label: "Incentives" },
          ]}
        />
        <div className="mt-8">
          <AgentIncentivesGrid items={items} showTypeFilter={false} />
        </div>
      </Container>
    </>
  );
}
