# types/

Účel: zdieľané TypeScript typy a rozhrania naprieč aplikáciou.

Príklady:
- `api.ts` – generické typy API odpovedí, error shape
- `content.ts` – dátové modely (Project, Article, Pricing)
- `forms.ts` – vstupné typy pre formuláre, ak sa používajú vo viacerých features
- `enums.ts` – enumerácie a konštanty

Poznámky:
- Ak typ patrí len jednej feature, držte ho radšej v `src/features/<feature>/types.ts`.
- Udržujte zrozumiteľné mená a exporty; zbytočne nespájať nesúvisiace typy do jedného súboru.
