import { Link } from "react-router-dom";

type LegalSectionLink = {
  label: string;
  href: string;
};

type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  links?: LegalSectionLink[];
};

type LegalPolicySectionsProps = {
  sections: LegalSection[];
  contactAnchorId: string;
};

const LegalPolicySections = ({ sections, contactAnchorId }: LegalPolicySectionsProps) => {
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

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section
          key={`${section.heading}-${sectionIndex}`}
          className="space-y-3"
        >
          <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph, paragraphIndex) =>
            renderParagraph(paragraph, paragraphIndex, section.heading)
          )}
          {section.list && section.list.length > 0 && (
            <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 md:text-base">
              {section.list.map((item, itemIndex) => (
                <li key={`${section.heading}-item-${itemIndex}`}>{item}</li>
              ))}
            </ul>
          )}
          {section.links && section.links.length > 0 && (
            <div className="flex flex-wrap gap-3 text-sm font-medium text-sky-700 md:text-base">
              {section.links.map((link) => (
                <Link key={link.href} to={link.href} className="hover:text-sky-800">
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  );
};

export default LegalPolicySections;
