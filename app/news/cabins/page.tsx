import { NewsCategoryTemplate } from "@/components/templates/NewsCategoryTemplate";
import { getArticlesByCategory, getTrendingArticles } from "@/data/articles";

export default function CabinsPage() {
  return (
    <NewsCategoryTemplate
      category="cabins"
      articles={getArticlesByCategory("cabins")}
      trending={getTrendingArticles(5)}
    />
  );
}
