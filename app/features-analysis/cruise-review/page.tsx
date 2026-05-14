import { FeatureCategoryTemplate } from "@/components/templates/FeatureCategoryTemplate";
import { getFeaturesByCategory } from "@/data/features";

export default function CruiseReviewPage() {
  return (
    <FeatureCategoryTemplate
      category="cruise-review"
      features={getFeaturesByCategory("cruise-review")}
    />
  );
}
