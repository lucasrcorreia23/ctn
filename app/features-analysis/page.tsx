import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { ArticleCard } from "@/components/sections/ArticleCard";
import {
  features,
  type FeatureCategory,
  featureCategoryLabels,
} from "@/data/features";

const ORDER: FeatureCategory[] = [
  "analysis-comment",
  "interviews",
  "mktg-tips",
  "cruise-review",
];

export default function FeaturesAnalysisHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Features & Analysis"
        title="Long-form analysis from the CTN newsroom"
        description="Editorial commentary, interviews, marketing tips, and cruise reviews built for the UK trade."
      />

      <Container className="py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Features & Analysis" },
          ]}
        />

        <div className="mt-8 space-y-12">
          {ORDER.map((category) => {
            const list = features
              .filter((f) => f.category === category)
              .slice(0, 3);
            return (
              <section key={category}>
                <div className="flex items-end justify-between">
                  <div>
                    <SectionLabel>
                      {featureCategoryLabels[category]}
                    </SectionLabel>
                    <h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900">
                      {featureCategoryLabels[category]}
                    </h2>
                  </div>
                  <LinkButton
                    href={`/features-analysis/${category}`}
                    variant="outline"
                    size="sm"
                  >
                    View all
                  </LinkButton>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {list.map((feature) => (
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
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </Container>
    </>
  );
}
