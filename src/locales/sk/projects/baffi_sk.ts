import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const baffiSk: ProjectPost = {
  slug: "baffi-sk",
  title: "Baffi.sk - migracia WordPress webu na moderny Next.js",
  date: "2026-03-03",
  readTime: "3 min citanie",
  summary:
    "Komplexná modernizácia firemného webu havarijnej služby: migrácia z **WordPress** na **Next.js 16** s pokročilou **SEO optimalizáciou**, **5-jazyčnou lokalizáciou** a meraným nárastom výkonu až o **400%**.",
  body: [
    "Transformácia zastaraného **WordPress** webu na moderný, bleskurýchly **Next.js** stack s **90.6/100** kvalitným skóre a profesionálnou **SEO vrstvou**.",
    "Viacjazyčná prezentácia v **5 jazykoch**, optimalizovaný obsah pre **7 kľúčových služieb** a komplexný marketing stack s **GTM**, **GA4** a **Consent Mode v2**.",
    "**3-5x rýchlejšie načítanie**, pokročilá ochrana proti botom, **strukturované dáta** a kompletná príprava na dlhodobý **organický rast v Google**.",
  ],
  content: [
    "**Baffi.sk** je referenčný projekt modernizácie firemnej webovej prezentácie pre havarijnú službu pôsobiacu v **Bratislave**. Klient potreboval nahradiť pomalý **WordPress** web moderným riešením, ktoré dokáže konkurovať v náročnom trhovom prostredí a priniesť **merateľné výsledky v organickom vyhľadávaní**.",
    "Projekt sme realizovali ako kompletnú migráciu na **Next.js 16** s **Reactom 19** a **TypeScriptom**. Výsledkom je viacjazyčná prezentácia v **5 jazykoch** (SK, EN, DE, HU, RU) s **7 optimalizovanými landing pages** pre kľúčové služby, profesionálnou SEO štruktúrou a výkonom, ktorý je **3-5x rýchlejší** než pôvodné riešenie.",
    "Technická realizácia zahŕňa pokročilú **SEO vrstvu** so **strukturovanými dátami** (LocalBusiness, Service, BreadcrumbList), **multilanguage sitemap** s hreflang tagmi, kompletné metadata pre všetky jazykové verzie a čistú canonical logiku. Web dosiahol v záverečnom audite hodnotenie **90.6/100**, pričom **SEO skóre je 95/100** a **analytics implementácia 99/100**.",
    "Kontaktný systém sme vybudovali s dôrazom na **bezpečnosť**: validácia vstupov, **Cloudflare Turnstile** ochrana, honeypot pole a **time-based bot detection**. Marketing stack zahŕňa **Google Tag Manager** s **Consent Mode v2**. Nasadenie na **Vercel** platforme zabezpečuje stabilitu, rýchlosť a jednoduchý release proces pre budúci rozvoj webu.",
  ],
  tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "next-intl", "Vercel", "Resend", "Cloudflare Turnstile", "GTM"],
  link: "https://baffi.sk/",
  linkLabel: "WEB",
  image: "projects/BaffiSk/1.svg",
  gallery: [
    "projects/BaffiSk/2.svg",
    "projects/BaffiSk/3.svg",
    "projects/BaffiSk/4.svg",
    "projects/BaffiSk/5.svg",
  ],
};

export default baffiSk;
