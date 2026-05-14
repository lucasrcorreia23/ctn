import { notFound } from "next/navigation";
import { ArticleDetailTemplate } from "@/components/templates/ArticleDetailTemplate";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 3);

  return (
    <ArticleDetailTemplate
      item={article}
      related={related}
      hrefBase="/news"
      eyebrow={`News · ${article.categoryLabel}`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "News", href: "/news" },
        {
          label: article.categoryLabel,
          href: `/news/${article.category}`,
        },
        { label: article.title },
      ]}
    />
  );
}
