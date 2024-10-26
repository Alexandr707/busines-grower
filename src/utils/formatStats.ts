export function formatStats(v: number): string {
  if (v < 10_000) return v.toString();
  if (v >= 10_000 && v < 1_000_000) return (v / 1000).toFixed(1) + "K";
  return (v / 1_000_000).toFixed(1) + "M";
}
