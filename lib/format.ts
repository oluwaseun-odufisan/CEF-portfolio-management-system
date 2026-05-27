export function formatCurrency(value: number, compact = true) {
  if (compact && value >= 1_000_000_000) {
    return `NGN ${(value / 1_000_000_000).toFixed(1)}B`;
  }

  if (compact && value >= 1_000_000) {
    return `NGN ${(value / 1_000_000).toFixed(1)}M`;
  }

  return new Intl.NumberFormat("en-NG", {
    currency: "NGN",
    maximumFractionDigits: 0,
    style: "currency"
  }).format(value);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-NG").format(value);
}

export function formatPercent(value: number) {
  return `${value.toFixed(1)}%`;
}
