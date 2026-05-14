import Link from "next/link";
import { Placeholder } from "@/components/ui/Placeholder";
import type { MagazineIssue } from "@/data/magazines";

export function MagazineCard({
  issue,
  href = `/magazines/${issue.brand}`,
}: {
  issue: MagazineIssue;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 border border-zinc-200 bg-white p-4 hover:border-zinc-400"
    >
      <Placeholder kind="magazine" ratio="3/4" />
      <div className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
        {issue.issue}
      </div>
      <h3 className="text-base font-semibold leading-snug text-zinc-900 group-hover:underline">
        {issue.title}
      </h3>
      <ul className="space-y-1 text-sm text-zinc-600">
        {issue.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span aria-hidden className="text-zinc-400">
              ·
            </span>
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-auto text-xs uppercase tracking-[0.16em] text-zinc-500">
        {issue.pageCount} pages · {issue.date}
      </div>
    </Link>
  );
}
