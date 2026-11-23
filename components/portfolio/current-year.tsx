"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Shows the visitor's current year; the prerendered build year is only a fallback. */
export function CurrentYear({ fallback }: { fallback: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );

  return <>{year}</>;
}
