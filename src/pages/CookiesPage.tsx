import { Helmet } from "react-helmet-async";
import { useI18n } from "@/app/I18nProvider";
import ProtectedEmail from "@/components/ProtectedEmail";

const CookiesPage = () => {
  const { t } = useI18n();
  const contactAnchorId = "cookies-contact";

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
    <div className="space-y-6">
      <Helmet>
        <title>{t.meta.cookiesTitle}</title>
      </Helmet>

      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">{t.cookies.title}</h1>
        <p className="text-sm leading-relaxed text-slate-700 md:text-base">{t.cookies.intro}</p>
      </div>

      <div className="space-y-6">
        {t.cookies.sections.map((section, sectionIndex) => (
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
          </section>
        ))}

        <section id={contactAnchorId} className="space-y-2 border-t border-slate-200 pt-4">
          <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
            {t.cookies.contact.heading}
          </h2>
          {t.cookies.contact.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={`cookies-contact-paragraph-${paragraphIndex}`}
              className="text-sm leading-relaxed text-slate-700 md:text-base"
            >
              {paragraph}
            </p>
          ))}
          <ProtectedEmail
            encodedEmail={[105, 110, 102, 111, 64, 114, 101, 100, 98, 108, 117, 101, 46, 115, 107]}
            texts={{
              prompt: t.contactSection.captchaPrompt,
              placeholder: t.contactSection.captchaPlaceholder,
              error: t.contactSection.captchaError,
              revealCta: t.contactSection.revealCta,
              openingCta: t.contactSection.openingCta,
              copy: t.contactSection.copy,
              copied: t.contactSection.copied,
            }}
            buttonClassName="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
          />
        </section>
      </div>
    </div>
  );
};

export default CookiesPage;
