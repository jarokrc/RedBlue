# hooks/

Účel: zdieľané React hooks, ktoré nie sú viazané na jednu feature.

Príklady:
- `useMediaQuery`, `usePrefersReducedMotion`
- `useScrollToTop`, `useDebounce`
- napojenie na storage (`useLocalStorage`, `useSessionStorage`)
- drobné UI helpery (toggle, outside click), ak nie sú súčasťou konkrétnej feature

Poznámky:
- Feature-špecifické hooks držte v `src/features/<feature>/`.
- Zamerajte sa na čisté, opakovane použiteľné helpery bez UI závislostí.
