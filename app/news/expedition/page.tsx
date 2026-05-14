import { NewsCategoryTemplate } from "@/components/templates/NewsCategoryTemplate";
import { getArticlesByCategory, getTrendingArticles } from "@/data/articles";

export default function ExpeditionPage() {
  return (
    <NewsCategoryTemplate
      category="expedition"
      articles={getArticlesByCategory("expedition")}
      trending={getTrendingArticles(5)}
    />
  );
}
