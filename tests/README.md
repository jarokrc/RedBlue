# tests/

Účel: jednotkové a integračné UI testy (Vitest + React Testing Library).

Aktuálne testy:
- `pages/HomePage.test.tsx` – hero nadpis + CTA na kontakt
- `pages/ContactPage.test.tsx` – render polí, submit (mock), success stav
- `pages/ContactValidation.test.tsx` – validačné chyby pri prázdnom formulári
- `pages/PrivacyCookies.test.tsx` – nadpisy + link na `/cookies`, smoke pre Cookies page
- `layout/Layout.test.tsx` – hlavné odkazy vrátane Privacy/Cookies
- `sections/ServicesSolutions.test.tsx` – karty služieb a CTA linky (web/marketing/kontakt)
- `pages/NotFoundPage.test.tsx` – nadpis a link späť

Zdieľané súbory:
- `setupTests.ts` – import jest-dom matchers
- `testUtils.tsx` – render wrapper (HelmetProvider, QueryClientProvider, I18nProvider, MemoryRouter)

Spúšťanie:
- Jednorazovo: `npm run test`
- Watch: `npm run test:watch`
- UI runner: `npm run test:ui`
