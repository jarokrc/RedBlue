export default {
  marketingPage: {
    intro:
      "Technische Prüfung des öffentlich zugänglichen Teils der Website ohne Nutzerinteraktion. Fokus: Cookies/Consent, Transparenz der Verarbeitung, Sicherheitsrisiken, öffentliche Ressourcen und technische Metadaten.",
    hero: {
      badge: "IT Audit",
      title: "Handeln Sie, bevor die Behörde prüft",
      subtitle:
        "Ein IT-Audit ist kein Angstmachen. Es ist Prävention. Die Frage ist nicht, ob es ein Problem gibt – sondern ob Sie es wissen, bevor die Kontrolle kommt.",
      positioning: ["Cookies & Consent", "Transparenz & Kontakte", "Sicherheit & Metadaten", "Öffentliche Ressourcen"],
      ctaPrimary: "IT-Audit anfragen",
      ctaSecondary: "Umfang ansehen",
    },
    offeringsTitle: "Audit-Umfang",
    offerings: [
      "Input: Website-URL, Audit läuft ohne Nutzerinteraktion; JavaScript-Rendering bei Bedarf.",
      "URL-Normalisierung, HTTP-Request mit definiertem User-Agent, www/non-www-Fallback.",
      "HTML/DOM-Analyse: Title, Meta, Generator/Plattform, externe Skripte und Drittanbieter-Domains, Navigationsstruktur.",
      "Extraktion von Kontakten und Betreiber-Identifikation (Name, Adresse, Firmen-IDs).",
      "Erkennung von Cookies, localStorage und sessionStorage, Klassifikation und Tracking-Indikatoren.",
      "Cookie-Banner und Consent-Aktionen: passiver Load, Ablehnen, Akzeptieren.",
      "JS-Rendering für dynamische Inhalte + Netzwerk-Requests und Änderungen nach Interaktion.",
      "Erfassung öffentlicher Dateien (Bilder, Dokumente, Medien) und Risikohinweise.",
      "Testszenarien (Scroll, Sprache, Error Probe, Probe Test) und Unterschiede dazwischen.",
      "Schweregrade in 4 Stufen: Kritisch, Wichtig, Empfohlen, Basis-Metadaten.",
      "Optionale lokale KI-Auswertung (Betreiber-Nachweis, Consent-Interpretation) als Unterstützung.",
      "Einschränkungen: keine Pen-Tests, keine internen Systeme, keine Login-Tests.",
    ],
    marketingTitle: "Ergebnis für Kunden",
    marketingText:
      "Klarer Überblick über Findings und Prioritäten, Evidenz, Methodik und empfohlene Schritte. Output: JSON und zwei PDF-Dokumente (IT-Audit + detaillierte Analyse). Bei kritischen Cookie-Findings legen wir eine Stellungnahme der Behörde bei. Der Audit ist technisch, kein Rechtsgutachten.\n\nIn der EU können Bußgelder bis zu 20.000.000 € oder 4 % des Jahresumsatzes erreichen.",
    packagesTitle: "Audit-Outputs",
    packages: [
      {
        icon: "🧾",
        title: "IT-Audit (PDF)",
        subtitle: "Executive Summary",
        description: "Audit-Ergebnis für schnelle Entscheidungen.",
        bullets: [
          "Website- und Betreiber-Identifikation (aus öffentlichen Seiten)",
          "Audit-Datum und Szenario (passiver Test + JS-Rendering)",
          "Umfang und Zweck",
          "Score und internes Qualitätsrating",
          "Kernbefunde nach Schweregrad",
          "Empfohlene Maßnahmen (A/B/C)",
        ],
      },
      {
        icon: "🔍",
        title: "Detaillierte technische Analyse (PDF)",
        subtitle: "Methodik und Evidenz",
        description: "Vollständiger technischer Bericht für die Umsetzung.",
        bullets: [
          "Testmethodik und Evidenzquellen",
          "Szenarien und Unterschiede (passiver Load, Ablehnen, Akzeptieren)",
          "Findings, Risiken und Empfehlungen",
          "Liste der Cookies, Storage und externen Ressourcen",
        ],
      },
      {
        icon: "🧩",
        title: "Technischer Export (JSON)",
        subtitle: "Maschinenlesbare Daten",
        description: "Für internes Reporting, Engineering und Automatisierung.",
        bullets: [
          "Cookies + Kategorien",
          "localStorage / sessionStorage",
          "Tracking-Indikatoren",
          "Szenarien und Bewertungen",
        ],
      },
    ],
  },
};
