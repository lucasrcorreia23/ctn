import { NewsCategoryTemplate } from "@/components/templates/NewsCategoryTemplate";
import { getArticlesByCategory, getTrendingArticles } from "@/data/articles";

export default function LatestPage() {
  return (
    <NewsCategoryTemplate
      category="latest"
      articles={getArticlesByCategory("latest")}
      trending={getTrendingArticles(5)}
    />
  );
}
