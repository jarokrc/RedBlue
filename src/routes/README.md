# routes/

Účel: centralizovaná konfigurácia routingu.

Súbory:
- `index.tsx` – pole `appRoutes` (path + element) pre všetky podstránky; používané v `src/app/App.tsx`.

Ako to funguje:
- `App.tsx` importuje `appRoutes` a mapuje ich do `<Routes>`/`<Route>`.
- Ak pribudnú lazy routy, guardy alebo data router, konfigurácia sa doplní práve sem.

Čo sem ešte môže ísť:
- guardy/redirecty (napr. `requireAuth`), lazy loading definície
- prípadná migrácia na data router (loader/action) s centrálnym configom
