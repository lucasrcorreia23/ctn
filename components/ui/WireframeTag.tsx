export function WireframeTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 border border-dashed border-zinc-400 bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 ${className}`}
    >
      Wireframe
    </span>
  );
}
