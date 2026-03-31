import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const baffiSk: ProjectPost = {
  slug: "baffi-sk",
  title: "Baffi.sk - WordPress migration to a modern Next.js site",
  date: "2026-03-03",
  readTime: "3 min read",
  summary:
    "A full-scale modernization of an emergency service company website: migration from **WordPress** to **Next.js 16** with advanced **SEO optimization**, **5-language localization**, and measured performance gains of up to **400%**.",
  body: [
    "A transformation of an outdated **WordPress** site into a modern, extremely fast **Next.js** stack with a **90.6/100** quality score and a professional **SEO layer**.",
    "Multilingual presentation in **5 languages**, optimized content for **7 key services**, and a full marketing stack with **GTM**, **GA4**, and **Consent Mode v2**.",
    "Loading is **3-5x faster**, bot protection is more advanced, **structured data** is in place, and the website is fully prepared for long-term **organic growth in Google**.",
  ],
  content: [
    "**Baffi.sk** is a showcase project focused on modernizing a company website for an emergency service operating in **Bratislava**. The client needed to replace a slow **WordPress** website with a modern solution capable of competing in a demanding market and delivering **measurable results in organic search**.",
    "We delivered the project as a full migration to **Next.js 16** with **React 19** and **TypeScript**. The result is a multilingual presentation in **5 languages** (SK, EN, DE, HU, RU) with **7 optimized landing pages** for key services, a professional SEO structure, and performance that is **3-5x faster** than the original solution.",
    "The technical implementation includes an advanced **SEO layer** with **structured data** (LocalBusiness, Service, BreadcrumbList), a **multilingual sitemap** with hreflang tags, complete metadata for all language versions, and clean canonical logic. In the final audit, the website reached a score of **90.6/100**, with **SEO at 95/100** and **analytics implementation at 99/100**.",
    "We built the contact system with security in mind: input validation, **Cloudflare Turnstile** protection, a honeypot field, and **time-based bot detection**. The marketing stack includes **Google Tag Manager** with **Consent Mode v2**. Deployment on **Vercel** provides stability, speed, and a clean release process for future growth.",
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
