export function formatPrice(value: number) {
  if (value >= 1e12) return { value: (value / 1e12).toFixed(1), unit: "T" };
  if (value >= 1e9) return { value: (value / 1e9).toFixed(1), unit: "B" };
  if (value >= 1e6) return { value: (value / 1e6).toFixed(1), unit: "M" };
  if (value >= 1e3) return { value: (value / 1e3).toFixed(1), unit: "K" };
  return { value: value.toFixed(2), unit: "" };
}
