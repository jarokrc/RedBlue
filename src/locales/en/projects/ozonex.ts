import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const ozonex: ProjectPost = {
  slug: "ozonex",
  title: "Ozone X - professional landing page",
  date: "2025-07-10",
  readTime: "2 min read",
  summary:
    "**High-converting landing page** for ozone cleaning and eco services: a **modern React stack**, **secure contact system**, and **smooth animations** designed for maximum engagement.",
  body: [
    "**Modern React 18 stack** with Tailwind CSS and a fixed navigation header for **instant loading** and intuitive movement between key sections.",
    "**Secure contact form** powered by EmailJS, Google reCAPTCHA protection, and honeypot technology for **maximum anti-spam protection** and **direct message delivery**.",
    "**Professional animations** with Framer Motion, premium Radix UI components, and **fully customizable content** for fast updates without touching code.",
  ],
  content: [
    "**Ozone X** is a reference project for a **high-converting landing page** built for a company specializing in ozone cleaning and eco-friendly disinfection services. The goal was to create an **attractive, fast, and conversion-focused** web presentation that clearly showcases the services and **motivates visitors to get in touch**.",
    "We built the landing page with **React 18**, the **Vite** build system, and **Tailwind CSS** for polished responsive design. The site includes **optimized sections** such as intro, services, technology, and results, combined with smart routing and a fixed anchor header for **smooth navigation**. Professional animations powered by **Framer Motion** create an **engaging user experience** that keeps attention and builds trust.",
    "**The contact system** was designed with both **security and conversion** in mind. The elegant modal form uses **EmailJS** for direct message delivery, **Google reCAPTCHA v2** for bot protection, **honeypot technology** for an extra security layer, and toast notifications for instant feedback. A **GDPR-compliant cookie banner** with custom settings stores user preferences transparently and securely in localStorage.",
    "The UI is built with **premium Radix UI components** in a shadcn-style approach, ensuring strong **accessibility** and a professional visual standard. All content is **centralized** in `src/data/content.jsx`, allowing the client to **quickly update** text, services, and visuals without editing code. The result? A **conversion-focused landing page** that not only looks strong, but **effectively generates leads** for the client's business.",
  ],
  tech: ["React 18", "Vite", "Tailwind CSS", "React Router 7", "React Helmet", "Radix UI", "framer-motion", "EmailJS", "Google reCAPTCHA"],
  link: "https://www.ozonex.sk/",
  linkLabel: "WEB",
  image: "projects/OzoneX/webka.png",
  gallery: [
    "projects/OzoneX/webka.png",
    "projects/OzoneX/webka2.png",
    "projects/OzoneX/code1.png",
    "projects/OzoneX/code2.png",
  ],
};

export default ozonex;
