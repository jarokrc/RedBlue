import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const ozonex: ProjectPost = {
  slug: "ozonex",
  title: "Ozone X - professionelle Landingpage",
  date: "2025-07-10",
  readTime: "2 Min. Lesezeit",
  summary:
    "**Conversion-starke Landingpage** für Ozonreinigung und Öko-Services: **moderner React-Stack**, **sicheres Kontaktsystem** und **flüssige Animationen** für maximales Engagement.",
  body: [
    "**Moderner React-18-Stack** mit Tailwind CSS und fixem Navigations-Header für **sofortiges Laden** und intuitive Navigation zwischen den wichtigsten Sektionen.",
    "**Sicheres Kontaktformular** mit EmailJS, Google reCAPTCHA-Schutz und Honeypot-Technologie für **maximalen Schutz** vor Spam und **direkte Übermittlung** von Nachrichten.",
    "**Professionelle Animationen** mit Framer Motion, hochwertige Radix UI Komponenten und **vollständig anpassbarer Content** für schnelle Änderungen ohne Eingriff in den Code.",
  ],
  content: [
    "**Ozone X** ist ein Referenzprojekt für eine **conversion-starke Landingpage** für ein Unternehmen, das auf Ozonreinigung und ökologische Desinfektionsservices spezialisiert ist. Ziel war es, eine **attraktive, schnelle und conversion-orientierte** Webpräsenz zu schaffen, die die Leistungen klar präsentiert und **Besucher effektiv zur Kontaktaufnahme motiviert**.",
    "Die Landingpage wurde mit **React 18**, dem Build-System **Vite** und **Tailwind CSS** für ein präzises responsives Design umgesetzt. Die Seite enthält **optimierte Sektionen** wie Intro, Leistungen, Technologien und Ergebnisse sowie intelligentes Routing und einen fixen Header mit Ankern für **flüssige Navigation**. Professionelle Animationen mit **Framer Motion** schaffen ein **ansprechendes Nutzererlebnis**, das Aufmerksamkeit hält und Vertrauen aufbaut.",
    "**Das Kontaktsystem** wurde mit Fokus auf **Sicherheit und Conversion** entwickelt. Das elegante modale Formular nutzt **EmailJS** für die direkte Zustellung von Nachrichten, **Google reCAPTCHA v2** gegen Bots, **Honeypot-Technologie** als zusätzliche Schutzschicht und Toast-Benachrichtigungen für sofortiges Feedback. Ein **GDPR-konformes Cookie-Banner** mit eigenen Einstellungen speichert Benutzerpräferenzen transparent und sicher in localStorage.",
    "Das UI basiert auf **hochwertigen Radix UI Komponenten** im shadcn-Stil und sorgt so für starke **Accessibility** und ein professionelles Erscheinungsbild. Sämtliche Inhalte sind in `src/data/content.jsx` **zentralisiert**, sodass der Kunde Texte, Leistungen und visuelle Elemente **schnell anpassen** kann, ohne in den Code einzugreifen. Das Ergebnis? Eine **conversion-orientierte Landingpage**, die nicht nur stark aussieht, sondern **effektiv Leads generiert**.",
  ],
  tech: ["React 18", "Vite", "Tailwind CSS", "React Router 7", "React Helmet", "Radix UI", "framer-motion", "EmailJS", "Google reCAPTCHA"],
  link: "https://www.ozonex.sk/",
  linkLabel: "WEB",
  image: "projects/OzoneX/webka.png",
  gallery: ["projects/OzoneX/webka.png", "projects/OzoneX/webka2.png", "projects/OzoneX/code1.png", "projects/OzoneX/code2.png"],
};

export default ozonex;
