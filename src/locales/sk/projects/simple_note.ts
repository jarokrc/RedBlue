import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const simpleNote: ProjectPost = {
  slug: "simple-note",
  title: "SimpleNote - inovatívny program na správu úloh",
  date: "2024-06-13",
  readTime: "2 min čítanie",
  summary: "WPF/MVVM aplikácia na prehľadnú správu úloh s prioritami, CSV export/import a prepínaním jazykov.",
  body: [
    "Prehľadná správa úloh: pridávanie, úprava, mazanie, popis a priorita.",
    "Automatická synchronizácia údajov: ukladanie/načítanie do CSV pre zálohu alebo spoluprácu.",
    "Jednoduché ovládanie s moderným rozhraním a prepínaním jazykov v aplikácii.",
    "Postavené na MVVM pre stabilitu, ľahkú údržbu a rozšíriteľnosť.",
  ],
  content: [
    "Program ponúka jednoduché, no výkonné riešenie na správu úloh a projektov. Prehľadné UI a inteligentné funkcie šetria čas a zvyšujú efektivitu.",
    "Kľúčové vlastnosti: tvorba/úprava/mazanie úloh s popisom a prioritou; CSV export/import pre bezpečné uloženie a rýchlu výmenu dát; intuitívne ovládanie; prepínanie jazykov priamo v appke.",
    "Prečo je výnimočný: postavený na MVVM, INotifyPropertyChanged, ObservableCollection a RelayCommand pre čistý kód a jednoduchú údržbu.",
    "Pre koho: profesionáli, študenti, tímy – každý, kto chce mať prehľad o úlohách bez zbytočných komplikácií.",
  ],
  tech: ["C#", "WPF", "MVVM", "CSV", "INotifyPropertyChanged"],
  link: "https://github.com/jarokrc/SimpleNoteApp",
  image: "projects/SimpleNote/SimpleNoteApp_all.png",
  gallery: [
    "projects/SimpleNote/SimpleNoteApp_all.png",
    "projects/SimpleNote/SimpleNoteApp_english.png",
    "projects/SimpleNote/code1.png",
    "projects/SimpleNote/code2.png",
  ],
};

export default simpleNote;
