import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const region: ProjectPost = {
  slug: "region-zahorie",
  title: "Region - intelligent platform for event aggregation",
  date: "2026-03-31",
  readTime: "3 min read",
  summary:
    "**Automated event aggregation platform** for the entire region that **collects, analyzes, and processes data from 81 websites**, turning fragmented information into a **clear, scalable, and commercially usable system**.",
  body: [
    "**Centralized event collection from 81 websites** of municipalities, towns, and companies: one solution that replaces manual monitoring of dozens of sources and speeds up regional content publishing.",
    "**Intelligent analyzers and admin interface**: specialized processing for different website types, a clear GUI, JSON outputs, monitoring, and logs for reliable day-to-day operation.",
    "**Scalable architecture for project growth**: from technology detection and data normalization to pattern-based automation that prepares the platform for further expansion without chaos.",
  ],
  content: [
    "**Region** is an internal **data and publishing platform** designed for automated event collection from the websites of municipalities, towns, organizations, and companies across the region. The goal was to eliminate slow manual rewriting of events from dozens of different pages and replace it with a solution that can **reliably collect, classify, and prepare content at scale**.",
    "The solution covers **81 regional websites** and works across a highly diverse technology landscape, from WordPress and Webnode to custom CMS solutions. The platform combines **specialized analyzers**, technology detection, HTML structure validation, and support for the WordPress REST API, allowing it to process very different sources efficiently without losing accuracy. The result is a **unified data flow** that turns a fragmented web environment into a usable foundation for regional content and additional services.",
    "An important part of the project is also the **admin interface built with FastAPI and React**, which gives the team immediate visibility into analyzer runs, JSON outputs, logs, and configuration. What is often scattered across scripts, spreadsheets, and manual checks in similar projects is centralized here into **one control system**, ready for everyday operations as well as further growth.",
    "The technical architecture was designed as a **scalable foundation for long-term growth**. The platform is not only built for current event collection, but also as a base for intelligent pattern recognition, rapid deployment of new analyzers, and broader automation of regional data workflows. For the client, that means **less manual work, greater data consistency, faster publishing, and a strong foundation for future digital products**.",
  ],
  tech: ["Python", "FastAPI", "React", "TypeScript", "Vite", "JSON", "BeautifulSoup", "Requests", "WordPress REST API"],
  image: "projects/Region/hero",
  gallery: [
    "projects/Region/1",
    "projects/Region/2",
    "projects/Region/3",
    "projects/Region/4",
  ],
};

export default region;
