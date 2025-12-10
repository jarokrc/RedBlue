# data/

Účel: zdrojové dáta, ktoré sa čítajú priamo v UI (mocky), alebo testovacie/seed dáta, kým nebude API.

Príklady použitia:
- statické JSON/TS objekty pre projekty, cenníky, FAQ, referencie
- mockované odpovede API, ktoré sa neskôr nahradia reálnym fetchom
- mapovania/preklady, ktoré nechceme hardcodovať v komponentoch

Poznámky:
- Ak sa pridá API, tieto dáta môžu slúžiť ako fallback/fixtures.
- Držte formát: exportované objekty/arraye v TypeScripte, alebo `.json` pre čisto statické dáta.
