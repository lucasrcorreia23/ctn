import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { TrendingList } from "@/components/sections/TrendingList";
import {
  articles,
  categoryLabels,
  type ArticleCategory,
  getTrendingArticles,
} from "@/data/articles";

const ORDER: ArticleCategory[] = [
  "ocean",
  "river",
  "luxury",
  "expedition",
  "cabins",
  "latest",
];

export default function NewsHubPage() {
  const trending = getTrendingArticles(5);
  return (
    <>
      <PageHero
        eyebrow="News"
        title="The CTN newsroom"
        description="Daily news and reporting on the UK cruise sector, organised by product category."
      />

      <Container className="py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "News" },
          ]}
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            {ORDER.map((category) => {
              const list = articles
                .filter((a) =>
                  category === "latest" ? true : a.category === category,
                )
                .slice(0, 3);
              return (
                <section key={category}>
                  <div className="flex items-end justify-between">
                    <div>
                      <SectionLabel>{categoryLabels[category]}</SectionLabel>
                      <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900">
                        {category === "latest"
                          ? "Latest stories"
                          : `${categoryLabels[category]} cruise`}
                      </h2>
                    </div>
                    <LinkButton
                      href={`/news/${category}`}
                      variant="outline"
                      size="sm"
                    >
                      All {categoryLabels[category]}
                    </LinkButton>
                  </div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {list.map((article) => (
                      <ArticleCard key={article.slug} article={article} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
          <aside className="lg:col-span-4">
            <TrendingList articles={trending} />
          </aside>
        </div>
      </Container>
    </>
  );
}
