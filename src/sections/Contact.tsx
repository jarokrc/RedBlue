import { useMemo, useState } from "react";
import { useI18n } from "@/app/I18nProvider";
import mapImg from "@/assets-webp/contact/mapa.webp";

const Contact = () => {
  const { t } = useI18n();
  const { contactSection } = t;

  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");
  const [honeypotFilled, setHoneypotFilled] = useState(false);
  const [captcha] = useState(() => {
    const a = Math.floor(Math.random() * 4) + 2; // 2-5
    const b = Math.floor(Math.random() * 5) + 3; // 3-7
    return { question: `${a} + ${b}`, answer: a + b };
  });

  const email = useMemo(
    () =>
      [105, 110, 102, 111, 64, 114, 101, 100, 98, 108, 117, 101, 46, 115, 107]
        .map((c) => String.fromCharCode(c))
        .join(""),
    []
  );

  const isCaptchaValid = Number(captchaInput.trim()) === captcha.answer && !honeypotFilled;

  const handleReveal = () => {
    if (revealed || honeypotFilled) return;
    if (!isCaptchaValid) {
      setError(contactSection.captchaError);
      return;
    }
    setError("");
    setRevealed(true);
    setCopied(false);
    window.location.href = `mailto:${email}`;
  };

  const handleCopy = async () => {
    if (!revealed) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

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
            <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">{contactSection.heading}</h3>
            <p className="text-sm text-slate-700 md:text-base">{contactSection.description}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
              {contactSection.regionTag}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-800">
              {contactSection.responseTag}
            </span>
          </div>
          <div className="space-y-3">
            <div className="underline-sweep-fast flex flex-wrap items-center gap-3">
              <label className="text-sm font-semibold text-slate-800">
                {contactSection.captchaPrompt} {captcha.question}?
              </label>
              <span className="rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-900">{captcha.question}</span>
              <input
                type="number"
                inputMode="numeric"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder={contactSection.captchaPlaceholder}
                className="w-36 rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 md:w-44"
              />
              <input
                type="text"
                name="contact_hp"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                onChange={(e) => setHoneypotFilled(Boolean(e.target.value))}
                aria-hidden="true"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleReveal}
                disabled={!isCaptchaValid}
                className="rounded-lg bg-red-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-red-600 md:px-7 md:text-lg"
              >
                {revealed ? contactSection.openingCta : contactSection.revealCta}
              </button>

              {revealed && (
                <div className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-800">
                  <span className="font-mono">{email}</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="rounded px-2 py-1 font-semibold text-blue-700 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    {copied ? contactSection.copied : contactSection.copy}
                  </button>
                </div>
              )}
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50/80 shadow-sm">
          <img
            src={mapImg}
            alt={contactSection.mapAlt}
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
