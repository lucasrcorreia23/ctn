"use client";

export interface FilterOption {
  label: string;
  value: string;
}

export function FilterBar({
  label = "Filter",
  options,
  active,
  onChange,
  onClear,
  className = "",
}: {
  label?: string;
  options: FilterOption[];
  active: string[];
  onChange: (next: string[]) => void;
  onClear?: () => void;
  className?: string;
}) {
  const toggle = (value: string) => {
    if (active.includes(value)) {
      onChange(active.filter((v) => v !== value));
    } else {
      onChange([...active, value]);
    }
  };

  return (
    <div className={`border border-zinc-200 bg-white p-4 ${className}`}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
          {label}
        </span>
        <div className="flex flex-wrap gap-2">
          {options.map((opt) => {
            const isOn = active.includes(opt.value);
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => toggle(opt.value)}
                className={`h-8 border px-3 text-xs ${
                  isOn
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50"
                }`}
                aria-pressed={isOn}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
        {active.length > 0 ? (
          <button
            type="button"
            onClick={() => onClear?.()}
            className="ml-auto text-xs text-zinc-500 underline-offset-2 hover:text-zinc-900 hover:underline"
          >
            Clear all ({active.length})
          </button>
        ) : null}
      </div>

      {active.length > 0 ? (
        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-zinc-200 pt-3">
          <span className="text-[11px] uppercase tracking-[0.16em] text-zinc-500">
            Active
          </span>
          {active.map((value) => {
            const opt = options.find((o) => o.value === value);
            if (!opt) return null;
            return (
              <button
                key={value}
                type="button"
                onClick={() => toggle(value)}
                className="inline-flex items-center gap-2 border border-zinc-300 bg-zinc-50 px-2 py-1 text-xs text-zinc-700"
              >
                {opt.label}
                <span aria-hidden>×</span>
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
