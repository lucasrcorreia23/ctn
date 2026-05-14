import { FeatureCategoryTemplate } from "@/components/templates/FeatureCategoryTemplate";
import { getFeaturesByCategory } from "@/data/features";

export default function InterviewsPage() {
  return (
    <FeatureCategoryTemplate
      category="interviews"
      features={getFeaturesByCategory("interviews")}
    />
  );
}
