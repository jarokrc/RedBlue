# styles/

Účel: globálne štýly a Tailwind vstupy.

Aktuálne:
- `global.css` – importuje Tailwind base/components/utilities a prípadné globálne úpravy.

Odporúčania:
- V Tailwind projekte držte custom utility/overrides tu alebo v samostatných partials importovaných do `global.css`.
- Ak pridáte CSS pre tretie strany (napr. animácie), držte ich oddelene a importujte cez `global.css` alebo v entry bode komponentu, ak je to izolované.
