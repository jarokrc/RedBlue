import { Link, NavLink } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import { useI18n } from "@/app/I18nProvider";
import { Locale } from "@/lib/locale";
import logoImg from "@/assets-webp/logo/logo.webp";
import skIcon from "@/assets-webp/icons/sk.webp?inline";
import enIcon from "@/assets-webp/icons/en.webp?inline";
import deIcon from "@/assets-webp/icons/de.webp?inline";
import BackToTopButton from "@/components/BackToTopButton";

const localeOptions: { value: Locale; label: string }[] = [
  { value: "sk", label: "SK" },
  { value: "en", label: "EN" },
  { value: "de", label: "DE" },
];

const Layout = ({ children }: { children: ReactNode }) => {
  const { t, locale, setLocale } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const country = "US";
  const academyHref =
    locale === "sk" || country === "SK" || country === "CZ"
      ? "https://redblueacademy.com/"
      : "https://redblueacademy.com/en";

  useEffect(() => {
    if (!menuOpen) setServicesOpen(false);
  }, [menuOpen]);

  const navItems = [
    { to: "/", label: t.nav.home },
    { to: "/projekty", label: t.nav.projects },
    { to: "/kontakt", label: t.nav.contact },
  ];

  const servicesLinks = [
    { to: "/web-riesenia", label: t.nav.web, icon: "🌐" },
    { to: "/marketing", label: t.nav.marketing, icon: "📣" },
    { to: "/podpora", label: t.nav.support, icon: "🛠️" },
    { to: "/vzdelavanie", label: t.nav.education, icon: "🎓" },
  ];

  const NavLinks = ({ onClick, isMobile }: { onClick?: () => void; isMobile?: boolean }) => (
    <nav className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4" aria-label="Main navigation">
      <NavLink
        to="/"
        onClick={() => {
          setServicesOpen(false);
          onClick?.();
        }}
        className={({ isActive }) =>
          `px-2 py-1 rounded text-sm font-semibold text-slate-800 transition hover:text-blue-800 hover:underline hover:underline-offset-8 md:text-base md:tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 ${
            isActive ? "text-blue-700 underline underline-offset-8" : ""
          }`
        }
      >
        {t.nav.home}
      </NavLink>

      <div className="relative">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={servicesOpen}
          onClick={() => setServicesOpen((prev) => !prev)}
          className="rounded px-2 py-1 text-sm font-semibold text-slate-800 transition hover:text-blue-800 hover:underline hover:underline-offset-8 md:text-base md:tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
        >
          {t.nav.services}
        </button>
        <div
          className={`mt-1 ${servicesOpen ? "block" : "hidden"} ${isMobile ? "" : "absolute left-0 top-full z-20"}`}
        >
          <div className="w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-300/50">
            <ul className="space-y-2">
              {servicesLinks.map((link) =>
                link.external ? (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 whitespace-nowrap rounded px-2 py-1 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
                      onClick={() => {
                        setServicesOpen(false);
                        onClick?.();
                      }}
                    >
                      <span aria-hidden>{link.icon}</span>
                      <span className="whitespace-nowrap">{link.label}</span>
                    </a>
                  </li>
                ) : (
                  <li key={link.to}>
                    <NavLink
                      to={link.to!}
                      onClick={() => {
                        setServicesOpen(false);
                        onClick?.();
                      }}
                      className={({ isActive }) =>
                        `flex items-center gap-2 whitespace-nowrap rounded px-2 py-1 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 ${
                          isActive ? "text-blue-700" : ""
                        }`
                      }
                    >
                      <span aria-hidden>{link.icon}</span>
                      <span className="whitespace-nowrap">{link.label}</span>
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {navItems
        .filter((item) => item.to !== "/")
        .map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={() => {
              setServicesOpen(false);
              onClick?.();
            }}
            className={({ isActive }) =>
              `px-2 py-1 rounded text-sm font-semibold text-slate-800 transition hover:text-blue-800 hover:underline hover:underline-offset-8 md:text-base md:tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 ${
                isActive ? "text-blue-700 underline underline-offset-8" : ""
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
    </nav>
  );

  const localeIcons: Record<Locale, string> = {
    sk: skIcon,
    en: enIcon,
    de: deIcon,
  };

  const LangSelect = () => (
    <div className="relative inline-flex items-center gap-2">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-sm font-medium leading-none text-slate-900 shadow-md">
        <img
          src={localeIcons[locale]}
          alt={`${locale.toUpperCase()} icon`}
          className="h-7 w-7 rounded-full border border-slate-200 bg-white object-cover shadow-sm"
          loading="lazy"
          decoding="async"
        />
      </div>
      <select
        aria-label="Select language"
        value={locale}
        onChange={(e) => setLocale(e.target.value as Locale)}
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
      >
        {localeOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg focus:ring-2 focus:ring-blue-700"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link to="/" className="flex items-center gap-3 md:flex">
            <img src={logoImg} alt="RedBlue.sk logo" className="h-9 w-auto" />
          </Link>
          <div className="hidden items-center gap-4 text-sm font-semibold text-slate-800 md:text-base md:flex">
            <NavLinks />
            <LangSelect />
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow-md transition hover:border-blue-700 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              <span aria-hidden>☰</span>
              <span>Menu</span>
            </button>
            <LangSelect />
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white px-6 py-4 shadow-sm">
            <NavLinks onClick={() => setMenuOpen(false)} isMobile />
          </div>
        )}
      </header>

      <main id="main-content" className="mx-auto max-w-6xl flex-1 px-6 py-10">
        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <span className="text-center md:text-left">© {new Date().getFullYear()} RedBlue.sk</span>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <Link to="/web-riesenia" className="hover:text-blue-700">
              {t.nav.web}
            </Link>
            <Link to="/marketing" className="hover:text-blue-700">
              {t.nav.marketing}
            </Link>
            <Link to="/podpora" className="hover:text-blue-700">
              {t.nav.support}
            </Link>
            <Link to="/vzdelavanie" className="hover:text-blue-700">
              {t.nav.education}
            </Link>
            <Link to="/zasady-ochrany-osobnych-udajov" className="hover:text-blue-700">
              {t.nav.privacy}
            </Link>
            <Link to="/cookies" className="hover:text-blue-700">
              {t.nav.cookies}
            </Link>
          </div>
        </div>
      </footer>

      <BackToTopButton />
    </div>
  );
};

export default Layout;
