import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const personenData: ProjectPost = {
  slug: "personen-data",
  title: "Správa osobných údajov (PersonenData)",
  date: "2024-04-05",
  readTime: "1 min čítanie",
  summary: "Python/Tkinter aplikácia na správu osobných údajov: pridávanie, úprava, filtrovanie, mazanie, narodeniny a validácia vstupov, ukladanie v JSON.",
  body: [
    "Jednoduché GUI v Tkinteri umožňuje rýchle pridávanie, úpravu a mazanie klientov.",
    "Automatické spracovanie narodenín zobrazuje dôležité dátumy priamo v rozhraní.",
    "Dôsledná validácia vstupov (dátum, email, telefón, povinné polia) zaručuje kvalitu dát.",
    "Filtrovanie údajov a bezpečné uloženie/načítanie v database.json pri štarte a ukončení aplikácie.",
  ],
  content: [
    "Program slúži na efektívnu správu osobných údajov: pridávanie, úprava, filtrovanie a odstraňovanie záznamov v prehľadnom GUI.",
    "Narodeniny sa automaticky spracujú a zobrazia v zozname, aby ste mali dôležité dátumy na očiach.",
    "Validácia údajov: kontrola formátu dátumu, emailu, telefónu a ďalších polí, aby nedochádzalo k chybným záznamom.",
    "Možnosť filtrovania podľa kritérií a bezpečné uloženie do JSON (database.json) s automatickým načítaním pri štarte.",
    "Prečo potrebujete tento nástroj: šetrí čas, zvyšuje presnosť dát, udrží poriadok v klientoch, zamestnancoch alebo študentoch.",
  ],
  tech: ["Python", "Tkinter", "JSON storage", "Validation", "Filtering"],
  link: "https://github.com/jarokrc/Comprehensive-personal-data-management-system",
  image: "projects/PersonenData/personendatenfassung_3.png",
  gallery: [
    "projects/PersonenData/personendatenfassung_3.png",
    "projects/PersonenData/personendatenfassung_1.png",
    "projects/PersonenData/code1.png",
    "projects/PersonenData/code2.png",
  ],
};

export default personenData;
