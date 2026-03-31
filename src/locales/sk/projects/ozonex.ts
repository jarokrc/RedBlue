import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const ozonex: ProjectPost = {
  slug: "ozonex",
  title: "Ozone X - profesionálna landing page",
  date: "2025-07-10",
  readTime: "2 min čítanie",
  summary: "**Vysokokonverzná landing page** pre ozónové čistenie a eko služby: **moderný React stack**, **bezpečný kontaktný systém** a **plynulé animácie** pre maximálny engagement.",
  body: [
    "**Moderný React 18 stack** s Tailwind CSS a fixným navigačným headerom - **okamžité načítanie** a intuitívna navigácia medzi kľúčovými sekciami.",
    "**Bezpečný kontaktný formulár** s EmailJS, Google reCAPTCHA ochranou a honeypot technológiou - **maximálna ochrana** proti spamu a **priamy prenos** správ.",
    "**Profesionálne animácie** s Framer Motion, prémiové Radix UI komponenty a **plne customizovateľný obsah** pre rýchle úpravy bez zásahu do kódu.",
  ],
  content: [
    "**Ozone X** je referenčný projekt **vysokokonverznej landing page** pre firmu špecializujúcu sa na ozónové čistenie a ekologické dezinfekčné služby. Cieľom bolo vytvoriť **atraktívnu, rýchlu a konverznú** webovú prezentáciu, ktorá efektívne prezentuje služby a **motivuje návštevníkov ku kontaktu**.",
    "Landing page sme postavili na **React 18** s **Vite** build systémom a **Tailwind CSS** pre dokonalý responzívny dizajn. Stránka obsahuje **optimalizované sekcie** (úvod, služby, technológie, výsledky) s inteligentným routingom a fixným headerom s kotvami pre **plynulú navigáciu**. Profesionálne animácie pomocou **Framer Motion** vytváraju **angažujúci používateľský zážitok**, ktorý zadržiava pozornosť a buduje dôveru.",
    "**Kontaktný systém** je navrhnutý s dôrazom na **bezpečnosť a konverziu**. Elegantný modalný formulár využíva **EmailJS** pre priamy prenos správ, **Google reCAPTCHA v2** proti botom, **honeypot technológiu** pre dodatočnú ochranu a toast notifikácie pre okamžitú spätnú väzbu. **GDPR-compliant cookie banner** s vlastnými nastaveniami a localStorage ukladá užívateľské preferencie transparentne a bezpečne.",
    "UI postavené na **prémiových Radix UI komponentoch** v shadcn štýle zabezpečuje **accessibility** a profesionálny vzhľad. Všetok obsah je **centralizovaný** v `src/data/content.jsx`, čo umožňuje klientovi **rýchlo upravovať** texty, služby a vizuálne prvky bez potreby zasahovať do kódu. Výsledok? **Konverzná landing page**, ktorá nielen krásne vyzerá, ale **efektívne generuje leady** pre podnikanie klienta.",
  ],
  tech: ["React 18", "Vite", "Tailwind CSS", "React Router 7", "React Helmet", "Radix UI", "framer-motion", "EmailJS", "Google reCAPTCHA"],
  link: "https://www.ozonex.sk/",
  linkLabel: "WEB",
  image: "projects/OzoneX/webka.png",
  gallery: ["projects/OzoneX/webka.png", "projects/OzoneX/webka2.png", "projects/OzoneX/code1.png", "projects/OzoneX/code2.png"],
};

export default ozonex;
