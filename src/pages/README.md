*pages/*

Účel: stránkové komponenty pre jednotlivé route cesty.

Aktuálne stránky:
- `HomePage.tsx` – landing (Hero, Services, SolutionsCTA).
- `ProjectsPage.tsx` + `ProjectDetailPage.tsx` – zoznam a detail projektov.
- `WebSolutionsPage.tsx` – web riešenia.
- `MarketingPage.tsx` – marketing.
- `SupportPage.tsx` – TechCare & IT Support.
- `EducationPage.tsx` – vzdelávanie.
- `ContactPage.tsx` – kontakt.
- `PrivacyPage.tsx` – zásady ochrany osobných údajov.
- `CookiesPage.tsx` – cookie politika.
- `NotFoundPage.tsx` – 404.

Poznámky:
- Stránky sú tenké kompozície; logiku/komponenty držte v `sections/` alebo vo feature balíčkoch.
- Routing je definovaný v `src/routes/index.tsx` a používame ho v `app/App.tsx`.
