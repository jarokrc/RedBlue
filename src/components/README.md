# components/

Účel: zdieľané UI komponenty, ktoré nie sú viazané na konkrétnu feature.

Aktuálne:
- `Layout.tsx` – shell aplikácie (header s navigáciou a prepínačom jazyka, main wrapper, footer s odkazmi na Privacy/Cookies).

Odporúčania:
- Vytvárajte sem iba komponenty, ktoré sa používajú na viacerých stránkach/sekciách (napr. Button, Card, Navbar, Footer, Modal).
- Feature-špecifické komponenty držte v `src/features/<feature>/components` alebo priamo v sekciách/stránkach, ak sú jednorazové.
- Udržujte malú, znovupoužiteľnú API a jasné pomenovanie.
