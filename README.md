# RedBlue Frontend

Vite + React 18 + TypeScript + Tailwind static site with multiple pages and i18n (SK/EN/DE). Pages: Home, Projects (+detail), Web Solutions, Marketing, TechCare & IT Support, Education, Contact, Privacy, Cookies, 404.

## Scripts
- `npm install` (or `pnpm install`) to install deps
- `npm run dev` start local dev server
- `npm run build` production build to `dist`
- `npm run preview` preview the build locally

## Structure
- `src/app` – app shell, router, I18nProvider
- `src/pages` – page components
- `src/sections` – shared sections (hero, services, CTA, contact, previews)
- `src/components` – layout/UI
- `src/locales/{sk,en,de}` – all copy split by language (common, home, web, marketing, support, education, about, projects, privacy, cookies)
- `src/assets-webp` – optimized WebP assets (logo, about, projects, marketing, websolutions, support, education, contact)
- `src/styles` – Tailwind entry (global.css)
- `src/routes` – route definitions
- `src/lib` – utilities (locale detection)
- `src/services` – placeholder for API clients

## Env
Copy `.env.example` to `.env` and set `VITE_API_BASE_URL`, `VITE_RECAPTCHA_KEY` if needed.

## Tests (Vitest + RTL)
```bash
cd frontend
npm run test         # single run
npm run test:watch   # watch mode
npm run test:ui      # UI runner
```

## Deployment (static hosting)
1) `npm run build` in `frontend` -> output in `frontend/dist`
2) Upload contents of `dist` to your static host (e.g., Hostinger). If SPA rewrites are needed, set all routes to serve `index.html`.

## Next steps (backend/integration)
- Replace mock contact submit with real API (add clients in `src/services/`)
- MSW or real endpoints for forms/data
- CI/CD: GitHub Actions for build/test, lint (when ESLint/Prettier pipeline is added)
- Optional: lazy-load galleries (ProjectDetail) and further code-splitting
