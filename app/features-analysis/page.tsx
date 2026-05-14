import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { Placeholder } from "@/components/ui/Placeholder";
import {
  features,
  type FeatureCategory,
  featureCategoryLabels,
} from "@/data/features";

const SHOWCASE: FeatureCategory[] = [
  "analysis-comment",
  "mktg-tips",
  "cruise-review",
];

function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
}

export default function FeaturesAnalysisHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Features & Analysis"
        title="Long-form analysis from the CTN newsroom"
        description="Editorial commentary, interviews, marketing tips, and cruise reviews built for the UK trade."
      />

      <Container className="py-10">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Features & Analysis" },
          ]}
        />

        <div className="mt-8 flex items-start justify-between gap-10">
          <h2 className="shrink-0 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            Features &gt;
          </h2>

          <ul className="grid flex-1 gap-[18px] sm:grid-cols-3">
            {SHOWCASE.map((category) => {
              const feature = sortByDateDesc(
                features.filter((f) => f.category === category),
              )[0];
              if (!feature) return null;
              return (
                <li key={category}>
                  <Link
                    href={`/features-analysis/${feature.slug}`}
                    className="group flex flex-col gap-3"
                  >
                    <Placeholder kind={feature.imageKind} ratio="16/9" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                      {featureCategoryLabels[category]}
                    </span>
                    <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:underline">
                      {feature.title}
                    </h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </>
  );
}
