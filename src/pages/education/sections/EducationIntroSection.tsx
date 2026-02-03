type EducationIntroSectionProps = {
  intro: string;
};

const EducationIntroSection = ({ intro }: EducationIntroSectionProps) => {
  const introParts = intro.split("||").map((part) => part.trim());
  const introEn = introParts[0] || "";
  const introLocal = introParts.length >= 3 ? introParts[1] : "";
  const introBody = introParts.length >= 3 ? introParts.slice(2).join(" ").trim() : introParts[1] || introParts[0] || "";

  return (
    <section className="space-y-3">
      {introEn && <p className="text-sm font-semibold text-blue-600 md:text-base">{introEn}</p>}
      {introLocal && <p className="text-sm font-semibold text-red-600 md:text-base">{introLocal}</p>}
      <p className="text-slate-700 md:text-base">{introBody}</p>
    </section>
  );
};

export default EducationIntroSection;
