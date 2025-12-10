import { Helmet } from "react-helmet-async";
import Hero from "@/sections/Hero";
import SolutionsCTA from "@/sections/SolutionsCTA";
import { useI18n } from "@/app/I18nProvider";

const HomePage = () => {
  const { t } = useI18n();
  return (
    <div className="space-y-12">
      <Helmet>
        <title>{t.meta.homeTitle}</title>
        <meta name="description" content={t.meta.homeDescription} />
      </Helmet>
      <Hero />
      <SolutionsCTA />
    </div>
  );
};

export default HomePage;
