import { MagazineCard } from "@/components/sections/MagazineCard";
import type { MagazineIssue } from "@/data/magazines";

export function MagazineGrid({ issues }: { issues: MagazineIssue[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {issues.map((issue) => (
        <MagazineCard key={issue.slug} issue={issue} />
      ))}
    </div>
  );
}
