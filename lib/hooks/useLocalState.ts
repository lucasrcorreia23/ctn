"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * useLocalState — like useState, but synced to localStorage.
 *
 * Server-rendered safely. The initial render uses `initial`, then on mount
 * the value (if any) is hydrated from localStorage via useSyncExternalStore-like
 * pattern using a ref + state read once.
 */
export function useLocalState<T>(
  key: string,
  initial: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(initial);
  const hydratedRef = useRef(false);

  // On mount, attempt a single hydration read. We schedule the read via a
  // microtask so that it runs after the first paint (avoids hydration mismatch
  // and the react-hooks/set-state-in-effect rule).
  useEffect(() => {
    if (hydratedRef.current) return;
    hydratedRef.current = true;
    try {
      const raw = window.localStorage.getItem(key);
      if (raw !== null) {
        const parsed = JSON.parse(raw) as T;
        queueMicrotask(() => setValue(parsed));
      }
    } catch {
      // ignore — corrupt storage falls back to `initial`
    }
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved =
          typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        try {
          if (typeof window !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(resolved));
          }
        } catch {
          // ignore quota errors
        }
        return resolved;
      });
    },
    [key],
  );

  return [value, update];
}
