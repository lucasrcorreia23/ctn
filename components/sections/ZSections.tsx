import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { readTimeFromBody } from "@/lib/readTime";
import type { Article } from "@/data/articles";

type ZPair = {
  feature: Article;
  side: Article;
};

function SideCard({ article }: { article: Article }) {
  const minutes = readTimeFromBody(article.body);
  return (
    <article className="flex flex-col gap-3">
      <Link href={`/news/${article.slug}`} className="group block">
        <Placeholder kind={article.imageKind} ratio="4/3" />
      </Link>
      <Link
        href={`/news/${article.category}`}
        className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-700 hover:underline"
      >
        {article.categoryLabel}
      </Link>
      <h3 className="text-lg font-bold leading-snug text-zinc-900 sm:text-xl">
        <Link href={`/news/${article.slug}`} className="hover:underline">
          {article.title}
        </Link>
      </h3>
      <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
        <span>{article.author}</span>
        <span aria-hidden> · </span>
        <time>{article.date}</time>
        <span aria-hidden> · </span>
        <span>{minutes} min read</span>
      </div>
    </article>
  );
}

function FeatureCard({
  article,
  headingId,
}: {
  article: Article;
  headingId: string;
}) {
  const minutes = readTimeFromBody(article.body);
  return (
    <article className="flex flex-col gap-4">
      <Link
        href={`/news/${article.slug}`}
        className="group block"
        aria-labelledby={headingId}
      >
        <Placeholder kind={article.imageKind} ratio="4/3" />
      </Link>
      <Link
        href={`/news/${article.category}`}
        className="mt-1 inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700 hover:underline"
      >
        {article.categoryLabel}
      </Link>
      <h2
        id={headingId}
        className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl"
      >
        <Link href={`/news/${article.slug}`} className="hover:underline">
          {article.title}
        </Link>
      </h2>
      <p className="max-w-3xl text-base text-zinc-600 sm:text-lg">
        {article.excerpt}
      </p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
        <span className="text-zinc-700">By {article.author}</span>
        <span aria-hidden>·</span>
        <time>{article.date}</time>
        <span aria-hidden>·</span>
        <span>{minutes} min read</span>
      </div>
    </article>
  );
}

export function ZSections({
  top,
  bottom,
}: {
  top: ZPair;
  bottom: ZPair;
}) {
  return (
    <>
      <section
        className="border-b border-zinc-200 bg-white"
        aria-labelledby="z-top-heading"
      >
        <Container className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <SideCard article={top.side} />
            </div>
            <div className="lg:col-span-8">
              <FeatureCard article={top.feature} headingId="z-top-heading" />
            </div>
          </div>
        </Container>
      </section>

      <section
        className="border-b border-zinc-200 bg-white"
        aria-labelledby="z-bottom-heading"
      >
        <Container className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <FeatureCard
                article={bottom.feature}
                headingId="z-bottom-heading"
              />
            </div>
            <div className="lg:col-span-4">
              <SideCard article={bottom.side} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
