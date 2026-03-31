import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const invoiceCreatorApp: ProjectPost = {
  slug: "invoice-creator-app",
  title: "InvoiceCreatorApp – invoicing made simple",
  date: "2024-06-06",
  readTime: "2 min read",
  summary: "WPF/MVVM app for freelancers and SMBs: invoicing, customer/product management, monthly balances, secure access.",
  body: [
    "Simple UI, customizable templates (logo, colors, layout) and automatic VAT/total calculations.",
    "Customer and product storage speeds up invoice creation; password protects sensitive data.",
    "Monthly balances show income/expenses for a period with final balance.",
    "Search and filter invoices by date, customer, or amount (e.g., unpaid or period-specific).",
  ],
  content: [
    "InvoiceCreatorApp is a tool for freelancers and small/medium businesses, simplifying invoicing and giving control over finances.",
    "Strengths: intuitive UI, customizable invoice templates, automatic VAT totals, stored customer/product data, password-protected access.",
    "Key features: manage invoices (add, edit, save, delete line items), manage customers and products, monthly income/expense balance, powerful search and filtering.",
    "Why choose it: efficiency (focus on your work), reliability (local, no cloud required), accessibility (fits different company sizes).",
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
