"use client";

import { useMemo, useState } from "react";
import { AgentIncentiveCard } from "@/components/sections/AgentIncentiveCard";
import { EmptyState } from "@/components/sections/EmptyState";
import { FilterBar } from "@/components/sections/FilterBar";
import { SortControl } from "@/components/sections/SortControl";
import {
  agentTypeLabels,
  type AgentItem,
} from "@/data/agentPortal";

export function AgentIncentivesGrid({
  items,
  showTypeFilter = true,
}: {
  items: AgentItem[];
  showTypeFilter?: boolean;
}) {
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [sort, setSort] = useState<"end-asc" | "end-desc" | "title">("end-asc");

  const filtered = useMemo(() => {
    let list = [...items];
    if (activeTypes.length > 0) {
      list = list.filter((i) => activeTypes.includes(i.type));
    }
    list.sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "end-desc") return b.endsAt.localeCompare(a.endsAt);
      return a.endsAt.localeCompare(b.endsAt);
    });
    return list;
  }, [items, activeTypes, sort]);

  return (
    <div className="space-y-6">
      {showTypeFilter ? (
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <FilterBar
            label="Type"
            className="flex-1"
            options={Object.entries(agentTypeLabels).map(([value, label]) => ({
              value,
              label,
            }))}
            active={activeTypes}
            onChange={setActiveTypes}
            onClear={() => setActiveTypes([])}
          />
          <div className="flex items-center justify-end px-1 py-2">
            <SortControl
              value={sort}
              onChange={(v) => setSort(v as typeof sort)}
              options={[
                { label: "Ending soonest", value: "end-asc" },
                { label: "Ending latest", value: "end-desc" },
                { label: "Title A–Z", value: "title" },
              ]}
            />
          </div>
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <EmptyState
          title="No live items"
          description="Try clearing the type filter to see everything currently live."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <AgentIncentiveCard key={item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
