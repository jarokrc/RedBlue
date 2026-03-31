import type { Translation } from "../../types";

type ProjectPost = Translation["projects"]["blog"][number];

const webAudit: ProjectPost = {
  slug: "web-audit",
  title: "WEB Audit Tool - intelligenter Website-Audit",
  date: "2026-02-10",
  readTime: "3 Min. Lesezeit",
  summary:
    "**Automatisierter Website-Audit** für **Cookies, Consent, GDPR-Risiken, öffentlich zugängliche Daten und technische Schwachstellen**. Das Ergebnis ist ein **klarer Report mit Prioritäten und Empfehlungen**, der Zeit für IT und Kunden spart.",
  body: [
    "**Prüfung von Cookies und Consent** in realen Szenarien: erster Seitenaufruf, Ablehnung und Akzeptanz, damit klar ist, was auf der Website passiert, bevor ein Besucher zustimmt.",
    "**Aufdeckung technischer und reputationsbezogener Risiken**: Tracking-Skripte, fehlende Betreiberangaben, öffentlich zugängliche Dateien, Kontaktdaten, Anti-Spam-Schutz und verdächtige externe Quellen.",
    "**Professionelle Outputs für Business und Technik**: kompakte Kundenübersicht, detaillierte technische Analyse, JSON-Daten und Unterlagen für schnelle Entscheidungen zu den nächsten Schritten.",
  ],
  content: [
    "**WEB Audit Tool** ist ein internes Tool zur **automatisierten Prüfung von Websites** aus Sicht von Cookies, Consent, Transparenz, Sicherheit und technischer Qualität. Es hilft schnell zu erkennen, ob eine Website Daten korrekt verarbeitet, ob Tracking zu früh startet und ob Schwachstellen vorhanden sind, die Vertrauen, Reputation oder interne Prozesse beeinträchtigen können.",
    "Der Audit simuliert **reales Besucherverhalten** auf modernen und dynamischen Websites. Er testet passives Laden der Seite, Ablehnung und Akzeptanz von Cookies, überwacht Banner, Cookies, Storage und Netzwerk-Requests und vergleicht die Unterschiede zwischen den Szenarien. Dadurch lässt sich zuverlässig zeigen, **was vor der Zustimmung passiert**, welche Skripte ausgelöst werden, ob die Ablehnung tatsächlich funktioniert und wo die größten Risiken entstehen.",
    "Die Prüfung liefert zudem ein **breiteres technisches und reputationsbezogenes Bild der Website**: Identifikation des Betreibers, Kontaktdaten, Anti-Spam-Schutzmechanismen, öffentlich zugängliche Dokumente oder Archive, Tracking-Tools, externe Domains und zentrale Metadaten. Damit ist das Tool nicht nur für GDPR-Prüfungen nützlich, sondern auch für eine **schnelle Diagnose des Gesamtzustands einer Website**, die von Vertrieb, Marketing und Entwicklung verstanden werden kann.",
    "Das Ergebnis sind **klare Reports und technische Daten, die direkt nutzbar sind**. Der Kunde erhält eine kompakte Management-Zusammenfassung, das technische Team eine detaillierte Analyse mit Belegen und Prioritäten und bei Bedarf zusätzlich JSON-Output oder Unterlagen für die Kalkulation weiterer Anpassungen. Das Resultat? **Schnellere Entscheidungen, klarere Prioritäten und weniger blinde Flecken** bei Betrieb und Weiterentwicklung einer Website. Der Audit ersetzt keine Rechtsberatung, erleichtert aber die Vorbereitung auf die nächsten Schritte erheblich.",
  ],
  tech: ["Python", "Playwright", "BeautifulSoup", "Selenium", "JSON", "PDF export", "Headless Browser"],
  image: "projects/Audit_web/hero",
  gallery: [
    "projects/Audit_web/1",
    "projects/Audit_web/2",
    "projects/Audit_web/3",
    "projects/Audit_web/4",
  ],
};

export default webAudit;
