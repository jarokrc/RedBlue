import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const webCalculator: ProjectPost = {
  slug: "web-calculator",
  title: "WEB Pricing Studio - System zur Erstellung von Preisangeboten",
  date: "2025-12-19",
  readTime: "2 Min. Lesezeit",
  summary:
    "Professionelles **Studio zur Erstellung von Preisangeboten** für Webprojekte: Erstellen Sie **präzise Angebote in wenigen Minuten** mit **automatischer Kalkulation**, **flexiblen Paketen** und **PDF-Export** direkt für den Kunden.",
  body: [
    "**Vorkonfigurierte Pakete** mit automatischer Service-Kalkulation, Aktionspreisen und einer **sofortigen Vorschau des Gesamtpreises** inklusive aller enthaltenen Vorteile.",
    "**Umfangreicher Leistungskatalog** mit intelligenter Suche, Tags und **Inline-Bearbeitung** - Preise oder Mengen lassen sich direkt in der Oberfläche während eines Kundengesprächs anpassen.",
    "**Professionelle PDF-Ausgaben** mit editierbaren Bereichen, Ihrem Logo, **QR-Code zur Zahlung** und der Möglichkeit, ein Angebot, eine Proforma-Rechnung oder eine finale Rechnung zu erstellen.",
  ],
  content: [
    "**WEB Pricing Studio** ist ein internes Tool zur **Optimierung des Vertriebsprozesses** von Webagenturen. Mussten Sie schon einmal während eines Kundentermins schnell ein Angebot erstellen? Oder haben Sie Stunden mit Berechnungen in Excel verbracht? Dieses Studio **löst genau diesen schmerzhaften Engpass**.",
    "Die Anwendung bietet **drei Preis-Modi** (Grundpreis, Aktionspreis, interner Preis) mit automatischer Auswahl der enthaltenen Leistungen und Freikontingente. Mit einem Klick erstellen Sie ein komplettes Paket inklusive aller zusammenhängenden Positionen. Zusätzlich können **ergänzende Leistungen** aus einem umfangreichen Katalog hinzugefügt werden, aufgeteilt in Kategorien (PRIMARY/WEB/ESHOP) mit intelligenter Filterung und Suche.",
    "**Kundenprofile** lassen sich zusammen mit individuellen Rabatten, USt-Modus und Kontaktdaten speichern - ideal für wiederkehrende Zusammenarbeit. Alle Daten werden lokal im **JSON-Format** gespeichert, was Geschwindigkeit, Datenschutz und volle Kontrolle über Ihre Daten ohne Cloud-Anbindung sicherstellt.",
    "**PDF-Export** verwandelt Ihre Kalkulation in ein professionelles Dokument mit Ihrem Logo, editierbaren Bereichen (Lieferant, Zahlungsübersicht, Kunde, Zusammenfassung) und optionalem **QR-Code für Sofortzahlung**. Das Dokument kann als Angebot, Proforma-Rechnung oder finale Rechnung mit **automatisch generiertem variablem Symbol** erstellt werden. Das Ergebnis? Eine professionelle Präsentation, die **Vertrauen aufbaut** und die Entscheidung des Kunden beschleunigt.",
  ],
  tech: ["Python", "CustomTkinter", "Tkinter", "JSON", "PDF Export"],
  link: "https://github.com/jarokrc/WEB_calculator",
  image: "projects/WEB_calculator/1.webp",
  gallery: [
    "projects/WEB_calculator/2.webp",
    "projects/WEB_calculator/3.webp",
    "projects/WEB_calculator/4.webp",
    "projects/WEB_calculator/5.webp",
  ],
};

export default webCalculator;
