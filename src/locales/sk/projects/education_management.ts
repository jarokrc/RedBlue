import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const educationManagement: ProjectPost = {
  slug: "education-management",
  title: "Moderné riešenie na správu vzdelávacích inštitúcií",
  date: "2024-07-26",
  readTime: "3 min čítanie",
  summary: "Desktopová aplikácia pre správu kurzov, študentov a zamestnancov s modulárnou architektúrou, postavená na JavaFX a databáze.",
  body: [
    "Komplexné riešenie pre manažment vzdelávacích inštitúcií – kurzy, študenti, zamestnanci a ich vzťahy na jednom mieste.",
    "UI v JavaFX je moderné a prehľadné aj pre netechnických používateľov: kurzy, zápisy študentov a údaje zamestnancov na pár klikov.",
    "Modulárna architektúra (CRUD pre kurzy, študentov, zamestnancov, väzby kurz-študent) sa dá rozširovať a prepájať s inými systémami.",
    "Bezpečnosť a spoľahlivosť dát: robustné prístupy a kontrola prístupu k informáciám.",
    "Databázová vrstva (MySQL/JDBC) automatizuje zápisy, aktualizácie aj reporting, čím šetrí čas pri prevádzke inštitúcie.",
  ],
  content: [
    "Moderné riešenie na správu vzdelávacích inštitúcií: správa kurzov, študentov, zamestnancov a ich vzťahov na jednom mieste, s dôrazom na efektivitu a prehľadnosť.",
    "Výhody a možnosti využitia: správa kurzov (pridanie, aktualizácia, odstránenie, priradenie trénera), správa študentov (zápisy, účasť, údaje), správa zamestnancov (pozície, kontakty, priradenie k kurzom), prehľadné JavaFX rozhranie.",
    "Silné stránky: jednoduchosť a prehľadnosť UI; flexibilita a rozšíriteľnosť architektúry; bezpečnosť a spoľahlivosť údajov; automatizácia úloh vďaka databáze.",
    "Prečo si vybrať: moderné, flexibilné a bezpečné riešenie, prispôsobiteľné veľkosti inštitúcie, ktoré optimalizuje procesy od kurzov až po správu zamestnancov a študentov.",
    "Investícia do nástroja, ktorý prináša konkurenčnú výhodu a umožní sústrediť sa na kvalitné vzdelávanie, nie na manuálnu správu údajov.",
  ],
  tech: ["Java", "JavaFX", "MySQL", "JDBC"],
  link: "https://github.com/jarokrc/Bildungsinstitute",
  image: "projects/Sprava_vzdelavacích_institucii/picture1.png",
  gallery: ["projects/Sprava_vzdelavacích_institucii/picture1.png", "projects/Sprava_vzdelavacích_institucii/picture2.png"],
};

export default educationManagement;
