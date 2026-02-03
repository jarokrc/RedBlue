import { Link } from "react-router-dom";

type WebSolutionsCtaSectionProps = {
  title: string;
  text: string;
  primary: string;
  secondary: string;
};

const WebSolutionsCtaSection = ({ title, text, primary, secondary }: WebSolutionsCtaSectionProps) => (
  <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-blue-900 p-6 text-white shadow-lg ring-1 ring-blue-900/30 md:flex md:items-center md:justify-between md:p-8">
    <div className="space-y-2">
      <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
      <p className="text-sm text-blue-100 md:text-base">{text}</p>
    </div>
    <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
      <Link
        to="/kontakt"
        className="rounded-lg bg-red-500 px-5 py-3 text-base font-semibold text-white shadow hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        {primary}
      </Link>
      <Link
        to="/kontakt"
        className="rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-base font-semibold text-white shadow hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
      >
        {secondary}
      </Link>
    </div>
  </section>
);

export default WebSolutionsCtaSection;
