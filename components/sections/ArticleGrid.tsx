"use client";

import { useEffect, useState } from "react";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { EmptyState } from "@/components/sections/EmptyState";
import type { Article } from "@/data/articles";

interface ArticleGridProps {
  articles: Article[];
  hrefBase?: string;
  variant?: "default" | "feature";
  /** Show a one-shot skeleton on first mount */
  skeletonOnMount?: boolean;
  emptyTitle?: string;
  emptyDescription?: string;
}

export function ArticleGrid({
  articles,
  hrefBase = "/news",
  variant = "default",
  skeletonOnMount = true,
  emptyTitle,
  emptyDescription,
}: ArticleGridProps) {
  const [loading, setLoading] = useState(skeletonOnMount);

  useEffect(() => {
    if (!skeletonOnMount) return;
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [skeletonOnMount]);

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-3 border border-zinc-200 bg-white p-4"
          >
            <div className="aspect-video w-full animate-pulse bg-zinc-100" />
            <div className="h-3 w-16 animate-pulse bg-zinc-100" />
            <div className="h-4 w-3/4 animate-pulse bg-zinc-100" />
            <div className="h-3 w-full animate-pulse bg-zinc-100" />
            <div className="h-3 w-5/6 animate-pulse bg-zinc-100" />
          </div>
        ))}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <EmptyState
        title={emptyTitle ?? "No stories match"}
        description={emptyDescription ?? "Try clearing filters or selecting a different topic."}
      />
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard
          key={article.slug}
          article={article}
          variant={variant}
          hrefBase={hrefBase}
        />
      ))}
    </div>
  );
}
