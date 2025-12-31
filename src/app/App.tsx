import { Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component, Suspense, type ReactNode } from "react";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import { appRoutes } from "@/routes";
import faviconIco from "@/assets-webp/favicon/favicon.ico";
import favicon16 from "@/assets-webp/favicon/favicon-16x16.png";
import favicon32 from "@/assets-webp/favicon/favicon-32x32.png";
import appleTouchIcon from "@/assets-webp/favicon/apple-touch-icon.png";
import android192 from "@/assets-webp/favicon/android-chrome-192x192.png";
import android512 from "@/assets-webp/favicon/android-chrome-512x512.png";
import siteManifest from "@/assets-webp/favicon/site.webmanifest";
import { useI18n } from "./I18nProvider";
import type { Locale } from "@/lib/locale";

type ErrorTexts = {
  title: string;
  subtitle: string;
  cta: string;
};

const errorTexts: Record<Locale, ErrorTexts> = {
  sk: {
    title: "Prepáčte, načítanie zlyhalo",
    subtitle: "Skúšame stránku obnoviť...",
    cta: "Obnoviť teraz",
  },
  en: {
    title: "Sorry, loading failed",
    subtitle: "Trying to refresh the page...",
    cta: "Refresh now",
  },
  de: {
    title: "Entschuldigung, Laden fehlgeschlagen",
    subtitle: "Wir versuchen, die Seite zu aktualisieren...",
    cta: "Jetzt neu laden",
  },
};

class RoutesErrorBoundary extends Component<{ children: ReactNode; texts: ErrorTexts }, { hasError: boolean }> {
  reloadTimer?: number;
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log do konzoly, aby bol dôvod bielej obrazovky dohľadateľný.
    console.error("Route render failed", error, info);
  }

  componentDidUpdate(_prevProps: Readonly<{ children: ReactNode; texts: ErrorTexts }>, prevState: Readonly<{ hasError: boolean }>) {
    if (this.state.hasError && !prevState.hasError) {
      const now = Date.now();
      const last = Number(sessionStorage.getItem("rb-last-reload") || "0");
      // Brzda, aby nevznikla nekonečná slučka pri pretrvávajúcej chybe.
      if (now - last > 5000) {
        sessionStorage.setItem("rb-last-reload", String(now));
        this.reloadTimer = window.setTimeout(() => window.location.reload(), 1000);
      }
    }
  }

  componentWillUnmount() {
    if (this.reloadTimer) window.clearTimeout(this.reloadTimer);
  }

  render() {
    if (this.state.hasError) {
      const { texts } = this.props;
      return (
        <div className="py-10 text-center text-slate-700">
          <p className="text-lg font-semibold text-slate-900">{texts.title}</p>
          <p className="mt-2 text-sm text-slate-700">{texts.subtitle}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-4 inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
          >
            {texts.cta}
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  const { locale } = useI18n();
  const texts = errorTexts[locale] || errorTexts.sk;

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="icon" type="image/x-icon" href={faviconIco} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="192x192" href={android192} />
        <link rel="icon" type="image/png" sizes="512x512" href={android512} />
        <link rel="manifest" href={siteManifest} />
      </Helmet>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className="py-10 text-center text-slate-600">Loading...</div>}>
            <RoutesErrorBoundary texts={texts}>
              <Routes>
                {appRoutes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
              </Routes>
            </RoutesErrorBoundary>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
