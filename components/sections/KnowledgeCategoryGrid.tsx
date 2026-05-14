import Link from "next/link";
import type { KnowledgeCategory } from "@/data/knowledgeHub";

export function KnowledgeCategoryGrid({
  categories,
}: {
  categories: KnowledgeCategory[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href="/knowledge-hub"
          className="group flex flex-col gap-3 border border-zinc-200 bg-white p-5 hover:border-zinc-400"
        >
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.16em] text-zinc-500">
            <span>{cat.title}</span>
            <span>{cat.resourceCount} resources</span>
          </div>
          <h3 className="text-lg font-semibold leading-snug text-zinc-900 group-hover:underline">
            {cat.title}
          </h3>
          <p className="text-sm text-zinc-600">{cat.description}</p>
        </Link>
      ))}
    </div>
  );
}
