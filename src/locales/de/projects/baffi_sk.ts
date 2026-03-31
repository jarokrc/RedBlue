import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const baffiSk: ProjectPost = {
  slug: "baffi-sk",
  title: "Baffi.sk - WordPress-Migration auf eine moderne Next.js Site",
  date: "2026-03-03",
  readTime: "3 Min. Lesezeit",
  summary:
    "Umfassende Modernisierung einer Firmenwebsite fuer einen Notdienst: Migration von **WordPress** auf **Next.js 16** mit fortgeschrittener **SEO-Optimierung**, **5-sprachiger Lokalisierung** und gemessenem Performance-Zuwachs von bis zu **400%**.",
  body: [
    "Transformation einer veralteten **WordPress**-Website in einen modernen, extrem schnellen **Next.js** Stack mit einem Qualitaets-Score von **90.6/100** und professioneller **SEO-Schicht**.",
    "Mehrsprachige Praesentation in **5 Sprachen**, optimierter Content fuer **7 Schluessel-Services** und ein kompletter Marketing-Stack mit **GTM**, **GA4** und **Consent Mode v2**.",
    "**3-5x schnellere Ladezeiten**, fortgeschrittener Bot-Schutz, **strukturierte Daten** und komplette Vorbereitung auf langfristiges **organisches Wachstum in Google**.",
  ],
  content: [
    "**Baffi.sk** ist ein Referenzprojekt zur Modernisierung einer Firmenwebsite fuer einen Notdienst in **Bratislava**. Der Kunde brauchte einen Ersatz fuer eine langsame **WordPress**-Seite durch eine moderne Loesung, die sich in einem anspruchsvollen Markt behaupten und **messbare Ergebnisse in der organischen Suche** liefern kann.",
    "Wir haben das Projekt als komplette Migration auf **Next.js 16** mit **React 19** und **TypeScript** umgesetzt. Das Ergebnis ist eine mehrsprachige Praesentation in **5 Sprachen** (SK, EN, DE, HU, RU) mit **7 optimierten Landingpages** fuer Schluessel-Services, professioneller SEO-Struktur und einer Performance, die **3-5x schneller** ist als die urspruengliche Loesung.",
    "Die technische Umsetzung umfasst eine fortgeschrittene **SEO-Schicht** mit **strukturierten Daten** (LocalBusiness, Service, BreadcrumbList), eine **mehrsprachige Sitemap** mit hreflang-Tags, vollstaendige Metadaten fuer alle Sprachversionen und saubere Canonical-Logik. Im finalen Audit erreichte die Website **90.6/100**, davon **95/100 fuer SEO** und **99/100 fuer die Analytics-Implementierung**.",
    "Das Kontaktsystem haben wir mit Fokus auf **Sicherheit** aufgebaut: Validierung der Eingaben, **Cloudflare Turnstile** Schutz, Honeypot-Feld und **zeitbasierte Bot-Erkennung**. Der Marketing-Stack umfasst **Google Tag Manager** mit **Consent Mode v2**. Das Deployment auf **Vercel** sorgt fuer Stabilitaet, Geschwindigkeit und einen sauberen Release-Prozess fuer die weitere Entwicklung der Website.",
  ],
  tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "next-intl", "Vercel", "Resend", "Cloudflare Turnstile", "GTM"],
  link: "https://baffi.sk/",
  linkLabel: "WEB",
  image: "projects/BaffiSk/1.svg",
  gallery: [
    "projects/BaffiSk/2.svg",
    "projects/BaffiSk/3.svg",
    "projects/BaffiSk/4.svg",
    "projects/BaffiSk/5.svg",
  ],
};

export default baffiSk;
