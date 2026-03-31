import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const invoiceCreatorApp: ProjectPost = {
  slug: "invoice-creator-app",
  title: "InvoiceCreatorApp - fakturácia na mieru",
  date: "2024-06-06",
  readTime: "2 min čítanie",
  summary: "WPF/MVVM aplikácia pre freelance a SMB: tvorba faktúr, správa zákazníkov a produktov, mesačné bilancie, zabezpečený prístup.",
  body: [
    "Jednoduché ovládanie, prispôsobiteľné šablóny (logo, farby, layout) a automatické výpočty vrátane DPH.",
    "Správa zákazníkov a produktov urýchľuje tvorbu faktúr; heslo chráni citlivé údaje.",
    "Mesačné bilancie zobrazujú príjmy a výdavky za obdobie s finálnym zostatkom.",
    "Vyhľadávanie a filtrovanie faktúr podľa dátumu, zákazníka či sumy (napr. nevyplatené alebo za konkrétne obdobie).",
  ],
  content: [
    "InvoiceCreatorApp je nástroj pre malé a stredné firmy aj freelancerov: zjednodušuje fakturačný proces a prináša kontrolu nad financiami.",
    "Silné stránky: intuitívne ovládanie, prispôsobiteľné šablóny faktúr, automatické výpočty DPH, ukladanie údajov o zákazníkoch a produktoch, zabezpečený prístup heslom.",
    "Kľúčové funkcie: správa faktúr (pridanie, úprava, uloženie, mazanie položiek), správa zákazníkov a produktov, mesačná bilancia príjmov/výdavkov, výkonné vyhľadávanie a filtrovanie.",
    "Prečo si vybrať: efektivita (sústredíte sa na dôležité úlohy), spoľahlivosť (lokálne, bez cloudu), dostupnosť (vhodné pre firmy rôznych veľkostí).",
  ],
  tech: ["C#", "WPF", "MVVM", "SQL DB"],
  link: "https://github.com/jarokrc/InvoiceCreatorApp",
  image: "projects/InvoiceCreatorApp/InvoiceCreatorApp_newInvoice.png",
  gallery: [
    "projects/InvoiceCreatorApp/InvoiceCreatorApp_login.png",
    "projects/InvoiceCreatorApp/InvoiceCreatorApp_newInvoice.png",
    "projects/InvoiceCreatorApp/InvoiceCreatorApp_einnahmen.png",
    "projects/InvoiceCreatorApp/InvoiceCreatorApp_ausgaben.png",
  ],
};

export default invoiceCreatorApp;
