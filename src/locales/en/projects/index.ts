import baffiSk from "./baffi_sk";
import mikuBegleitung from "./miku_begleitung";
import webCalculator from "./web_calculator";
import redblueAcademy from "./redblue_academy";
import educationManagement from "./education_management";
import invoiceCreatorApp from "./invoice_creator_app";
import footballManager from "./football_manager";
import dataVista from "./data_vista";
import simpleNote from "./simple_note";
import personenData from "./personen_data";
import ozonex from "./ozonex";
import webAudit from "./web_audit";
import region from "./region";

export default {
  projects: {
    title: "Projects",
    intro:
      "Sharing only what we can: open-source and client work with permission. Over 100 deliveries—web, desktop tools, marketing, and support for PCs and mobile. Full case studies and results on request.",
    detailLabel: "Detail / full article",
    githubLabel: "GitHub",
    items: [
      { name: "Consulting site for a local firm", summary: "Simple landing with a form, SEO basics, and mailing integration." },
      { name: "Product microsite", summary: "Quick campaign rollout with conversion tracking and A/B CTAs." },
      { name: "Content site", summary: "Blog and resource library with filters, ready for headless CMS backend." },
    ],
    blog: [
      baffiSk,
      mikuBegleitung,
      webCalculator,
      redblueAcademy,
      educationManagement,
      invoiceCreatorApp,
      footballManager,
      dataVista,
      simpleNote,
      personenData,
      ozonex,
      webAudit,
      region,
    ],
  },
};
