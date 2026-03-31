import baffiSk from "./baffi_sk";
import mikuBegleitung from "./miku_begleitung";
import webCalculator from "./web_calculator";
import webAudit from "./web_audit";
import ozonex from "./ozonex";
import redblueAcademy from "./redblue_academy";
import educationManagement from "./education_management";
import invoiceCreatorApp from "./invoice_creator_app";
import footballManager from "./football_manager";
import dataVista from "./data_vista";
import simpleNote from "./simple_note";
import personenData from "./personen_data";
import region from "./region";

export default {
  projects: {
    title: "Naše projekty",
    intro:
      "Vybrané realizácie, na ktorých vidno výsledok aj remeslo. Po rozkliknutí nájdete kompletný príbeh projektu, technické riešenie a galériu.",
    detailLabel: "Celý článok",
    githubLabel: "",
    items: [
      { name: "Konzultačný web pre lokálnu firmu", summary: "Jednoduchý landing s formulárom, SEO základmi a napojením na mailing." },
      { name: "Produktová mikrostránka", summary: "Rýchly rollout kampanovej stránky s meraním konverzií a A/B CTA." },
      { name: "Obsahový web", summary: "Blog + knižnica zdrojov s filtrami, pripravené na headless CMS backend." },
    ],
    blog: [
      baffiSk,
      mikuBegleitung,
      webCalculator,
      webAudit,
      ozonex,
      redblueAcademy,
      educationManagement,
      invoiceCreatorApp,
      footballManager,
      dataVista,
      simpleNote,
      personenData,
      region,
    ],
  },
};
