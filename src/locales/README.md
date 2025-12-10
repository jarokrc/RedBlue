*locales/*

Účel: preklady (i18n) pre všetky jazykové verzie.

Štruktúra:
- `sk/`, `en/`, `de/` – jazykové balíčky, súbory podľa domény obsahu:
  - `common.ts` – meta, navigácia, contact, notFound, odkazy na privacy/cookies.
  - `home.ts` – hero, services, solutions.
  - `web.ts` – web riešenia (stacks, process, legal, addons, audience).
  - `marketing.ts` – marketing bloky, intro, support.
  - `projects.ts` – obsah projektov (zoznam + detaily).
  - `education.ts`, `support.ts` – obsah podstránok vzdelávanie / podpora.
  - `privacy.ts`, `cookies.ts` – plné texty zásad a cookie politiky.
- `resources.ts` – spája všetky namespacy do jedného objektu podľa jazyka.
- `types.ts` – typová definícia prekladového objektu `Translation`.

Ako sa to používa:
- `I18nProvider` načíta `translations` z `resources.ts` a poskytuje `t`.
- Hook `useI18n` v komponentoch/stránkach vracia `t` + setter na locale.

Poznámky:
- Pri pridávaní nových sekcií doplňte kľúče do `types.ts` a do všetkých jazykových súborov.
- Držte konzistentný tvar (rovnaké kľúče v sk/en/de), aby typy sedeli.
