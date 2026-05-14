import { FeatureCategoryTemplate } from "@/components/templates/FeatureCategoryTemplate";
import { getFeaturesByCategory } from "@/data/features";

export default function MktgTipsPage() {
  return (
    <FeatureCategoryTemplate
      category="mktg-tips"
      features={getFeaturesByCategory("mktg-tips")}
    />
  );
}
