"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { articles } from "@/data/articles";
import { features } from "@/data/features";
import { events } from "@/data/events";
import { magazineIssues } from "@/data/magazines";

interface SearchHit {
  href: string;
  title: string;
  group: "Articles" | "Features" | "Events" | "Magazines";
  meta: string;
}

const ALL_HITS: SearchHit[] = [
  ...articles.map<SearchHit>((a) => ({
    href: `/news/${a.slug}`,
    title: a.title,
    group: "Articles",
    meta: `${a.categoryLabel} · ${a.author}`,
  })),
  ...features.map<SearchHit>((f) => ({
    href: `/features-analysis/${f.slug}`,
    title: f.title,
    group: "Features",
    meta: `${f.categoryLabel} · ${f.author}`,
  })),
  ...events.map<SearchHit>((e) => ({
    href: `/events/${e.slug}`,
    title: e.title,
    group: "Events",
    meta: `${e.location} · ${e.status}`,
  })),
  ...magazineIssues.map<SearchHit>((m) => ({
    href: `/magazines/${m.brand}`,
    title: m.title,
    group: "Magazines",
    meta: m.issue,
  })),
];

export function SearchOverlay({
  open,
  onClose,
  initialQuery = "",
}: {
  open: boolean;
  onClose: () => void;
  initialQuery?: string;
}) {
  if (!open) return null;
  return (
    <SearchOverlayInner
      key={initialQuery}
      onClose={onClose}
      initialQuery={initialQuery}
    />
  );
}

function SearchOverlayInner({
  onClose,
  initialQuery,
}: {
  onClose: () => void;
  initialQuery: string;
}) {
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? ALL_HITS.filter(
          (h) =>
            h.title.toLowerCase().includes(q) ||
            h.meta.toLowerCase().includes(q),
        )
      : ALL_HITS.slice(0, 12);
    const map: Record<string, SearchHit[]> = {};
    for (const hit of filtered) {
      (map[hit.group] ||= []).push(hit);
    }
    return map;
  }, [query]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-zinc-900/40 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search Cruise Trade News"
    >
      <div
        className="absolute inset-x-0 top-0 bg-white border-b border-zinc-200"
        onClick={(e) => e.stopPropagation()}
      >
        <Container className="py-6">
          <div className="flex items-center gap-3">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, events, magazines"
              className="flex-1 h-12 border border-zinc-300 px-4 text-base outline-none focus:border-zinc-900"
            />
            <Button variant="outline" onClick={onClose} aria-label="Close search">
              Close
            </Button>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {Object.keys(grouped).length === 0 ? (
              <div className="lg:col-span-2 border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-500">
                No results for &ldquo;{query}&rdquo;.
              </div>
            ) : (
              Object.entries(grouped).map(([group, hits]) => (
                <div key={group} className="border border-zinc-200">
                  <div className="border-b border-zinc-200 bg-zinc-50 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                    {group}
                  </div>
                  <ul className="divide-y divide-zinc-200">
                    {hits.slice(0, 6).map((hit) => (
                      <li key={`${group}-${hit.href}-${hit.title}`}>
                        <Link
                          href={hit.href}
                          onClick={onClose}
                          className="flex flex-col gap-1 px-3 py-3 hover:bg-zinc-50"
                        >
                          <span className="text-sm font-medium text-zinc-900">
                            {hit.title}
                          </span>
                          <span className="text-xs text-zinc-500">{hit.meta}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
