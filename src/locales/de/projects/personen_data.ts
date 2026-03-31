import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const personenData: ProjectPost = {
  slug: "personen-data",
  title: "PersonenData - Personendaten verwalten",
  date: "2024-04-05",
  readTime: "1 Min. Lesezeit",
  summary: "Python/Tkinter-App für Personendaten: anlegen, bearbeiten, filtern, löschen, Geburtstage, Validierung, JSON-Speicher.",
  body: [
    "Einfaches Tkinter-GUI für schnelles Erfassen/Bearbeiten von Datensätzen.",
    "Geburtstage werden automatisch berechnet und angezeigt.",
    "Strenge Validierung (Datum, E-Mail, Telefon, Pflichtfelder) hält Daten sauber.",
    "Filterfunktionen plus sicheres Laden/Speichern in database.json.",
  ],
  content: [
    "Tool für effizientes Verwalten von Personendaten in einem klaren GUI.",
    "Geburtstage automatisch verarbeiten und anzeigen, damit wichtige Termine sichtbar bleiben.",
    "Validierung schützt vor falschen Eingaben (Datum, E-Mail, Telefon, Pflichtfelder).",
    "Filter nach Kriterien und JSON-Speicher mit Autoload beim Start.",
    "Nutzen: spart Zeit, erhöht Datenqualität und Ordnung für Kunden/Mitarbeitende/Studierende.",
  ],
  tech: ["Python", "Tkinter", "JSON", "Validierung", "Filter"],
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
