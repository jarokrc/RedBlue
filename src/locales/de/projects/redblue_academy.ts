import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const redblueAcademy: ProjectPost = {
  slug: "redblue-academy",
  title: "RedBlue Academy - Plattform für Online-Bildung",
  date: "2025-03-28",
  readTime: "2 Min. Lesezeit",
  summary:
    "**Umfassende Bildungsplattform** mit **intelligentem Buchungssystem**, **interaktivem Kalender** und **Admin-Dashboard in Echtzeit** für effizientes Management von Lektionen und Studierenden.",
  body: [
    "**Intelligentes Buchungssystem** mit flexiblem Kalender: Studierende buchen Lektionen nach ihrem eigenen Zeitplan, während Lehrkräfte einen **vollständigen Überblick** über alle Aktivitäten behalten.",
    "**Sichere Authentifizierung** und Datenschutz, **automatische Buchung** weiterer Stunden sowie **personalisierte Betreuung** für jeden Studierenden mit Echtzeit-Synchronisierung.",
    "**Fortschrittliches Admin-Dashboard** mit Live-Überblick über Buchungen, **Analysen zum Engagement** der Studierenden und **datengetriebenen Tools** für bessere Entscheidungen.",
  ],
  content: [
    "**RedBlue Academy** ist ein Referenzprojekt für eine **umfassende Bildungsplattform**, aufgebaut auf einem robusten **Django-Backend** und einem modernen **React-Frontend**. Die Plattform verändert die Zusammenarbeit zwischen Lehrkräften und Studierenden, von der Buchung der ersten Lektion bis zur **langfristigen Fortschrittsverfolgung** und effizienten Planung der Lernzeit.",
    "Studierende erhalten **volle Kontrolle** über ihre Ausbildung. Der **intuitive Kalender** ermöglicht die Buchung von Lektionen mit wenigen Klicks, während das System **verfügbare Termine automatisch erkennt** und eine konfliktfreie Planung sicherstellt. Die **flexible Buchung** weiterer Stunden direkt in der Anwendung erlaubt es den Studierenden, das **Lerntempo an ihre Bedürfnisse anzupassen**. Alle Daten werden durch ein **robustes Authentifizierungssystem** geschützt, das die **Sicherheit und Privatsphäre** jedes Nutzers gewährleistet.",
    "Lehrkräfte und Administratoren erhalten **fortschrittliche Werkzeuge** für effizientes Management. Das **Admin-Dashboard in Echtzeit** bietet einen **sofortigen Überblick** über alle Buchungen, Bestellungen und Aktivitäten der Studierenden. **Analyse-Tools** zeigen das Engagement der Studierenden, die beliebtesten Unterrichtszeiten und Buchungstrends, was **datengetriebene Entscheidungen** und die Optimierung des Unterrichts ermöglicht. Die zentrale Verwaltung von Nutzern und Lektionen spart Zeit und **eliminiert administrativen Aufwand**.",
    "Die technische Umsetzung basiert auf einer **Django REST API** mit **MySQL-Datenbank** für zuverlässige Datenoperationen und Skalierbarkeit. Das **React-Frontend** mit modernen Komponenten sorgt für **responsives Design** und ein **flüssiges Nutzererlebnis** auf allen Geräten. Das Ergebnis? Eine **production-ready Plattform**, die Studierende und Lehrkräfte in **einer effizienten Lösung** für modernes Online-Lernen verbindet.",
  ],
  tech: ["Django", "React", "REST API", "MySQL"],
  link: "https://redblueacademy.com/",
  linkLabel: "WEB",
  image: "projects/RedBlueAcademy/redblueacademy_sk.png",
  gallery: ["projects/RedBlueAcademy/redblueacademy_sk.png"],
};

export default redblueAcademy;
