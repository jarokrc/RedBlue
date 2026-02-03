import type { Translation } from "@/locales/types";
import ProtectedEmail from "@/components/ProtectedEmail";

type LegalContact = {
  heading: string;
  paragraphs: string[];
  email: string;
};

type LegalContactSectionProps = {
  contact: LegalContact;
  contactSection: Translation["contactSection"];
  contactAnchorId: string;
  paragraphKeyPrefix: string;
};

const LegalContactSection = ({ contact, contactSection, contactAnchorId, paragraphKeyPrefix }: LegalContactSectionProps) => (
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
    <ProtectedEmail
      encodedEmail={[105, 110, 102, 111, 64, 114, 101, 100, 98, 108, 117, 101, 46, 115, 107]}
      texts={{
        prompt: contactSection.captchaPrompt,
        placeholder: contactSection.captchaPlaceholder,
        error: contactSection.captchaError,
        revealCta: contactSection.revealCta,
        openingCta: contactSection.openingCta,
        copy: contactSection.copy,
        copied: contactSection.copied,
      }}
      buttonClassName="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 md:text-base"
    />
  </section>
);

export default LegalContactSection;
