import { Link } from "react-router-dom";
import emailPng from "@/assets/contact/png/redblue.png";
import emailWebp from "@/assets/contact/webp/redblue.webp";

type LegalSectionLink = {
  label: string;
  href: string;
};

type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  links?: LegalSectionLink[];
  table?: boolean; // Flag pre zobrazenie ako tabuľka
};

type ImpressumPolicySectionsProps = {
  sections: LegalSection[];
  contactAnchorId: string;
};

const ImpressumPolicySections = ({ sections, contactAnchorId }: ImpressumPolicySectionsProps) => {
  const renderParagraph = (paragraph: string, paragraphIndex: number, prefix: string) => {
    const trimmed = paragraph.trim();
    const isContactHint =
      trimmed.toLowerCase().startsWith("kontakt:") || trimmed.toLowerCase().startsWith("contact:");

    if (isContactHint) {
      const label = trimmed.replace(/^(kontakt:|contact:)\s*/i, "") || paragraph;
      return (
        <a
          key={`${prefix}-paragraph-${paragraphIndex}`}
          href={`#${contactAnchorId}`}
          className="text-sm font-semibold text-sky-700 hover:text-sky-800 md:text-base"
        >
          {label}
        </a>
      );
    }

    return (
      <p key={`${prefix}-paragraph-${paragraphIndex}`} className="text-sm leading-relaxed text-slate-700 md:text-base">
        {paragraph}
      </p>
    );
  };

  const renderTableRow = (paragraph: string, index: number) => {
    // Rozdelenie na "Label: Value" formát
    const parts = paragraph.split(":");
    if (parts.length >= 2) {
      const label = parts[0].trim();
      const value = parts.slice(1).join(":").trim();

      // Ak je to email, zobraz obrázok namiesto textu
      const isEmail = label.toLowerCase() === "e-mail";

      return (
        <tr key={`table-row-${index}`} className="border-b border-slate-200 last:border-b-0">
          <td className="px-4 py-3 text-sm font-semibold text-slate-900 md:text-base">{label}</td>
          <td className="px-4 py-3 text-sm text-slate-700 md:text-base">
            {isEmail ? (
              <picture>
                <source srcSet={emailWebp} type="image/webp" />
                <img src={emailPng} alt="Email RedBlue" className="h-6 w-auto" loading="lazy" decoding="async" />
              </picture>
            ) : (
              value
            )}
          </td>
        </tr>
      );
    }
    // Ak nie je vo formáte "Label: Value", zobraz len text
    return (
      <tr key={`table-row-${index}`} className="border-b border-slate-200 last:border-b-0">
        <td colSpan={2} className="px-4 py-3 text-sm text-slate-700 md:text-base">
          {paragraph}
        </td>
      </tr>
    );
  };

  const isTableSection = (sectionIndex: number) => {
    // Prvé tri sekcie zobrazíme ako tabuľky (Prevádzkovateľ, Štatutárny orgán, Kontaktné údaje)
    return sectionIndex < 3;
  };

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section key={`${section.heading}-${sectionIndex}`} className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{section.heading}</h2>

          {isTableSection(sectionIndex) ? (
            // Tabuľkové zobrazenie pre prvé 3 sekcie
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <table className="w-full">
                <tbody>{section.paragraphs.map((paragraph, idx) => renderTableRow(paragraph, idx))}</tbody>
              </table>
            </div>
          ) : (
            // Štandardné zobrazenie pre ostatné sekcie
            <div className="space-y-3">
              {section.paragraphs.map((paragraph, paragraphIndex) =>
                renderParagraph(paragraph, paragraphIndex, section.heading)
              )}
            </div>
          )}

          {section.list && section.list.length > 0 && (
            <ul className="list-none space-y-2 text-sm leading-relaxed text-slate-700 md:text-base">
              {section.list.map((item, itemIndex) => (
                <li key={`${section.heading}-item-${itemIndex}`} className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {section.links && section.links.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-2">
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="inline-flex items-center rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 hover:text-blue-800 md:text-base"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default ImpressumPolicySections;
