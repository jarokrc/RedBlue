import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const mikuBegleitung: ProjectPost = {
  slug: "miku-begleitung",
  title: "MiKu Begleitung - professionelle Präsentation",
  date: "2025-12-15",
  readTime: "2 Min. Lesezeit",
  summary:
    "**Elegante deutschsprachige Webpräsenz** auf einem **modernen React-Stack**: **blitzschnelle Ladezeiten**, **klares Design** und **professionelle Sicherheit** für den österreichischen Markt.",
  body: [
    "**Moderner React-18-Stack** mit TypeScript und Tailwind CSS für **sofortiges Laden** und responsives Design, das auf jedem Gerät einen starken ersten Eindruck hinterlässt.",
    "**Sichere Kontaktintegration** mit Bot-Schutz, **GDPR-freundlichem Cookie-Banner** und einer professionellen Datenschutzlösung für den deutschsprachigen Markt.",
    "**Komplette technische Infrastruktur** mit Formularvalidierung, automatisierten Tests und einem **production-ready** Setup für einen zuverlässigen Betrieb.",
  ],
  content: [
    "**MiKu Begleitung** ist ein Referenzprojekt für eine **professionelle Webpräsentation** für den österreichischen Markt. Der Kunde benötigte eine **elegante, schnelle und sichere** Online-Visitenkarte auf Deutsch, die Vertrauen aufbaut und die Leistungen modern präsentiert.",
    "Die Website wurde mit **React 18**, **TypeScript**, dem Build-System **Vite 6** und **Tailwind CSS** für präzises responsives Design umgesetzt. Das Ergebnis ist eine **blitzschnelle Präsentation** mit professioneller Optik, die nahezu sofort lädt und auf allen Geräten ein **hervorragendes Nutzererlebnis** bietet.",
    "**Sicherheit und Datenschutz** sind für den deutschsprachigen Markt zentral. Wir haben einen **Schutzmechanismus gegen Bots** mit dynamischer clientseitiger Zusammensetzung der E-Mail-Adresse implementiert, ein **GDPR-konformes Cookie-Banner** mit transparenter Verwaltung technischer Cookies sowie professionelle Seiten für **Datenschutz und Cookie Policy**. Alle Einstellungen werden lokal und ohne unnötiges Tracking gespeichert.",
    "Die technische Umsetzung umfasst **React Router 7** für eine flüssige Navigation zwischen sechs Bereichen (Startseite, über uns, Kontakt, Datenschutz, Cookies, 404), **React Hook Form mit Zod-Validierung** für eine sichere Datenverarbeitung, **React Query** für effiziente Datenoperationen und eine vollständige **Testinfrastruktur** mit Vitest. Das Projekt ist dank sauberer Codebasis und modernem Entwicklungssetup auf **Skalierung und langfristige Wartung** vorbereitet.",
  ],
  tech: ["React 18", "TypeScript", "Vite 6", "Tailwind CSS", "React Router 7", "React Hook Form", "zod", "React Query"],
  link: "https://mikube.at/",
  linkLabel: "WEB",
  image: "projects/MiKuBegleitung/1.webp",
  gallery: [
    "projects/MiKuBegleitung/2.webp",
    "projects/MiKuBegleitung/3.webp",
    "projects/MiKuBegleitung/4.webp",
    "projects/MiKuBegleitung/5.webp",
  ],
};

export default mikuBegleitung;
