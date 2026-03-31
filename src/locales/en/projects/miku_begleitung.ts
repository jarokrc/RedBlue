import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const mikuBegleitung: ProjectPost = {
  slug: "miku-begleitung",
  title: "MiKu Begleitung - professional presentation",
  date: "2025-12-15",
  readTime: "2 min read",
  summary:
    "**Elegant German-language web presentation** built on a **modern React stack**: **lightning-fast loading**, **clean design**, and **professional security** for the Austrian market.",
  body: [
    "**Modern React 18 stack** with TypeScript and Tailwind CSS for **instant loading** and responsive design that creates a strong first impression on every device.",
    "**Secure contact integration** with bot protection, a **GDPR-friendly cookie banner**, and a professional privacy setup tailored for the German-speaking market.",
    "**Complete technical infrastructure** with form validation, automated testing, and a **production-ready** setup for reliable day-to-day operation.",
  ],
  content: [
    "**MiKu Begleitung** is a reference project for a **professional web presentation** built for the Austrian market. The client needed an **elegant, fast, and secure** German-language online presence that inspires trust and presents services in a modern way.",
    "We built the site on **React 18** with **TypeScript**, the **Vite 6** build system, and **Tailwind CSS** for precise responsive design. The result is a **lightning-fast presentation** with a polished visual style that loads almost instantly and delivers an **excellent user experience** across all devices.",
    "**Security and privacy** are critical for the German-speaking market. We implemented a **bot protection mechanism** using dynamic client-side email assembly, a **GDPR-compliant cookie banner** with transparent handling of technical cookies, and dedicated pages for **Datenschutz and Cookie Policy**. All settings are stored locally without unnecessary tracking.",
    "The technical implementation includes **React Router 7** for smooth navigation across six sections (home, about us, contact, privacy, cookies, 404), **React Hook Form with Zod validation** for safe data handling, **React Query** for efficient data operations, and a complete **testing infrastructure** with Vitest. The project is ready for **scaling and long-term maintenance** thanks to a clean codebase and a modern development setup.",
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
