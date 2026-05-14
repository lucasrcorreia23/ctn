import { notFound } from "next/navigation";
import { ArticleDetailTemplate } from "@/components/templates/ArticleDetailTemplate";
import {
  features,
  getFeatureBySlug,
  getRelatedFeatures,
} from "@/data/features";
import type { Article } from "@/data/articles";
import type { Feature } from "@/data/features";

function featureToArticle(feature: Feature): Article {
  return {
    slug: feature.slug,
    title: feature.title,
    category: "latest",
    categoryLabel: feature.categoryLabel,
    date: feature.date,
    author: feature.author,
    excerpt: feature.excerpt,
    body: feature.body,
    imageKind: feature.imageKind,
  };
}

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();
  const related = getRelatedFeatures(slug, 3).map(featureToArticle);

  return (
    <ArticleDetailTemplate
      item={feature}
      related={related}
      hrefBase="/features-analysis"
      eyebrow={`Features · ${feature.categoryLabel}`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Features & Analysis", href: "/features-analysis" },
        {
          label: feature.categoryLabel,
          href: `/features-analysis/${feature.category}`,
        },
        { label: feature.title },
      ]}
    />
  );
}
