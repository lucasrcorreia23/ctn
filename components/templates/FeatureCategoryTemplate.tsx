"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button, LinkButton } from "@/components/ui/Button";
import { useLocalState } from "@/lib/hooks/useLocalState";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { FilterBar } from "@/components/sections/FilterBar";
import { SortControl } from "@/components/sections/SortControl";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { EmptyState } from "@/components/sections/EmptyState";
import {
  type FeatureCategory,
  featureCategoryLabels,
  type Feature,
} from "@/data/features";

const TONE_FILTERS = [
  { label: "By Helena Marsh", value: "Helena Marsh" },
  { label: "By Daniel Okafor", value: "Daniel Okafor" },
  { label: "By Priya Bansal", value: "Priya Bansal" },
  { label: "By Tom Whitfield", value: "Tom Whitfield" },
];

interface FeatureCategoryTemplateProps {
  category: FeatureCategory;
  features: Feature[];
  description?: string;
}

export function FeatureCategoryTemplate({
  category,
  features,
  description,
}: FeatureCategoryTemplateProps) {
  const label = featureCategoryLabels[category];
  const [authors, setAuthors] = useState<string[]>([]);
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [followed, setFollowed] = useLocalState<string[]>(
    "ctn:followedFeatures",
    [],
  );
  const isFollowed = followed.includes(category);

  const toggleFollow = () =>
    setFollowed((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );

  const filtered = useMemo(() => {
    let list = [...features];
    if (authors.length > 0) {
      list = list.filter((f) => authors.includes(f.author));
    }
    list.sort((a, b) =>
      sort === "oldest" ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date),
    );
    return list;
  }, [features, authors, sort]);

  return (
    <>
      <PageHero
        eyebrow={`Features & Analysis · ${label}`}
        title={label}
        description={
          description ??
          `In-depth ${label.toLowerCase()} from the CTN newsroom for the UK cruise trade.`
        }
      />

      <Container className="py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Features & Analysis", href: "/features-analysis" },
              { label },
            ]}
          />
          <Button
            type="button"
            variant={isFollowed ? "primary" : "outline"}
            size="sm"
            onClick={toggleFollow}
          >
            {isFollowed ? `Following ${label}` : `Follow ${label}`}
          </Button>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <FilterBar
                label="Author"
                className="flex-1"
                options={TONE_FILTERS}
                active={authors}
                onChange={setAuthors}
                onClear={() => setAuthors([])}
              />
              <div className="flex items-center justify-end pt-2">
                <SortControl
                  value={sort}
                  onChange={(v) => setSort(v as typeof sort)}
                  options={[
                    { label: "Newest", value: "newest" },
                    { label: "Oldest", value: "oldest" },
                  ]}
                />
              </div>
            </div>

            <div className="mt-6">
              {filtered.length === 0 ? (
                <EmptyState
                  title="No features match"
                  description="Try clearing the author filter."
                />
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {filtered.map((feature) => (
                    <ArticleCard
                      key={feature.slug}
                      hrefBase="/features-analysis"
                      article={{
                        slug: feature.slug,
                        title: feature.title,
                        category: "latest",
                        categoryLabel: feature.categoryLabel,
                        date: feature.date,
                        author: feature.author,
                        excerpt: feature.excerpt,
                        body: feature.body,
                        imageKind: feature.imageKind,
                      }}
                      variant="feature"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <aside className="space-y-4 lg:col-span-4">
            <div className="border border-zinc-200 bg-white p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                Other feature streams
              </div>
              <ul className="mt-3 space-y-2">
                {(Object.keys(featureCategoryLabels) as FeatureCategory[]).map(
                  (c) => (
                    <li key={c}>
                      <LinkButton
                        href={`/features-analysis/${c}`}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                      >
                        {featureCategoryLabels[c]}
                      </LinkButton>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
