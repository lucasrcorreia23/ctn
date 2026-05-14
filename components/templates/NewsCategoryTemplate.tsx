"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { LinkButton, Button } from "@/components/ui/Button";
import { useLocalState } from "@/lib/hooks/useLocalState";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { ArticleGrid } from "@/components/sections/ArticleGrid";
import { FilterBar } from "@/components/sections/FilterBar";
import { SortControl } from "@/components/sections/SortControl";
import { TrendingList } from "@/components/sections/TrendingList";
import {
  type Article,
  type ArticleCategory,
  categoryLabels,
} from "@/data/articles";

const TONE_FILTERS = [
  { label: "Trending only", value: "trending" },
  { label: "Editor's pick", value: "editors" },
  { label: "Latest", value: "latest" },
];

const SUB_CATEGORY_OPTIONS = (
  Object.keys(categoryLabels) as ArticleCategory[]
)
  .filter((c) => c !== "latest")
  .map((c) => ({ value: c, label: categoryLabels[c] }));

interface NewsCategoryTemplateProps {
  category: ArticleCategory;
  articles: Article[];
  trending: Article[];
  description?: string;
}

export function NewsCategoryTemplate({
  category,
  articles,
  trending,
  description,
}: NewsCategoryTemplateProps) {
  const label = categoryLabels[category];
  const isLatest = category === "latest";

  const [tone, setTone] = useState<string[]>([]);
  const [subCats, setSubCats] = useState<string[]>([]);
  const [sort, setSort] = useState<"newest" | "oldest" | "title">("newest");
  const [followed, setFollowed] = useLocalState<string[]>(
    "ctn:followedCategories",
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
    let list = [...articles];
    if (tone.includes("trending")) list = list.filter((a) => a.trending);
    if (tone.includes("editors")) list = list.filter((a) => a.editorsPick);
    if (isLatest && subCats.length > 0) {
      list = list.filter((a) => subCats.includes(a.category));
    }
    list.sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      if (sort === "oldest") return a.date.localeCompare(b.date);
      return b.date.localeCompare(a.date);
    });
    return list;
  }, [articles, tone, subCats, sort, isLatest]);

  return (
    <>
      <PageHero
        eyebrow={isLatest ? "Latest from CTN" : `News · ${label}`}
        title={isLatest ? "Latest news" : `${label} cruise news`}
        description={
          description ??
          (isLatest
            ? "The most recent stories across the CTN newsroom, updated continuously."
            : `Editorial coverage of ${label.toLowerCase()} cruise from the CTN newsroom.`)
        }
      />

      <Container className="py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News", href: "/news" },
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
              <div className="flex-1 space-y-3">
                <FilterBar
                  label="Tone"
                  options={TONE_FILTERS}
                  active={tone}
                  onChange={setTone}
                  onClear={() => setTone([])}
                />
                {isLatest ? (
                  <FilterBar
                    label="Topic"
                    options={SUB_CATEGORY_OPTIONS}
                    active={subCats}
                    onChange={setSubCats}
                    onClear={() => setSubCats([])}
                  />
                ) : null}
              </div>
              <div className="flex items-center justify-end pt-2">
                <SortControl
                  value={sort}
                  onChange={(v) => setSort(v as typeof sort)}
                  options={[
                    { label: "Newest", value: "newest" },
                    { label: "Oldest", value: "oldest" },
                    { label: "Title A–Z", value: "title" },
                  ]}
                />
              </div>
            </div>

            <div className="mt-6">
              <ArticleGrid
                articles={filtered}
                hrefBase="/news"
                emptyTitle="No stories match"
                emptyDescription="Try clearing tone or topic filters to see more."
              />
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <TrendingList articles={trending.slice(0, 5)} />
            <div className="border border-zinc-200 bg-white p-5">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                Browse other topics
              </div>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
                {(Object.keys(categoryLabels) as ArticleCategory[]).map((c) => (
                  <li key={c}>
                    <LinkButton
                      href={`/news/${c}`}
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                    >
                      {categoryLabels[c]}
                    </LinkButton>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
