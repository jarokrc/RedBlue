import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const invoiceCreatorApp: ProjectPost = {
  slug: "invoice-creator-app",
  title: "InvoiceCreatorApp - Fakturierung leicht gemacht",
  date: "2024-06-06",
  readTime: "2 Min. Lesezeit",
  summary: "WPF/MVVM-App für Freelancer und KMU: Rechnungen, Kunden/Produkte, Monatsbilanz, Passwortschutz.",
  body: [
    "Intuitive UI, anpassbare Vorlagen (Logo, Farben, Layout), automatische MwSt.-Berechnung.",
    "Kunden- und Produktdaten speichern beschleunigt Rechnungen; Passwort schützt Daten.",
    "Monatsbilanz für Einnahmen/Ausgaben mit Endsaldo.",
    "Suche/Filter nach Datum, Kunde, Betrag (z. B. offen oder Zeitraum).",
  ],
  content: [
    "InvoiceCreatorApp: Tool für schnelle, sichere Rechnungen und Finanzübersicht.",
    "Stärken: einfache Bedienung, individuell anpassbare Vorlagen, automatische Berechnungen, gespeicherte Kunden/Produkte, Zugang per Passwort.",
    "Funktionen: Rechnungen anlegen/bearbeiten/speichern, Kunden/Produkte verwalten, Monatsbilanzen, starke Suche/Filter.",
    "Warum wählen: Effizienz, lokale Zuverlässigkeit (ohne Cloud), passt zu verschiedenen Firmengrößen.",
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
