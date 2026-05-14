import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Placeholder } from "@/components/ui/Placeholder";
import { LinkButton } from "@/components/ui/Button";
import { readTimeFromBody } from "@/lib/readTime";
import type { Article } from "@/data/articles";
import type { MagazineIssue } from "@/data/magazines";

export function EditorialHero({
  article,
  latest,
  secondary,
  magazine,
  secondFeature,
  sidePair,
}: {
  article: Article;
  latest?: Article[];
  secondary?: Article;
  magazine?: MagazineIssue;
  secondFeature?: Article;
  sidePair?: Article[];
}) {
  const latestList = (latest ?? []).slice(0, 5);
  const sideArticles = (sidePair ?? []).slice(0, 2);
  const magazineTeaser = magazine?.highlights[0];
  const showRow2 = Boolean(secondFeature || sideArticles.length > 0);

  return (
    <section
      className="border-b border-zinc-200 bg-white"
      aria-labelledby="editorial-hero-lead"
    >
      <Container className="py-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">

          {/* LEFT — Latest Stories (spans both rows) */}
          {latestList.length > 0 && (
            <aside
              className="lg:col-span-3 lg:row-span-2"
              aria-label="Latest stories"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-900">
                Latest News
              </div>
              <ol className="mt-4 divide-y divide-zinc-200 border-t border-zinc-200">
                {latestList.map((item) => (
                  <li key={item.slug} className="py-4">
                    <Link
                      href={`/news/${item.slug}`}
                      className="group flex flex-col gap-1"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                        {item.categoryLabel}
                      </span>
                      <span className="text-sm font-semibold leading-snug text-zinc-900 group-hover:underline">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </aside>
          )}

          {/* ROW 1 — Lead article + right aside */}
          <div className="grid gap-8 lg:col-span-9 lg:grid-cols-9 lg:gap-10">

            {/* Lead article */}
            <article className="flex flex-col gap-3 lg:col-span-6">
              <Link
                href={`/news/${article.slug}`}
                className="group block"
                aria-labelledby="editorial-hero-lead"
              >
                <Placeholder kind={article.imageKind} ratio="2/1" />
              </Link>
              <Link
                href={`/news/${article.category}`}
                className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700 hover:underline"
              >
                {article.categoryLabel}
              </Link>
              <h1
                id="editorial-hero-lead"
                className="text-4xl font-bold leading-tight tracking-tight text-zinc-900"
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="hover:underline"
                >
                  {article.title}
                </Link>
              </h1>
              <p className="max-w-3xl text-lg text-zinc-600">{article.excerpt}</p>
            </article>

            {/* Right aside — secondary article + magazine */}
            <aside className="flex flex-col gap-8 lg:col-span-3">
              {secondary && (
                <article className="flex flex-col gap-3">
                  <Link
                    href={`/news/${secondary.slug}`}
                    className="group block"
                  >
                    <Placeholder kind={secondary.imageKind} ratio="16/9" />
                  </Link>
                  <Link
                    href={`/news/${secondary.category}`}
                    className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-700 hover:underline"
                  >
                    {secondary.categoryLabel}
                  </Link>
                  <h2 className="text-lg font-bold leading-snug text-zinc-900">
                    <Link
                      href={`/news/${secondary.slug}`}
                      className="hover:underline"
                    >
                      {secondary.title}
                    </Link>
                  </h2>
                  <div className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                    {secondary.author}
                  </div>
                </article>
              )}

              {magazine && (
                <div className="flex flex-col gap-4 border border-zinc-200 p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-700">
                    Last Magazine
                  </span>
                  <h3 className="text-xl font-bold leading-snug text-zinc-900">
                    {magazine.title}
                  </h3>
                  {magazineTeaser && (
                    <p className="text-sm text-zinc-600">{magazineTeaser}</p>
                  )}
                  <LinkButton
                    href={`/magazines/${magazine.brand}`}
                    variant="outline"
                    size="sm"
                    className="mt-auto w-full justify-center"
                  >
                    Read Now
                  </LinkButton>
                </div>
              )}
            </aside>
          </div>

          {/* ROW 2 — Two stacked side articles + second large feature */}
          {showRow2 && (
            <div className="grid gap-8 lg:col-span-9 lg:grid-cols-9 lg:gap-10">

              {/* Left — two stacked side articles */}
              {sideArticles.length > 0 && (
                <div className="flex flex-col gap-8 lg:col-span-3">
                  {sideArticles.map((sideArticle) => (
                    <article key={sideArticle.slug} className="flex flex-col gap-3">
                      <Link
                        href={`/news/${sideArticle.slug}`}
                        className="group block"
                      >
                        <Placeholder kind={sideArticle.imageKind} ratio="16/9" />
                      </Link>
                      <Link
                        href={`/news/${sideArticle.category}`}
                        className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-700 hover:underline"
                      >
                        {sideArticle.categoryLabel}
                      </Link>
                      <h3 className="text-lg font-bold leading-snug text-zinc-900">
                        <Link
                          href={`/news/${sideArticle.slug}`}
                          className="hover:underline"
                        >
                          {sideArticle.title}
                        </Link>
                      </h3>
                    </article>
                  ))}
                </div>
              )}

              {/* Right — second large featured article */}
              {secondFeature && (
                <article
                  className={`flex flex-col gap-3 ${sideArticles.length > 0 ? "lg:col-span-6" : "lg:col-span-9"}`}
                >
                  <Link
                    href={`/news/${secondFeature.slug}`}
                    className="group block"
                  >
                    <Placeholder kind={secondFeature.imageKind} ratio="2/1" />
                  </Link>
                  <Link
                    href={`/news/${secondFeature.category}`}
                    className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-700 hover:underline"
                  >
                    {secondFeature.categoryLabel}
                  </Link>
                  <h2
                    className="text-4xl font-bold leading-tight tracking-tight text-zinc-900"
                  >
                    <Link
                      href={`/news/${secondFeature.slug}`}
                      className="hover:underline"
                    >
                      {secondFeature.title}
                    </Link>
                  </h2>
                  <p className="max-w-3xl text-lg text-zinc-600">
                    {secondFeature.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                    <span className="text-zinc-700">By {secondFeature.author}</span>
                    <span aria-hidden>·</span>
                    <time>{secondFeature.date}</time>
                    <span aria-hidden>·</span>
                    <span>{readTimeFromBody(secondFeature.body)} min read</span>
                  </div>
                </article>
              )}
            </div>
          )}

        </div>
      </Container>
    </section>
  );
}
