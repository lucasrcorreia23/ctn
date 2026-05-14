export type CategoryToneKey =
  | "ocean"
  | "river"
  | "cabins"
  | "luxury"
  | "expedition"
  | "latest"
  | "feature"
  | "podcast"
  | "magazine"
  | "event";

const NEUTRAL = "text-zinc-700";

export const kickerTone: Record<CategoryToneKey, string> = {
  ocean: NEUTRAL,
  river: NEUTRAL,
  cabins: NEUTRAL,
  luxury: NEUTRAL,
  expedition: NEUTRAL,
  latest: NEUTRAL,
  feature: NEUTRAL,
  podcast: NEUTRAL,
  magazine: NEUTRAL,
  event: NEUTRAL,
};

export function toneFor(key: string): string {
  return kickerTone[key as CategoryToneKey] ?? NEUTRAL;
}
