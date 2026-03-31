import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const simpleNote: ProjectPost = {
  slug: "simple-note",
  title: "SimpleNote - Aufgabenverwaltung",
  date: "2024-06-13",
  readTime: "2 Min. Lesezeit",
  summary: "WPF/MVVM-App für Aufgaben mit Prioritäten, CSV-Import/Export und Sprachwechsel (EN/DE).",
  body: [
    "Aufgaben anlegen, bearbeiten, löschen mit Beschreibung und Priorität.",
    "CSV-Export/Import hält Daten gesichert und teilbar.",
    "Einfaches UI mit Sprachumschaltung in der App.",
    "MVVM-Architektur für sauberen, wartbaren Code.",
  ],
  content: [
    "SimpleNote bietet einen übersichtlichen Aufgabenmanager mit Prioritäten und moderner MVVM-Basis.",
    "Funktionen: Aufgaben CRUD, CSV-Speicher, klare UI, Sprachtoggle EN/DE.",
    "Warum besonders: saubere Architektur (INotifyPropertyChanged, ObservableCollection, RelayCommand).",
    "Für wen: Profis, Studierende, Teams – alle, die Ordnung ohne Ballast wollen.",
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
