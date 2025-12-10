export type Locale = "sk" | "en" | "de";

const toCountryFlag = (countryCode: string) => {
  if (!countryCode || countryCode.length !== 2) return "🏳️";
  const base = 127397;
  const codePoints = countryCode.toUpperCase().split("").map((c) => base + c.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

export const detectCountryCode = (): string => {
  if (typeof navigator === "undefined") return "US";
  const lang = navigator.language || "";
  const parts = lang.split(/[-_]/);
  const base = parts[0]?.toLowerCase();
  const region = parts[1]?.toUpperCase();

  if (base === "sk") return region || "SK";
  if (base === "cs") return region || "CZ";
  if (base === "de") return region || "DE";
  if (region) return region;
  return "US";
};

export const detectLocale = (): Locale => {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language?.toLowerCase() || "en";
  if (lang.startsWith("sk") || lang.startsWith("cs")) return "sk";
  if (lang.startsWith("de") || lang.includes("-at") || lang.includes("-ch")) return "de";
  return "en";
};

export const countryFlag = (countryCode: string) => toCountryFlag(countryCode);
