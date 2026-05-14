"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { TabsNav } from "@/components/sections/TabsNav";
import { KnowledgeCategoryGrid } from "@/components/sections/KnowledgeCategoryGrid";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  knowledgeCategories,
  knowledgeResources,
} from "@/data/knowledgeHub";

const TABS = [
  { label: "Categories", value: "categories" },
  { label: "Latest resources", value: "latest" },
];

export default function KnowledgeHubPage() {
  const [tab, setTab] = useState("categories");
  const resources = useMemo(() => knowledgeResources, []);

  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Practical resources for cruise agents"
        description="Guides, toolkits, courses, and webinars built for selling cruise across the UK trade."
      />

      <Container className="py-10">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Knowledge Hub" }]}
        />
        <div className="mt-8">
          <TabsNav tabs={TABS} active={tab} onChange={setTab} />
        </div>

        {tab === "categories" ? (
          <div className="mt-8">
            <KnowledgeCategoryGrid categories={knowledgeCategories} />
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <article
                key={r.slug}
                className="flex flex-col gap-3 border border-zinc-200 bg-white p-5"
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                  <span>{r.format}</span>
                  <span>{r.duration}</span>
                </div>
                <SectionLabel>{r.category}</SectionLabel>
                <h3 className="text-base font-semibold leading-snug text-zinc-900">
                  {r.title}
                </h3>
                <p className="text-sm text-zinc-600">{r.summary}</p>
              </article>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
