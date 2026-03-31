import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const mikuBegleitung: ProjectPost = {
  slug: "miku-begleitung",
  title: "MiKu Begleitung - profesionálna prezentácia",
  date: "2025-12-15",
  readTime: "2 min čítanie",
  summary:
    "**Elegantná nemecká webová prezentácia** postavená na **modernom React stacku**: **bleskurýchle načítanie**, **čistý dizajn** a **profesionálna bezpečnosť** pre rakúsky trh.",
  body: [
    "**Moderný React 18 stack** s TypeScriptom a Tailwind CSS - **instant loading** a responzívny dizajn pre dokonalý prvý dojem na každom zariadení.",
    "**Bezpečná kontaktná integrácia** s ochranou proti botom, **GDPR-friendly cookie banner** a profesionálne riešenie súkromia pre nemecky hovoriaci trh.",
    "**Kompletná technická infraštruktúra** s validáciou formulárov, automatizovaným testovaním a **production-ready** nastavením pre spoľahlivú prevádzku.",
  ],
  content: [
    "**MiKu Begleitung** je referenčný projekt **profesionálnej webovej prezentácie** pre rakúsky trh. Klient potreboval **elegantnú, rýchlu a bezpečnú** online vizitku v nemčine, ktorá buduje dôveru a prezentuje služby moderným spôsobom.",
    "Web sme vybudovali na **React 18** s **TypeScriptom**, **Vite 6** build systémom a **Tailwind CSS** pre dokonalý responzívny dizajn. Výsledkom je **bleskurýchla prezentácia** s profesionálnym vzhľadom, ktorá sa načíta takmer okamžite a poskytuje **perfektný používateľský zážitok** na všetkých zariadeniach.",
    "**Bezpečnosť a súkromie** sú kľúčové pre nemecky hovoriaci trh. Implementovali sme **ochranný mechanizmus proti botom** s dynamickým skladaním emailovej adresy na strane klienta, **GDPR-compliant cookie banner** s transparentným spravovaním technických cookies a profesionálne stránky pre **Datenschutz a Cookie Policy**. Všetky nastavenia sa ukladajú lokálne bez zbytočného sledovania.",
    "Technická realizácia zahŕňa **React Router 7** pre plynulú navigáciu medzi šiestimi sekciami (domov, o nás, kontakt, ochrana údajov, cookies, 404), **React Hook Form s Zod validáciou** pre bezpečné spracovanie dát, **React Query** pre efektívne dátové operácie a kompletnú **testovaciu infraštruktúru** s Vitest. Projekt je pripravený na **škálovanie a dlhodobú údržbu** s čistou kódovou základňou a moderne nastaveným vývojovým prostredím.",
  ],
  tech: ["React 18", "TypeScript", "Vite 6", "Tailwind CSS", "React Router 7", "React Hook Form", "zod", "React Query"],
  link: "https://mikube.at/",
  linkLabel: "WEB",
  image: "projects/MiKuBegleitung/1.webp",
  gallery: [
    "projects/MiKuBegleitung/2.webp",
    "projects/MiKuBegleitung/3.webp",
    "projects/MiKuBegleitung/4.webp",
    "projects/MiKuBegleitung/5.webp",
  ],
};

export default mikuBegleitung;
