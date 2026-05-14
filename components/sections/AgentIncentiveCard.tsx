"use client";

import { useLocalState } from "@/lib/hooks/useLocalState";
import type { AgentItem } from "@/data/agentPortal";

const TYPE_LABEL: Record<AgentItem["type"], string> = {
  competition: "Competition",
  incentive: "Incentive",
  offer: "Offer",
};

export function AgentIncentiveCard({ item }: { item: AgentItem }) {
  const [saved, setSaved] = useLocalState<string[]>("ctn:agentSaved", []);
  const isSaved = saved.includes(item.slug);

  const toggle = () => {
    setSaved((prev) =>
      prev.includes(item.slug)
        ? prev.filter((s) => s !== item.slug)
        : [...prev, item.slug],
    );
  };

  return (
    <article className="flex flex-col gap-3 border border-zinc-200 bg-white p-5">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-zinc-500">
        <span>{TYPE_LABEL[item.type]}</span>
        <span>Ends {item.endsAt}</span>
      </div>
      <h3 className="text-lg font-semibold leading-snug text-zinc-900">
        {item.title}
      </h3>
      <div className="text-xs text-zinc-500">{item.brand}</div>
      <p className="text-sm text-zinc-600">{item.summary}</p>
      <div className="mt-2 inline-flex w-fit items-center gap-2 border border-zinc-300 bg-zinc-50 px-2 py-1 text-xs text-zinc-700">
        Reward: {item.reward}
      </div>
      <button
        type="button"
        onClick={toggle}
        className={`mt-3 inline-flex h-9 items-center justify-center border px-3 text-sm ${
          isSaved
            ? "border-zinc-900 bg-zinc-900 text-white"
            : "border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50"
        }`}
        aria-pressed={isSaved}
      >
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </article>
  );
}
