import mapPng from "@/assets/contact/png/mapa.png";
import mapWebp from "@/assets/contact/webp/mapa.webp";
import emailPng from "@/assets/contact/png/redblue.png";
import emailWebp from "@/assets/contact/webp/redblue.webp";
import type { Translation } from "@/locales/types";

type ContactDetailsSectionProps = {
  heroLabel: string;
  contactSection: Translation["contactSection"];
};

const ContactDetailsSection = ({ heroLabel, contactSection }: ContactDetailsSectionProps) => (
  <section className="content-visibility-auto">
    <div className="grid gap-5 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm md:grid-cols-[1.05fr,0.95fr] md:p-8">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          {heroLabel}
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{contactSection.heading}</h2>
          <p className="text-sm text-slate-700 md:text-base">{contactSection.description}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-slate-700">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
            {contactSection.regionTag}
          </span>
          {contactSection.responseTag ? (
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
              {contactSection.responseTag}
            </span>
          ) : null}
        </div>
        <div className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <picture>
            <source srcSet={emailWebp} type="image/webp" />
            <img src={emailPng} alt="Email RedBlue" className="h-8 w-auto" loading="lazy" decoding="async" />
          </picture>
        </div>
      </div>
      <div
        className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 shadow-sm"
        style={{ aspectRatio: "3 / 2" }}
      >
        <picture>
          <source srcSet={mapWebp} type="image/webp" />
          <img
            src={mapPng}
            alt={contactSection.mapAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
            width={482}
            height={321}
          />
        </picture>
      </div>
    </div>
  </section>
);

export default ContactDetailsSection;
