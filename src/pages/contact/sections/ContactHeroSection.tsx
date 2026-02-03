type ContactHeroSectionProps = {
  title: string;
  subtitle: string;
};

const ContactHeroSection = ({ title, subtitle }: ContactHeroSectionProps) => (
  <section id="contact" className="content-visibility-auto space-y-3">
    <p className="text-sm font-semibold text-blue-700">{title}</p>
    <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">{subtitle}</h1>
  </section>
);

export default ContactHeroSection;
