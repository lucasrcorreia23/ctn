import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder";
import { toneFor } from "@/lib/categoryStyle";
import { readTimeFromBody } from "@/lib/readTime";
import type { Article } from "@/data/articles";

type Variant = "default" | "compact" | "feature";

export function ArticleCard({
  article,
  variant = "default",
  hrefBase = "/news",
}: {
  article: Article;
  variant?: Variant;
  hrefBase?: string;
}) {
  const href = `${hrefBase}/${article.slug}`;
  const kickerTone = toneFor(article.category);
  const minutes = readTimeFromBody(article.body);

  if (variant === "compact") {
    return (
      <Link
        href={href}
        className="group flex gap-3 border border-zinc-200 bg-white p-3 hover:border-zinc-400"
      >
        <div className="w-24 shrink-0">
          <Placeholder kind={article.imageKind} ratio="1/1" />
        </div>
        <div className="flex flex-col gap-1">
          <span
            className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${kickerTone}`}
          >
            {article.categoryLabel}
          </span>
          <span className="text-sm font-medium text-zinc-900 group-hover:underline">
            {article.title}
          </span>
          <span className="mt-auto text-xs text-zinc-500">
            {article.date} · {article.author} · {minutes} min read
          </span>
        </div>
      </Link>
    );
  }

  if (variant === "feature") {
    return (
      <Link
        href={href}
        className="group flex flex-col gap-4 border border-zinc-200 bg-white p-5 hover:border-zinc-400"
      >
        <Placeholder kind={article.imageKind} ratio="16/9" />
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${kickerTone}`}
        >
          {article.categoryLabel}
        </span>
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 group-hover:underline">
          {article.title}
        </h3>
        <p className="text-sm text-zinc-600">{article.excerpt}</p>
        <div className="mt-auto text-xs uppercase tracking-[0.16em] text-zinc-500">
          {article.author} · {article.date} · {minutes} min read
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 border border-zinc-200 bg-white p-4 hover:border-zinc-400"
    >
      <Placeholder kind={article.imageKind} ratio="16/9" />
      <span
        className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${kickerTone}`}
      >
        {article.categoryLabel}
      </span>
      <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:underline">
        {article.title}
      </h3>
      <p className="line-clamp-2 text-sm text-zinc-600">{article.excerpt}</p>
      <div className="mt-auto text-xs uppercase tracking-[0.16em] text-zinc-500">
        {article.author} · {article.date} · {minutes} min read
      </div>
    </Link>
  );
}
