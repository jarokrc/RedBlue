*pages/*

Účel: stránkové komponenty pre jednotlivé route cesty.

Aktuálne stránky:
- `HomePage.tsx` – landing (Hero, Services, SolutionsCTA).
- `AboutPage.tsx` – sekcia O mne.
- `ProjectsPage.tsx` + `ProjectDetailPage.tsx` – zoznam a detail projektov.
- `WebSolutionsPage.tsx` – web riešenia.
- `MarketingPage.tsx` – marketing/podpora.
- `ContactPage.tsx` – kontakt s formulárom.
- `PrivacyPage.tsx` – zásady ochrany osobných údajov.
- `CookiesPage.tsx` – cookie politika.
- `NotFoundPage.tsx` – 404.

Poznámky:
- Stránky sú tenké kompozície; logiku/komponenty držte v `sections/` alebo vo feature balíkoch.
- Routing je definovaný v `src/routes/index.tsx` a používa tieto stránky v `app/App.tsx`.
