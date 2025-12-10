# app/

Účel: aplikačný „shell“ – komponenty a poskytovatelia, ktoré obalia celú appku.

Súbory:
- `App.tsx` – koreňový komponent pre routing (BrowserRouter, Layout, `<Routes>`). Používa `appRoutes` z `src/routes`.
- `I18nProvider.tsx` – provider pre i18n (voľba locale, detekcia prehliadača, poskytuje `t`).

Ako to spolu funguje:
- `main.tsx` (mimo tejto zložky) vytvára React root a obalí appku do `HelmetProvider`, `QueryClientProvider` a `I18nProvider`.
- `App.tsx` zodpovedá za navigáciu a zdieľaný layout.
- `I18nProvider` načíta preklady z `src/locales/resources.ts` a poskytuje hook `useI18n`.

Kedy sem niečo pridať:
- Globálne providery (theme, auth context, feature flags).
- Globálne error boundary, suspense fallbacky.
- Ak sa bude migrovať na data router, tu sa nastavuje `RouterProvider`/`createBrowserRouter`.
