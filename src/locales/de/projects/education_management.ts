import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const educationManagement: ProjectPost = {
  slug: "education-management",
  title: "Modernes Tool für Bildungsmanagement",
  date: "2024-07-26",
  readTime: "3 Min. Lesezeit",
  summary: "JavaFX-Desktop-App zur Verwaltung von Kursen, Studierenden und Mitarbeitenden mit modularer Architektur.",
  body: [
    "Alles an einem Ort: Kurse, Studierende, Mitarbeitende und Beziehungen übersichtlich verwalten.",
    "Klares JavaFX-UI, auch für nicht-technische Nutzer; schnelle Kurs- und Teilnehmerpflege.",
    "Modulare CRUD-Layer (Kurs, Studierende, Mitarbeitende, Kurs-Studierende) und erweiterbar.",
    "Sichere, zuverlässige Datenhaltung mit MySQL/JDBC.",
  ],
  content: [
    "Modernes Management für Bildungsinstitute: Kurse, Studierende, Mitarbeitende, Beziehungen in einer Anwendung.",
    "Einsatz: Kurse anlegen/aktualisieren/löschen, Trainer zuordnen; Studierende verwalten; Mitarbeitende mit Rollen und Kontakten pflegen.",
    "Stärken: einfache Bedienung, flexible Architektur, sichere Daten, Automatisierung spart Zeit.",
    "Warum wählen: passt für kleine und große Institute, steigert Effizienz und Transparenz.",
  ],
  tech: ["Java", "JavaFX", "MySQL", "JDBC"],
  link: "https://github.com/jarokrc/Bildungsinstitute",
  image: "projects/Sprava_vzdelavacích_institucii/picture1.png",
  gallery: ["projects/Sprava_vzdelavacích_institucii/picture1.png", "projects/Sprava_vzdelavacích_institucii/picture2.png"],
};

export default educationManagement;
