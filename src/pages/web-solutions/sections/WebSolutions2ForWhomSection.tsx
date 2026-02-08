type WebSolutions2ForWhomSectionProps = {
  title: string;
  bullets: string[];
};

const WebSolutions2ForWhomSection = ({ title, bullets }: WebSolutions2ForWhomSectionProps) => (
  <section className="bg-blue-50/50 rounded-3xl mx-6 md:mx-auto max-w-5xl px-8 py-12">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h2>

    <ul className="space-y-4 text-lg text-slate-800 max-w-3xl mx-auto">
      {bullets.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="text-red-600 text-xl mt-1">★</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default WebSolutions2ForWhomSection;
