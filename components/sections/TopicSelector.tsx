import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ArticleImageKind } from "@/data/articles";

interface Topic {
  slug: string;
  label: string;
  description: string;
  href: string;
  imageKind: ArticleImageKind;
}

const TOPICS: Topic[] = [
  {
    slug: "ocean",
    label: "Ocean",
    description: "Mainstream and premium ocean cruise.",
    href: "/news/ocean",
    imageKind: "ship",
  },
  {
    slug: "river",
    label: "River",
    description: "European, Asian, and US river product.",
    href: "/news/river",
    imageKind: "river",
  },
  {
    slug: "cabins",
    label: "Cabins",
    description: "Cabin tier comparators and upgrades.",
    href: "/news/cabins",
    imageKind: "cabin",
  },
  {
    slug: "luxury",
    label: "Luxury",
    description: "Suite-tier and small ship luxury.",
    href: "/news/luxury",
    imageKind: "portrait",
  },
  {
    slug: "expedition",
    label: "Expedition",
    description: "Polar and high-latitude expedition.",
    href: "/news/expedition",
    imageKind: "expedition",
  },
  {
    slug: "latest",
    label: "Latest",
    description: "Everything new across CTN.",
    href: "/news/latest",
    imageKind: "generic",
  },
];

export function TopicSelector() {
  return (
    <section
      className="border-b border-zinc-200 bg-zinc-50"
      aria-labelledby="choose-your-news"
    >
      <Container className="py-12 lg:py-16">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Choose your news</SectionLabel>
            <h2
              id="choose-your-news"
              className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl"
            >
              Jump straight to a category
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600">
              Six newsroom verticals covering every corner of UK cruise selling.
            </p>
          </div>
          <Link
            href="/news"
            className="text-sm font-medium text-zinc-900 underline-offset-2 hover:underline"
          >
            All news
          </Link>
        </div>

        <nav
          aria-label="News categories"
          className="mt-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0"
        >
          <ul className="grid min-w-[640px] grid-cols-6 gap-3 sm:min-w-0 sm:grid-cols-3 lg:grid-cols-6">
            {TOPICS.map((topic) => (
              <li key={topic.slug}>
                <Link
                  href={topic.href}
                  className="group flex h-full flex-col gap-3 border border-zinc-200 bg-white p-3 transition-colors hover:border-zinc-900"
                >
                  <Placeholder kind={topic.imageKind} ratio="4/3" />
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold leading-tight text-zinc-900 group-hover:underline">
                      {topic.label}
                    </h3>
                    <p className="text-xs leading-snug text-zinc-600">
                      {topic.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
