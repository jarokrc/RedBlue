import { Helmet } from "react-helmet-async";
import { useI18n } from "@/app/I18nProvider";

const CookiesPage = () => {
  const { t } = useI18n();
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
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p
                key={`${section.heading}-paragraph-${paragraphIndex}`}
                className="text-sm leading-relaxed text-slate-700 md:text-base"
              >
                {paragraph}
              </p>
            ))}
            {section.list && section.list.length > 0 && (
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-slate-700 md:text-base">
                {section.list.map((item, itemIndex) => (
                  <li key={`${section.heading}-item-${itemIndex}`}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="space-y-2 border-t border-slate-200 pt-4">
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
          <a
            className="text-sm font-medium text-sky-700 hover:text-sky-800 md:text-base"
            href={`mailto:${t.cookies.contact.email}`}
          >
            {t.cookies.contact.email}
          </a>
        </section>
      </div>
    </div>
  );
};

export default CookiesPage;
