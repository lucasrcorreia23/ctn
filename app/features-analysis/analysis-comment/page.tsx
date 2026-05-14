import { FeatureCategoryTemplate } from "@/components/templates/FeatureCategoryTemplate";
import { getFeaturesByCategory } from "@/data/features";

export default function AnalysisCommentPage() {
  return (
    <FeatureCategoryTemplate
      category="analysis-comment"
      features={getFeaturesByCategory("analysis-comment")}
    />
  );
}
