# public/

Účel: statické súbory, ktoré sa majú servovať priamo (bez bundlovania) – root-level assety, favicona, manifest.

Aktuálne prázdne.

Odporúčania:
- Sem patria súbory, na ktoré sa odkazuje priamo URL cestou (favicon.ico, manifest.webmanifest, robots.txt, OG obrázok).
- Pre assety importované v kóde uprednostnite `src/assets/`.
- Ak pridáte externé statiky (napr. PDF, ktoré sa má sťahovať priamo), môžete ich vložiť sem.
