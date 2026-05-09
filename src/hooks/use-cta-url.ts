import { useMemo } from "react";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export function useCtaUrl(baseUrl: string): string {
  return useMemo(() => {
    const pageParams = new URLSearchParams(window.location.search);
    const ctaUrl = new URL(baseUrl);
    for (const key of UTM_KEYS) {
      const value = pageParams.get(key);
      if (value) ctaUrl.searchParams.set(key, value);
    }
    return ctaUrl.toString();
  }, [baseUrl]);
}
