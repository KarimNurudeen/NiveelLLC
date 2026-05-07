export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function useIsomorphicLayoutEffect() {
  if (typeof window === "undefined") {
    return () => {};
  }
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("react").useLayoutEffect;
}
