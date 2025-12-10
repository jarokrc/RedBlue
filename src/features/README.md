# features/

Účel: väčšie funkčné celky s vlastnou logikou, UI a prípadnými službami.

Odporúčaný layout jednej feature (príklad `contact/`):
- `components/` – komponenty špecifické pre danú feature
- `hooks.ts` alebo `hooks/` – feature-scoped hooks
- `services.ts` – volania API súvisiace s feature
- `types.ts` – typy/rozhrania len pre danú feature
- `index.ts` – entry point, ktorý exportuje verejné časti

Príklady:
- `contact/` – kontaktný formulár (UI, validácie, submit)
- `projects/` – listing + detailová logika (filtrovanie, načítanie dát)
- `privacy/` – rendering zásad/privacy + napojenie na CMS/API

Poznámky:
- Udržujte izoláciu: feature by mala vedieť bežať bez cross-importov do iných features (len cez zdieľané `lib/`, `types/`).
