import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { LinkButton } from "@/components/ui/Button";
import { DetailHeader } from "@/components/sections/DetailHeader";
import { RelatedContent } from "@/components/sections/RelatedContent";
import { NewsletterCTA } from "@/components/sections/NewsletterCTA";
import type { Article } from "@/data/articles";
import type { Feature } from "@/data/features";
import type { BreadcrumbItem } from "@/components/sections/Breadcrumbs";

type Common = {
  title: string;
  excerpt: string;
  body: string[];
  author: string;
  date: string;
  categoryLabel: string;
  imageKind: Article["imageKind"];
};

export function ArticleDetailTemplate({
  item,
  related,
  breadcrumbs,
  hrefBase,
  eyebrow,
}: {
  item: Article | Feature;
  related: Article[];
  breadcrumbs: BreadcrumbItem[];
  hrefBase: string;
  eyebrow?: string;
}) {
  const c: Common = {
    title: item.title,
    excerpt: item.excerpt,
    body: item.body,
    author: item.author,
    date: item.date,
    categoryLabel: item.categoryLabel,
    imageKind: item.imageKind,
  };

  return (
    <>
      <DetailHeader
        breadcrumbs={breadcrumbs}
        eyebrow={eyebrow ?? c.categoryLabel}
        title={c.title}
        excerpt={c.excerpt}
        meta={`${c.author} · ${c.date}`}
        imageKind={c.imageKind}
        imageRatio="4/3"
      />

      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <article className="space-y-4 text-base leading-relaxed text-zinc-700 lg:col-span-8">
            {c.body.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </article>

          <aside className="space-y-4 lg:col-span-4">
            <div className="border border-zinc-200 bg-white p-5">
              <SectionLabel>About this story</SectionLabel>
              <dl className="mt-3 space-y-2 text-sm text-zinc-700">
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Author</dt>
                  <dd>{c.author}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Published</dt>
                  <dd>{c.date}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Category</dt>
                  <dd>{c.categoryLabel}</dd>
                </div>
              </dl>
            </div>

            <div className="border border-zinc-200 bg-zinc-50 p-5">
              <SectionLabel>Continue with CTN</SectionLabel>
              <p className="mt-3 text-sm text-zinc-600">
                Subscribe to The CTN Briefing for a weekly editorial roundup.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <LinkButton href="/newsletter" variant="primary" size="sm">
                  Subscribe to CTN Briefing
                </LinkButton>
                <LinkButton href={hrefBase} variant="outline" size="sm">
                  More from this section
                </LinkButton>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <RelatedContent
        articles={related}
        title="Related reading"
        hrefBase={hrefBase}
      />
      <NewsletterCTA />
    </>
  );
}
