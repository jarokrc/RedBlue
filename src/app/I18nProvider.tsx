import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { detectLocale, Locale } from "@/lib/locale";
import { translations } from "@/locales/resources";
import type { Translation } from "@/locales/types";

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    setLocale(detectLocale());
  }, []);

  const value = useMemo(() => ({
    locale,
    setLocale,
    t: translations[locale],
  }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
