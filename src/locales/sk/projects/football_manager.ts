import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const footballManager: ProjectPost = {
  slug: "football-manager",
  title: "Správa futbalového klubu",
  date: "2024-05-10",
  readTime: "2 min čítanie",
  summary: "Java aplikácia na správu futbalových klubov, tímov, hráčov a trénerov s databázovým uložením a transfermi.",
  body: [
    "Komplexná správa klubov, tímov, hráčov a trénerov; pridávanie, editácia, mazanie, história a vzťahy na jednom mieste.",
    "Databázové úložisko (MySQL) s unikátnymi ID pre každý subjekt zaisťuje poriadok a bezpečnosť údajov.",
    "Transfery hráčov a trénerov medzi tímami alebo do voľného stavu; správa voľných hráčov/trénerov čakajúcich na angažmán.",
    "CLI rozhranie s jasnými menu (klub, tím, hráč, tréner, manuál) a manuálom v EN/DE pre rýchlu orientáciu.",
  ],
  content: [
    "Program prináša inovatívne riešenia pre manažérov futbalových klubov a tímov: správa klubov, tímov, hráčov, trénerov a ich vzájomných vzťahov v jednej aplikácii.",
    "Hlavné výhody: jednoduchá správa klubov (pridanie, úprava, odstránenie), manažment tímov, bezpečné ukladanie údajov v databáze, transfery hráčov/trénerov a správa voľných hráčov/trénerov.",
    "Používateľská prívetivosť: jasné menu v CLI a detailný manuál (EN/DE) šetria čas a zjednodušujú prácu manažéra.",
    "Prečo si vybrať: flexibilné riešenie pre malé aj veľké kluby, ktoré potrebujú rýchlo reagovať na personálne zmeny a mať dáta v poriadku.",
  ],
  tech: ["Java", "MySQL", "JDBC", "CLI"],
  link: "https://github.com/jarokrc/Football_Manager_Program2",
  image: "projects/Footbal_manager/footbal_manager_menu.png",
  gallery: [
    "projects/Footbal_manager/footbal_manager_menu.png",
    "projects/Footbal_manager/footbal_manager_club.png",
    "projects/Footbal_manager/footbal_manager_player.png",
    "projects/Footbal_manager/footbal_manager_manual.png",
  ],
};

export default footballManager;
