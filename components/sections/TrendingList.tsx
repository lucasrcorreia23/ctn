import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { toneFor } from "@/lib/categoryStyle";
import { readTimeFromBody } from "@/lib/readTime";
import type { Article } from "@/data/articles";

type Layout = "list" | "grid" | "text-list";

export function TrendingList({
  articles,
  title = "Trending now",
  hrefBase = "/news",
  className = "",
  layout = "list",
}: {
  articles: Article[];
  title?: string;
  hrefBase?: string;
  className?: string;
  layout?: Layout;
}) {
  if (layout === "text-list") {
    return (
      <div className={`border border-zinc-200 bg-white ${className}`}>
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
          <SectionLabel>{title}</SectionLabel>
        </div>
        <ol className="divide-y divide-zinc-200">
          {articles.map((article) => {
            const minutes = readTimeFromBody(article.body);
            return (
              <li key={article.slug} className="px-5 py-3 sm:py-4">
                <Link
                  href={`${hrefBase}/${article.slug}`}
                  className="group flex flex-col gap-1"
                >
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${toneFor(
                      article.category,
                    )}`}
                  >
                    {article.categoryLabel}
                  </span>
                  <span className="text-base font-semibold leading-snug text-zinc-900 group-hover:underline sm:text-lg">
                    {article.title}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {article.author} · {minutes} min read
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  if (layout === "grid") {
    return (
      <div className={`border border-zinc-200 bg-white ${className}`}>
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
          <SectionLabel>{title}</SectionLabel>
        </div>
        <ol className="grid gap-px bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <li key={article.slug} className="bg-white px-5 py-4">
              <Link
                href={`${hrefBase}/${article.slug}`}
                className="group flex h-full gap-4"
              >
                <span className="text-2xl font-semibold tabular-nums text-zinc-300">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                    {article.categoryLabel}
                  </span>
                  <span className="mt-1 block text-sm font-medium leading-snug text-zinc-900 group-hover:underline">
                    {article.title}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className={`border border-zinc-200 bg-white ${className}`}>
      <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
        <SectionLabel>{title}</SectionLabel>
      </div>
      <ol className="divide-y divide-zinc-200">
        {articles.map((article, idx) => (
          <li key={article.slug} className="px-5 py-4">
            <Link
              href={`${hrefBase}/${article.slug}`}
              className="group flex gap-4"
            >
              <span className="text-2xl font-semibold tabular-nums text-zinc-300">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                  {article.categoryLabel}
                </span>
                <span className="mt-1 block text-sm font-medium leading-snug text-zinc-900 group-hover:underline">
                  {article.title}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
