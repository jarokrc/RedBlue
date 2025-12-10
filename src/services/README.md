# services/

Účel: API klienti a volania na backend (fetch/axios), oddelené od UI.

Odporúčaný obsah:
- `client.ts` – základná inštancia fetch/axios (baseURL, interceptors)
- `contact.ts` – submit kontakt formulára (POST)
- `projects.ts` – CRUD alebo listing projektov
- `auth.ts` – login/refresh (ak pribudne auth)

Poznámky:
- Typy odpovedí ukladajte do `src/types/` alebo lokálne k službe (`types.ts`).
- Pri použití React Query sem patria funkcie, ktoré sa odovzdajú query/mutation.
