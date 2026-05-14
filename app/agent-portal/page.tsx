"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { TabsNav } from "@/components/sections/TabsNav";
import { AgentIncentivesGrid } from "@/components/sections/AgentIncentivesGrid";
import { useLocalState } from "@/lib/hooks/useLocalState";
import { agentItems, agentTypeLabels } from "@/data/agentPortal";

const TABS = [
  { label: "All live", value: "all" },
  { label: agentTypeLabels.competition, value: "competition" },
  { label: agentTypeLabels.incentive, value: "incentive" },
  { label: agentTypeLabels.offer, value: "offer" },
  { label: "Saved", value: "saved" },
];

export default function AgentPortalPage() {
  const [tab, setTab] = useState("all");
  const [saved] = useLocalState<string[]>("ctn:agentSaved", []);

  const filtered =
    tab === "all"
      ? agentItems
      : tab === "saved"
        ? agentItems.filter((i) => saved.includes(i.slug))
        : agentItems.filter((i) => i.type === tab);

  return (
    <>
      <PageHero
        eyebrow="Agent Portal"
        title="Live competitions, incentives, and offers"
        description="A single home for trade-only competitions, incentives, and exclusive offers from CTN supplier partners."
      />

      <Container className="py-10">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Agent Portal" }]}
        />
        <div className="mt-2 text-xs uppercase tracking-[0.16em] text-zinc-500">
          Saved on this device: {saved.length}
        </div>
        <div className="mt-6">
          <TabsNav tabs={TABS} active={tab} onChange={setTab} />
        </div>
        <div className="mt-6">
          <AgentIncentivesGrid items={filtered} />
        </div>
      </Container>
    </>
  );
}
