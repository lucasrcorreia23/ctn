import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArticleCard } from "@/components/sections/ArticleCard";
import type { Article } from "@/data/articles";

export function FeaturedArticleRail({
  eyebrow = "Editor's Pick",
  title = "Editor selected reading",
  articles,
  hrefBase = "/news",
}: {
  eyebrow?: string;
  title?: string;
  articles: Article[];
  hrefBase?: string;
}) {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <Container className="py-12 lg:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              {title}
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              variant="feature"
              hrefBase={hrefBase}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
