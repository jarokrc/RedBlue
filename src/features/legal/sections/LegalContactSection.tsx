import emailPng from "@/assets/contact/png/redblue.png";
import emailWebp from "@/assets/contact/webp/redblue.webp";

type LegalContact = {
  heading: string;
  paragraphs: string[];
};

type LegalContactSectionProps = {
  contact: LegalContact;
  contactAnchorId: string;
  paragraphKeyPrefix: string;
};

const LegalContactSection = ({ contact, contactAnchorId, paragraphKeyPrefix }: LegalContactSectionProps) => (
  <section id={contactAnchorId} className="space-y-2 border-t border-slate-200 pt-4">
    <h2 className="text-lg font-semibold text-slate-900 md:text-xl">
      {contact.heading}
    </h2>
    {contact.paragraphs.map((paragraph, paragraphIndex) => (
      <p
        key={`${paragraphKeyPrefix}-${paragraphIndex}`}
        className="text-sm leading-relaxed text-slate-700 md:text-base"
      >
        {paragraph}
      </p>
    ))}
    <div className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <picture>
        <source srcSet={emailWebp} type="image/webp" />
        <img src={emailPng} alt="Email RedBlue" className="h-8 w-auto" loading="lazy" decoding="async" />
      </picture>
    </div>
  </section>
);

export default LegalContactSection;
