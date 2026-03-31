import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const webCalculator: ProjectPost = {
  slug: "web-calculator",
  title: "WEB Pricing Studio - systém pre tvorbu cenových ponúk",
  date: "2025-12-19",
  readTime: "2 min čítanie",
  summary:
    "Profesionálne **štúdio pre tvorbu cenových ponúk** webových projektov: vytvorte **presné ponuky za minúty** s **automatickou kalkuláciou**, **flexibilnými balíčkami** a **PDF exportom** priamo pre klienta.",
  body: [
    "**Predkonfigurované balíčky** s automatickou kalkuláciou služieb, promo cenami a **okamžitým náhľadom celkovej ceny** vrátane všetkých zahrnutých benefitov.",
    "**Rozsiahly katalóg služieb** s inteligentným vyhľadávaním, tagmi a **inline editáciou** - upravte ceny alebo množstvá priamo v rozhraní počas konzultácie s klientom.",
    "**Profesionálne PDF výstupy** s editovateľnými sekciami, vašim logom, **QR kódom na platbu** a možnosťou vytvoriť ponuku, zálohovú faktúru alebo finálnu faktúru.",
  ],
  content: [
    "**WEB Pricing Studio** je interný nástroj vyvinutý pre **optimalizáciu predajného procesu** webových agentúr. Potrebovali ste niekedy rýchlo pripraviť cenovú ponuku počas meeting-u s klientom? Alebo strávili hodiny výpočtami v Exceli? Toto štúdio **rieši presne túto bolestivú situáciu**.",
    "Aplikácia ponúka **tri cenové režimy** (základná cena, promo akcia, interná cena) s automatickým výberom zahrnutých služieb a bezplatných kvót. Jedným klikom vytvoríte kompletný balíček vrátane všetkých súvisiacich položiek. K nim môžete pridať **doplnkové služby** z rozsiahleho katalógu rozdelené do kategórií (PRIMARY/WEB/ESHOP) s inteligentným filtrom a vyhľadávaním.",
    "**Klientske profily** si uložíte vrátane individuálnych zliav, DPH módu a kontaktných údajov - ideálne pre opakovanú spoluprácu. Všetky dáta sú uložené lokálne v **JSON formáte**, čo zabezpečuje rýchlosť, súkromie a plnú kontrolu nad vašimi dátami bez potreby cloudového pripojenia.",
    "**PDF export** transformuje vašu kalkuláciu na profesionálny dokument s vaším logom, editovateľnými sekciami (dodávateľ, prehľad platby, odberateľ, súvaha) a voliteľným **QR kódom pre okamžitú platbu**. Dokument môžete vygenerovať ako ponuku, zálohovú faktúru alebo finálnu faktúru s **automaticky generovaným variabilným symbolom**. Výsledok? Profesionálna prezentácia, ktorá **buduje dôveru** a urýchľuje rozhodovanie klienta.",
  ],
  tech: ["Python", "CustomTkinter", "Tkinter", "JSON", "PDF export"],
  link: "https://github.com/jarokrc/WEB_calculator",
  image: "projects/WEB_calculator/1.webp",
  gallery: [
    "projects/WEB_calculator/2.webp",
    "projects/WEB_calculator/3.webp",
    "projects/WEB_calculator/4.webp",
    "projects/WEB_calculator/5.webp",
  ],
};

export default webCalculator;
