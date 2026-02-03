# pages/

Purpose: route-level page components.

Current pages:
- `home/HomePage.tsx` - landing page
- `projects/ProjectsPage.tsx` + `projects/ProjectDetailPage.tsx` - project list + detail
- `web-solutions/WebSolutionsPage.tsx` - web solutions
- `marketing/MarketingPage.tsx` - marketing
- `support/SupportPage.tsx` - TechCare & IT Support
- `education/EducationPage.tsx` - education
- `contact/ContactPage.tsx` - contact
- `privacy/PrivacyPage.tsx` - privacy policy
- `cookies/CookiesPage.tsx` - cookie policy
- `not-found/NotFoundPage.tsx` - 404 page
- `intro/IntroPage.tsx` - active intro route (`/`)
- `intro2/IntroPage2.tsx` - temporarily disabled (kept for later edits, not routed)

Notes:
- Keep pages thin (composition + SEO + route-level logic).
- Put page-specific UI blocks in each page's `sections/` folder.
- Put shared cross-page modules in `features/` (for example `features/legal/sections`).
- Routing is defined in `src/routes/index.tsx`.
