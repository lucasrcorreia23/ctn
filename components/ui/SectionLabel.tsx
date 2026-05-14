export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500 ${className}`}
    >
      <span className="block h-px w-6 bg-zinc-300" aria-hidden />
      {children}
    </span>
  );
}
