import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const footballManager: ProjectPost = {
  slug: "football-manager",
  title: "Fußballclub-Management",
  date: "2024-05-10",
  readTime: "2 Min. Lesezeit",
  summary: "Java-CLI-App zur Verwaltung von Clubs, Teams, Spielern und Trainern mit MySQL-Speicher und Transfers.",
  body: [
    "Clubs, Teams, Spieler, Trainer: anlegen, bearbeiten, löschen, Historie und Beziehungen in einem Tool.",
    "MySQL mit einzigartigen IDs hält Daten sicher und übersichtlich.",
    "Transfers zwischen Teams oder in den Free-Agent-Pool; freie Spieler/Trainer einfach managen.",
    "Klare CLI-Menüs (Club, Team, Player, Trainer, Manual) mit EN/DE-Handbuch.",
  ],
  content: [
    "Tool für Club- und Teammanager: alle Entitäten und Beziehungen in einer Anwendung.",
    "Vorteile: einfache Clubverwaltung, Teammanagement, sichere DB-Ablage, Transfers und Free-Agent-Verwaltung.",
    "User-Fokus: klare CLI-Struktur + Handbuch spart Zeit.",
    "Warum wählen: flexibel für kleine/große Clubs, schnelle Personalanpassungen, ordentliche Datenhaltung.",
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
