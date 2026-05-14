import { ArticleCard } from "@/components/sections/ArticleCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Article } from "@/data/articles";

export function RelatedContent({
  articles,
  title = "Related",
  hrefBase = "/news",
}: {
  articles: Article[];
  title?: string;
  hrefBase?: string;
}) {
  if (articles.length === 0) return null;
  return (
    <section className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <SectionLabel>{title}</SectionLabel>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              hrefBase={hrefBase}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
