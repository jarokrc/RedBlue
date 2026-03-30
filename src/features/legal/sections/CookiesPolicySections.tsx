type CookiesSection = {
  heading: string;
  paragraphs: string[];
};

type CookiesPolicySectionsProps = {
  sections: CookiesSection[];
  contactAnchorId: string;
};

const CookiesPolicySections = ({ sections, contactAnchorId }: CookiesPolicySectionsProps) => {
  const renderParagraph = (paragraph: string, paragraphIndex: number, prefix: string) => {
    const trimmed = paragraph.trim();
    const isContactHint =
      trimmed.toLowerCase().includes("kontakt:") ||
      trimmed.toLowerCase().includes("chránený e-mail nižšie");

    if (isContactHint) {
      return (
        <a
          key={`${prefix}-paragraph-${paragraphIndex}`}
          href={`#${contactAnchorId}`}
          className="text-sm font-semibold text-sky-700 hover:text-sky-800 md:text-base"
        >
          {paragraph}
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

      return (
        <tr key={`table-row-${index}`} className="border-b border-slate-200 last:border-b-0">
          <td className="px-4 py-3 text-sm font-semibold text-slate-900 md:text-base">{label}</td>
          <td className="px-4 py-3 text-sm text-slate-700 md:text-base">{value}</td>
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
    // Prvá sekcia (Prevádzkovateľ služby) zobrazíme ako tabuľku
    return sectionIndex === 0;
  };

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section key={`${section.heading}-${sectionIndex}`} className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{section.heading}</h2>

          {isTableSection(sectionIndex) ? (
            // Tabuľkové zobrazenie pre prvú sekciu
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
        </section>
      ))}
    </>
  );
};

export default CookiesPolicySections;
