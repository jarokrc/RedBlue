export type Locale = "sk" | "en" | "de";

const STORAGE_KEY = "rb-locale";

const toCountryFlag = (countryCode: string) => {
  if (!countryCode || countryCode.length !== 2) return "??";
  const base = 127397;
  const codePoints = countryCode.toUpperCase().split("").map((c) => base + c.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

const mapLangToLocale = (lang: string): Locale | null => {
  const l = (lang || "").toLowerCase();
  if (!l) return null;
  if (l.startsWith("sk") || l.startsWith("cs")) return "sk";
  if (l.startsWith("de") || l.includes("-at") || l.includes("-ch")) return "de";
  if (l.startsWith("en")) return "en";
  return null;
};

const pickLocaleFromList = (langs: string[]): Locale => {
  if (!langs || langs.length === 0) return "en";
  for (const raw of langs) {
    const mapped = mapLangToLocale(raw);
    if (mapped) return mapped;
  }
  return "en";
};

const regionFromLang = (lang: string, fallback: string) => {
  const parts = (lang || "").split(/[-_]/);
  const region = parts[1]?.toUpperCase();
  return region && region.length === 2 ? region : fallback;
};

const pickCountryFromList = (langs: string[]): string => {
  if (!langs || langs.length === 0) return "US";
  for (const raw of langs) {
    const low = (raw || "").toLowerCase();
    if (low.startsWith("cs")) return regionFromLang(raw, "CZ");
    if (low.startsWith("sk")) return regionFromLang(raw, "SK");
    if (low.startsWith("de") || low.includes("-at") || low.includes("-ch")) {
      if (low.includes("-at")) return regionFromLang(raw, "AT");
      if (low.includes("-ch")) return regionFromLang(raw, "CH");
      return regionFromLang(raw, "DE");
    }
    if (low.startsWith("en")) return regionFromLang(raw, "US");
  }
  return "US";
};

export const detectLocale = (): Locale => {
  // 1) zoznam preferencií prehliadača (poradie)
  if (typeof navigator !== "undefined" && Array.isArray(navigator.languages)) {
    const fromList = pickLocaleFromList(navigator.languages);
    if (fromList) return fromList;
  }
  // 2) primárny jazyk prehliadača
  if (typeof navigator !== "undefined") {
    const primary = mapLangToLocale(navigator.language || "");
    if (primary) return primary;
  }
  // 3) fallback
  return "en";
};

export const detectCountryCode = (): string => {
  // 1) primárny jazyk prehliadača
  if (typeof navigator !== "undefined") {
    const primary = pickCountryFromList([navigator.language || ""]);
    if (primary) return primary;
  }
  // 2) zoznam preferencií
  if (typeof navigator !== "undefined" && Array.isArray(navigator.languages)) {
    const fromList = pickCountryFromList(navigator.languages as string[]);
    if (fromList) return fromList;
  }
  // 3) fallback
  return "US";
};

export const countryFlag = (countryCode: string) => toCountryFlag(countryCode);

export const saveLocale = (locale: Locale) => {
  if (typeof window === "undefined" || typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, locale);
};
