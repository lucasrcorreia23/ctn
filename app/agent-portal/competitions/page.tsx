import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { AgentIncentivesGrid } from "@/components/sections/AgentIncentivesGrid";
import { getAgentItemsByType } from "@/data/agentPortal";

export default function CompetitionsPage() {
  const items = getAgentItemsByType("competition");
  return (
    <>
      <PageHero
        eyebrow="Agent Portal · Competitions"
        title="Live agent competitions"
        description="Active prize draws and incentive competitions across CTN supplier partners."
      />
      <Container className="py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Agent Portal", href: "/agent-portal" },
            { label: "Competitions" },
          ]}
        />
        <div className="mt-8">
          <AgentIncentivesGrid items={items} showTypeFilter={false} />
        </div>
      </Container>
    </>
  );
}
