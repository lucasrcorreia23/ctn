"use client";

export interface TabItem {
  label: string;
  value: string;
}

export function TabsNav({
  tabs,
  active,
  onChange,
  className = "",
}: {
  tabs: TabItem[];
  active: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-1 border-b border-zinc-200 ${className}`}>
      {tabs.map((tab) => {
        const isOn = tab.value === active;
        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            className={`-mb-px inline-flex h-10 items-center border-b-2 px-4 text-sm ${
              isOn
                ? "border-zinc-900 text-zinc-900"
                : "border-transparent text-zinc-500 hover:text-zinc-900"
            }`}
            aria-pressed={isOn}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
