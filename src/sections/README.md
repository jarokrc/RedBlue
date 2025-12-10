*sections/*

Účel: opakovane použiteľné časti stránok (väčšie bloky UI), ktoré sa skladajú do `pages/`.

Aktuálne sekcie:
- `Hero.tsx` – hero banner na Home.
- `Services.tsx` – prehľad služieb.
- `SolutionsCTA.tsx` – CTA karty na web/marketing/kontakt/academy.
- `ProjectsPreview.tsx`, `SolutionsCTA.tsx`, `Services.tsx`, `Contact.tsx`, `AboutPreview.tsx`, `Hero.tsx`, `Contact.tsx`, `Services.tsx`, `SolutionsCTA.tsx`, `AboutPreview.tsx` (podľa potreby na stránkach).
- `Contact.tsx` – kontaktný formulár (zdieľaný na stránke Kontakt).

Poznámky:
- Sekcie sú UI bloky bez routovania; majú byť jednoduché kompozity, ktoré sa dajú použiť na viacerých stránkach.
- Zložitejšiu logiku alebo API volania držte vo feature alebo `services/`; sekcia by mala byť čo najviac prezentácia + ľahká interakcia.
