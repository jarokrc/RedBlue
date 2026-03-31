import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const webAudit: ProjectPost = {
  slug: "web-audit",
  title: "WEB Audit Tool - inteligentný audit webu",
  date: "2026-02-10",
  readTime: "3 min čítanie",
  summary:
    "**Automatizovaný audit webových stránok** pre **cookies, consent, GDPR riziká, verejne dostupné dáta a technické slabiny**. Výsledkom je **jasný report, priority a odporúčania**, ktoré šetria čas IT aj klientovi.",
  body: [
    "**Kontrola cookies a consentu** v reálnych scenároch - prvé načítanie, odmietnutie aj akceptovanie, aby bolo jasné, čo sa na webe deje ešte pred súhlasom návštevníka.",
    "**Odhalenie technických a reputačných rizík** - tracking skripty, chýbajúce údaje prevádzkovateľa, verejne dostupné súbory, kontakty, anti-spam ochrany aj podozrivé externé zdroje.",
    "**Profesionálne výstupy pre obchod aj techniku** - stručný prehľad pre klienta, detailná technická analýza, JSON dáta a podklady pre rýchle rozhodnutie o ďalších krokoch.",
  ],
  content: [
    "**WEB Audit Tool** je interný nástroj na **automatizovanú kontrolu webu** z pohľadu cookies, consentu, transparentnosti, bezpečnosti a technickej kvality. Pomáha rýchlo odhaliť, či web zbiera dáta korektne, či sa na ňom nespúšťa tracking príliš skoro a či neobsahuje slabé miesta, ktoré môžu poškodiť dôveru, reputáciu alebo interné procesy.",
    "Audit simuluje **reálne správanie návštevníka** na moderných aj dynamických stránkach. Testuje pasívne načítanie webu, odmietnutie a akceptovanie cookies, sleduje bannery, cookies, storage a sieťové požiadavky a porovnáva rozdiely medzi scenármi. Vďaka tomu vie spoľahlivo ukázať, **čo sa deje pred súhlasom**, ktoré skripty sa spúšťajú, či funguje odmietnutie a kde vzniká najväčšie riziko.",
    "Súčasťou kontroly je aj **širší technický a reputačný obraz webu**: identifikácia prevádzkovateľa, kontaktné údaje, ochranné mechanizmy proti spamu, verejne dostupné dokumenty alebo archívy, tracking nástroje, externé domény aj základné metadata. Nástroj tak neslúži len na GDPR kontrolu, ale na **rýchlu diagnostiku stavu webu**, ktorú vie pochopiť obchodník, marketér aj developer.",
    "Výstupom sú **prehľadné reporty a technické dáta pripravené na akciu**. Klient dostane stručný manažérsky prehľad, technický tím detailnú analýzu s dôkazmi a prioritami a podľa potreby aj JSON výstup či podklady pre cenovú ponuku ďalších úprav. Výsledok? **Rýchlejšie rozhodovanie, jasné priority a menej slepých miest** pri správe a rozvoji webu. Audit nenahrádza právny posudok, ale výrazne zjednodušuje prípravu na ďalšie kroky.",
  ],
  tech: ["Python", "Playwright", "BeautifulSoup", "Selenium", "JSON", "PDF export", "Headless Browser"],
  image: "projects/Audit_web/hero",
  gallery: [
    "projects/Audit_web/1",
    "projects/Audit_web/2",
    "projects/Audit_web/3",
    "projects/Audit_web/4",
  ],
};

export default webAudit;
