import { NewsCategoryTemplate } from "@/components/templates/NewsCategoryTemplate";
import { getArticlesByCategory, getTrendingArticles } from "@/data/articles";

export default function OceanPage() {
  return (
    <NewsCategoryTemplate
      category="ocean"
      articles={getArticlesByCategory("ocean")}
      trending={getTrendingArticles(5)}
    />
  );
}
