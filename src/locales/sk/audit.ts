export default {
  marketingPage: {
    intro:
      "Technická kontrola verejne dostupnej časti webu bez interakcie používateľa. Zameranie: cookies/consent, transparentnosť spracúvania, bezpečnostné riziká, verejné zdroje a technické metadáta.",
    hero: {
      badge: "IT Audit",
      title: "Konajte skôr ako úradná kontrola",
      subtitle:
        "IT audit nie je strašenie. Je to prevencia. Otázka nie je, či máte problém – ale či o ňom viete skôr, než príde kontrola.",
      positioning: ["Cookies & consent", "Transparentnosť & kontakty", "Bezpečnosť & metadáta", "Verejné zdroje"],
      ctaPrimary: "Chcem IT audit",
      ctaSecondary: "Pozrieť rozsah",
    },
    offeringsTitle: "Rozsah auditu",
    offerings: [
      "Vstup: URL webu, audit beží bez interakcie používateľa, pri potrebe renderujeme JavaScript.",
      "Normalizácia URL, HTTP požiadavka s definovaným User-Agent, fallback www/non-www.",
      "HTML/DOM analýza: title, meta, generator/platforma, externé skripty a domény tretích strán, štruktúra navigácie.",
      "Extrakcia kontaktov a identifikácie prevádzkovateľa (názov, sídlo, IČO/DIČ).",
      "Detekcia cookies, localStorage a sessionStorage, klasifikácia a indikátory trackingu.",
      "Test cookie banneru a consent akcií: pasívny load, odmietnutie, akceptovanie.",
      "Renderovanie JS pre dynamický obsah + sieťové požiadavky a zmeny po interakcii.",
      "Zber verejných súborov (obrázky, dokumenty, médiá) a upozornenie na riziká.",
      "Scenáre testovania (scroll, jazyk, error probe, probe test) a rozdiely medzi nimi.",
      "Hodnotenie závažnosti v 4 úrovniach: Kritické, Dôležité, Odporúčané, Bežné metadáta.",
      "Voliteľné lokálne AI vyhodnotenie (overenie prevádzkovateľa, interpretácia consentu) ako podpora.",
      "Obmedzenia: bez penetračných testov, bez interných systémov a bez login testov.",
    ],
    marketingTitle: "Výsledok pre klienta",
    marketingText:
      "Jasný prehľad zistení a priorít, dôkazy, metodika a odporúčané kroky. Výstup tvorí JSON a dva PDF dokumenty (IT audit + detailná analýza). Pri kritickom cookie zistení prikladáme stanovisko úradu. Audit je technická kontrola, nie právny posudok.\n\nV EÚ môžu pokuty dosiahnuť až 20 000 000 € alebo 4 % obratu.",
    packagesTitle: "Výstupy auditu",
    packages: [
      {
        icon: "🧾",
        title: "IT audit (PDF)",
        subtitle: "Prehľad pre manažment",
        description: "Zhrnutie výsledku auditu pre rýchle rozhodnutia.",
        bullets: [
          "Identifikácia webu a prevádzkovateľa (zistené z webu)",
          "Dátum auditu a použitý scenár (pasívny test + JS render)",
          "Rozsah a účel auditu",
          "Skóre a interný rating kvality",
          "Kľúčové zistenia podľa závažnosti",
          "Odporúčané nápravné opatrenia (A/B/C)",
        ],
      },
      {
        icon: "🔍",
        title: "Detailná technická analýza (PDF)",
        subtitle: "Metodika a dôkazy",
        description: "Kompletný technický dokument pre implementáciu.",
        bullets: [
          "Metodika testovania a zdroje dôkazov",
          "Scenáre a rozdiely (pasívny load, odmietnutie, akceptovanie)",
          "Zistenia, riziká a odporúčania",
          "Zoznam cookies, storage a externých zdrojov",
        ],
      },
      {
        icon: "🧩",
        title: "Technický export (JSON)",
        subtitle: "Strojovo spracovateľné dáta",
        description: "Pre interný reporting, vývoj a automatizáciu.",
        bullets: [
          "Cookies + kategórie",
          "localStorage / sessionStorage",
          "Indikátory trackingu",
          "Scenáre a hodnotenia",
        ],
      },
    ],
  },
};
