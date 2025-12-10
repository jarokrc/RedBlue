import { useI18n } from "@/app/I18nProvider";

const Services = () => {
  const { t } = useI18n();
  return (
    <section id="services" className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t.services.title}</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {t.services.items.map((service) => (
          <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 md:text-xl">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-600 md:text-base">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
