*sections/*

Účel: opakovane použiteľné časti stránok (väčšie bloky UI), ktoré sa skladajú do `pages/`.

Aktuálne sekcie:
- `Hero.tsx` – hero banner na Home.
- `Services.tsx` – prehľad služieb.
- `SolutionsCTA.tsx` – CTA karty na web/marketing/podpora/academy.
- `ProjectsPreview.tsx`, `Services.tsx`, `Contact.tsx`, `SolutionsCTA.tsx` (podľa potreby na stránkach).
- `Contact.tsx` – kontaktný blok (zdieľaný na stránke Kontakt).

Poznámky:
- Sekcie sú UI bloky bez routovania; majú byť jednoduché kompozity, ktoré sa dajú použiť na viacerých stránkach.
- Zložitejšiu logiku alebo API volania držte vo feature alebo `services/`; sekcia by mala byť čo najviac prezentácia + ľahká interakcia.
