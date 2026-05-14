import { NewsCategoryTemplate } from "@/components/templates/NewsCategoryTemplate";
import { getArticlesByCategory, getTrendingArticles } from "@/data/articles";

export default function LuxuryPage() {
  return (
    <NewsCategoryTemplate
      category="luxury"
      articles={getArticlesByCategory("luxury")}
      trending={getTrendingArticles(5)}
    />
  );
}
