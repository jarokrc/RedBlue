import baffiSk from "./baffi_sk";
import mikuBegleitung from "./miku_begleitung";
import webCalculator from "./web_calculator";
import ozonex from "./ozonex";
import redblueAcademy from "./redblue_academy";
import educationManagement from "./education_management";
import invoiceCreatorApp from "./invoice_creator_app";
import dataVista from "./data_vista";
import simpleNote from "./simple_note";
import personenData from "./personen_data";
import footballManager from "./football_manager";
import webAudit from "./web_audit";
import region from "./region";

export default {
  projects: {
    title: "Projekte",
    intro:
      "Wir zeigen nur, was wir dürfen: Open-Source und freigegebene Kundenprojekte. 100+ Umsetzungen – Web, Desktop-Tools, Marketing sowie Support für PC und Mobil. Cases und Ergebnisse gern auf Anfrage.",
    detailLabel: "Detail / kompletter Artikel",
    githubLabel: "GitHub",
    items: [
      { name: "Consulting-Seite für ein lokales Unternehmen", summary: "Einfache Landingpage mit Formular, SEO-Basics und Mailing-Anbindung." },
      { name: "Produkt-Microsite", summary: "Schneller Kampagnen-Rollout mit Conversion-Tracking und A/B-CTAs." },
      { name: "Content-Seite", summary: "Blog und Ressourcen mit Filtern, vorbereitet für Headless-CMS-Backend." },
    ],
    blog: [
      baffiSk,
      mikuBegleitung,
      webCalculator,
      ozonex,
      redblueAcademy,
      educationManagement,
      invoiceCreatorApp,
      dataVista,
      simpleNote,
      personenData,
      footballManager,
      webAudit,
      region,
    ],
  },
};
