import { useI18n } from "@/app/I18nProvider";
import mapImg from "@/assets-webp/contact/mapa.webp";

const Contact = () => {
  const { t, locale } = useI18n();
  const email = ["jkrc", "job"].join(".") + "@" + ["gmail", "com"].join(".");

  const regionText =
    locale === "en"
      ? "Clients in SK / CZ / AT"
      : locale === "de"
      ? "Kunden in SK / CZ / AT"
      : "Klienti v SK / CZ / AT";

  const responseText =
    locale === "en"
      ? "Response within 1 business day"
      : locale === "de"
      ? "Antwort innerhalb eines Werktags"
      : "Odpoved do 1 pracovneho dna";

  return (
    <section id="contact" className="space-y-4">
      <div>
        <p className="text-sm font-semibold text-blue-700">{t.contact.title}</p>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t.contact.subtitle}</h2>
      </div>

      <div className="grid gap-5 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm md:grid-cols-[1.05fr,0.95fr] md:p-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
            {t.hero.label}
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {locale === "en"
                ? "Let's build together"
                : locale === "de"
                ? "Lassen Sie uns gemeinsam bauen"
                : "Pojdme tvorit spolu"}
            </h3>
            <p className="text-sm text-slate-700 md:text-base">{t.hero.subheading}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
              {regionText}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
              {responseText}
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 md:px-7 md:text-lg"
            >
              {locale === "en" ? "Email me" : locale === "de" ? "Schreiben Sie mir" : "Napiste mi"}
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 shadow-sm">
          <img
            src={mapImg}
            alt="Map of clients in SK/CZ/AT region"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Kontakt formular bude rieseny neskor v backende (bezpecny submit + ochrana proti spamu). */}
    </section>
  );
};

export default Contact;
