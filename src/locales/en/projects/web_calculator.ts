import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const webCalculator: ProjectPost = {
  slug: "web-calculator",
  title: "WEB Pricing Studio - system for creating price quotes",
  date: "2025-12-19",
  readTime: "2 min read",
  summary:
    "Professional **studio for creating price quotes** for web projects: create **accurate proposals in minutes** with **automatic calculation**, **flexible packages**, and **PDF export** ready for the client.",
  body: [
    "**Preconfigured packages** with automatic service calculation, promo pricing, and an **instant preview of the total price** including all included benefits.",
    "**Extensive service catalog** with smart search, tags, and **inline editing**; adjust prices or quantities directly in the interface during a client consultation.",
    "**Professional PDF outputs** with editable sections, your logo, a **payment QR code**, and the option to generate a quote, proforma invoice, or final invoice.",
  ],
  content: [
    "**WEB Pricing Studio** is an internal tool built for **optimizing the sales process** of web agencies. Ever needed to prepare a quote quickly during a client meeting? Or spent hours doing calculations in Excel? This studio **solves exactly that painful bottleneck**.",
    "The application offers **three pricing modes** (base price, promo offer, internal price) with automatic selection of included services and free quotas. With one click, you can create a complete package including all related items. On top of that, you can add **additional services** from an extensive catalog split into categories (PRIMARY/WEB/ESHOP) with intelligent filtering and search.",
    "**Client profiles** can be stored together with individual discounts, VAT mode, and contact details, making the tool ideal for repeat business. All data is stored locally in **JSON format**, which ensures speed, privacy, and full control over your data without requiring a cloud connection.",
    "**PDF export** turns your calculation into a professional document with your logo, editable sections (supplier, payment overview, client, summary), and an optional **QR code for instant payment**. The document can be generated as a quote, proforma invoice, or final invoice with an **automatically generated variable symbol**. The result? A professional presentation that **builds trust** and speeds up client decision-making.",
  ],
  tech: ["Python", "CustomTkinter", "Tkinter", "JSON", "PDF export"],
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
