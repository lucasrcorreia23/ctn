import type { ReactNode } from "react";

export function EmptyState({
  title = "No results",
  description = "Try clearing the filters or adjusting your search.",
  action,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-start gap-3 border border-dashed border-zinc-300 bg-zinc-50 p-10">
      <div className="text-base font-semibold text-zinc-900">{title}</div>
      <p className="max-w-md text-sm text-zinc-600">{description}</p>
      {action ? <div className="pt-2">{action}</div> : null}
    </div>
  );
}
