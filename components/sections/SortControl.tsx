"use client";

export interface SortOption {
  label: string;
  value: string;
}

export function SortControl({
  options,
  value,
  onChange,
  label = "Sort",
}: {
  options: SortOption[];
  value: string;
  onChange: (next: string) => void;
  label?: string;
}) {
  return (
    <label className="inline-flex items-center gap-2 text-xs text-zinc-500">
      <span className="font-semibold uppercase tracking-[0.16em]">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-8 border border-zinc-300 bg-white px-2 text-xs text-zinc-900 focus:border-zinc-900 focus:outline-none"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
