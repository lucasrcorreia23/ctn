"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { TabsNav } from "@/components/sections/TabsNav";
import { MagazineGrid } from "@/components/sections/MagazineGrid";
import { magazineIssues, magazineBrandLabels } from "@/data/magazines";

const TABS = [
  { label: "All issues", value: "all" },
  { label: magazineBrandLabels["cruise-trade-news"], value: "cruise-trade-news" },
  { label: magazineBrandLabels["ctn-digital"], value: "ctn-digital" },
];

export default function MagazinesHubPage() {
  const [tab, setTab] = useState("all");

  const filtered =
    tab === "all"
      ? magazineIssues
      : magazineIssues.filter((m) => m.brand === tab);

  return (
    <>
      <PageHero
        eyebrow="Magazines"
        title="The CTN magazine portfolio"
        description="Print and digital editorial across the UK cruise trade. Browse the latest issues."
      />

      <Container className="py-10">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Magazines" }]}
        />
        <div className="mt-8">
          <TabsNav tabs={TABS} active={tab} onChange={setTab} />
        </div>
        <div className="mt-6">
          <MagazineGrid issues={filtered} />
        </div>
      </Container>
    </>
  );
}
