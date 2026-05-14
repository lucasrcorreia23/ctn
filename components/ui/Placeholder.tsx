import type { ArticleImageKind } from "@/data/articles";

export type PlaceholderKind = ArticleImageKind;

const KIND_LABELS: Record<PlaceholderKind, string> = {
  ship: "Ocean ship",
  river: "River vessel",
  cabin: "Cabin interior",
  expedition: "Expedition",
  stage: "Event stage",
  magazine: "Magazine cover",
  podcast: "Podcast",
  training: "Training",
  portrait: "Portrait",
  generic: "Image",
};

export function Placeholder({
  kind = "generic",
  className = "",
  ratio = "16/9",
  label,
}: {
  kind?: PlaceholderKind;
  className?: string;
  ratio?: "16/9" | "4/3" | "1/1" | "3/4" | "2/1" | "3/1";
  label?: string;
}) {
  const ratioClass =
    ratio === "1/1"
      ? "aspect-square"
      : ratio === "4/3"
        ? "aspect-[4/3]"
        : ratio === "3/4"
          ? "aspect-[3/4]"
          : ratio === "2/1"
            ? "aspect-[2/1]"
            : ratio === "3/1"
              ? "aspect-[3/1]"
              : "aspect-video";

  return (
    <div
      className={`relative w-full ${ratioClass} overflow-hidden border border-zinc-300 bg-zinc-100 wf-stripes ${className}`}
      role="img"
      aria-label={label ?? KIND_LABELS[kind]}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-sm border border-zinc-300 bg-white px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-700">
          {label ?? KIND_LABELS[kind]}
        </span>
      </div>
    </div>
  );
}
