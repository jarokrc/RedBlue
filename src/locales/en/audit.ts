export default {
  marketingPage: {
    intro:
      "Technical audit of the publicly accessible part of the website without user interaction. Focus: cookies/consent, processing transparency, security risks, public resources and technical metadata.",
    hero: {
      badge: "IT Audit",
      title: "Act before an official inspection",
      subtitle:
        "IT audit is not fearmongering. It's prevention. The question isn't whether you have a problem — it's whether you know before the audit comes.",
      positioning: ["Cookies & consent", "Transparency & contacts", "Security & metadata", "Public assets"],
      ctaPrimary: "Get an IT audit",
      ctaSecondary: "See the scope",
    },
    offeringsTitle: "Audit scope",
    offerings: [
      "Input: website URL, audit runs without user interaction; JavaScript is rendered when needed.",
      "URL normalization, HTTP request with a defined User-Agent, www/non-www fallback.",
      "HTML/DOM analysis: title, meta, generator/platform, external scripts and third-party domains, navigation structure.",
      "Extraction of contacts and operator identification (name, address, company IDs).",
      "Detection of cookies, localStorage and sessionStorage, classification and tracking indicators.",
      "Cookie banner and consent actions: passive load, reject, accept.",
      "JS rendering for dynamic content + network requests and changes after interaction.",
      "Collection of public files (images, documents, media) and risk flags.",
      "Testing scenarios (scroll, language, error probe, probe test) and differences between them.",
      "Severity ratings in 4 levels: Critical, Important, Recommended, Basic metadata.",
      "Optional local AI evaluation (operator presence, consent interpretation) as a supporting signal.",
      "Limitations: no penetration testing, no internal systems, no login tests.",
    ],
    marketingTitle: "Client outcome",
    marketingText:
      "Clear overview of findings and priorities, evidence, methodology and recommended actions. Output includes JSON and two PDF documents (IT audit + detailed analysis). For critical cookie findings, we attach the authority statement. The audit is technical, not legal advice.\n\nIn the EU, fines can reach up to €20,000,000 or 4% of annual turnover.",
    packagesTitle: "Audit outputs",
    packages: [
      {
        icon: "🧾",
        title: "IT audit (PDF)",
        subtitle: "Executive summary",
        description: "Audit result for fast, informed decisions.",
        bullets: [
          "Website and operator identification (from public pages)",
          "Audit date and scenario (passive test + JS rendering)",
          "Scope and purpose",
          "Score and internal quality rating",
          "Key findings by severity",
          "Recommended remediation (A/B/C)",
        ],
      },
      {
        icon: "🔍",
        title: "Detailed technical analysis (PDF)",
        subtitle: "Methodology and evidence",
        description: "Full technical report for implementation.",
        bullets: [
          "Testing methodology and evidence sources",
          "Scenarios and differences (passive load, reject, accept)",
          "Findings, risks and recommendations",
          "List of cookies, storage and external resources",
        ],
      },
      {
        icon: "🧩",
        title: "Technical export (JSON)",
        subtitle: "Machine-readable data",
        description: "For internal reporting, engineering and automation.",
        bullets: [
          "Cookies + categories",
          "localStorage / sessionStorage",
          "Tracking indicators",
          "Scenarios and ratings",
        ],
      },
    ],
  },
};
