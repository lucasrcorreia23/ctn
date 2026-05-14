import { NewsCategoryTemplate } from "@/components/templates/NewsCategoryTemplate";
import { getArticlesByCategory, getTrendingArticles } from "@/data/articles";

export default function RiverPage() {
  return (
    <NewsCategoryTemplate
      category="river"
      articles={getArticlesByCategory("river")}
      trending={getTrendingArticles(5)}
    />
  );
}
