# lib/

Účel: zdieľané utility/helper funkcie nezávislé od konkrétnej feature.

Aktuálne:
- `locale.ts` – detekcia prehliadačového jazyka/region kódu, mapovanie na Locale (`sk/en/de`), generovanie vlajky.

Odporúčané typy utilít do budúcna:
- formátovanie dátumov/čísel (`formatDate`, `formatCurrency`),
- validácie a sanitizácia (mimo zod schém),
- helpers pre URL/query stringy, storage (local/session),
- drobné math/string/array utily, ktoré sa opakujú na viacerých miestach.

Poznámky:
- Udržujte util funkcie čisté, bez závislosti na React-e; React hooks patria do `hooks/`.
- Ak je util špecifický len pre jednu feature, umiestnite ho radšej do `src/features/<feature>/`.
