import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, type ReactNode } from "react";
import { useI18n } from "@/app/I18nProvider";
import { detectCountryCode, Locale } from "@/lib/locale";
// orezany variant loga - zdrojovy subor ma okolo kresby cca 20 % prazdneho miesta
import logoSvg from "@/assets/logo/svg/redblue-logo-tight.svg";
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
  const country = detectCountryCode().toUpperCase();
  const location = useLocation();
  const isIntro = location.pathname === "/";

  useEffect(() => {
    if (!menuOpen) setServicesOpen(false);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  const navItems = [
    { to: "/home", label: t.nav.home },
    { to: "/projekty", label: t.nav.projects },
    { to: "/kontakt", label: t.nav.contact },
  ];

  const servicesLinks = [
    { to: "/audit", label: t.nav.audit, icon: "§" },
    { to: "/web-riesenia", label: t.nav.web, icon: "🌐" },
    { to: "/podpora", label: t.nav.support, icon: "🛠️" },
    { to: "/vzdelavanie", label: t.nav.education, icon: "🎓" },
  ];

  const NavLinks = ({ onClick, isMobile }: { onClick?: () => void; isMobile?: boolean }) => (
    <nav className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4" aria-label="Main navigation">
      <NavLink
        to="/home"
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
              {servicesLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
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
              ))}
            </ul>
          </div>
        </div>
      </div>

      {navItems
        .filter((item) => item.to !== "/home")
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

  const LangSelect = ({ fullWidth = false }: { fullWidth?: boolean }) => (
    <div className={`relative inline-flex items-center gap-2 ${fullWidth ? "w-full" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-sm font-semibold leading-none text-slate-900 shadow-md ${
          fullWidth ? "w-full justify-between" : ""
        }`}
      >
        <span>{locale.toUpperCase()}</span>
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
    <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-slate-50 text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg focus:ring-2 focus:ring-blue-700"
      >
        Skip to content
      </a>
      {!isIntro && (
        <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 lg:h-20">
            <Link to="/home" className="flex h-full items-center gap-3">
              {/* logo vypina celu vysku listy - orezany SVG variant nema prazdny okraj */}
              <img src={logoSvg} alt="RedBlue.sk logo" className="h-full w-auto shrink-0" width={391} height={80} />
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
              className="inline-flex items-center justify-center rounded border border-slate-300 bg-white p-2 text-slate-700 transition hover:border-blue-700 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="h-0.5 w-6 bg-slate-700" />
                <span className="h-0.5 w-6 bg-slate-700" />
                <span className="h-0.5 w-6 bg-slate-700" />
              </span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-slate-200 bg-white px-6 py-4 shadow-sm">
            <NavLinks onClick={() => setMenuOpen(false)} isMobile />
            <div className="mt-4 border-t border-slate-200 pt-4">
              <LangSelect />
            </div>
          </div>
        )}
        </header>
      )}

      {!isIntro && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 z-0" aria-hidden>
          <span className="layout-orb-left page-orb page-orb-edge page-orb-blue absolute top-[11%]" />
          <span className="layout-orb-right-tiny page-orb page-orb-red page-orb-faint absolute top-[22%]" />
          <span className="layout-orb-right page-orb page-orb-edge page-orb-red absolute top-[38%]" />
          <span className="layout-orb-left-medium page-orb page-orb-blue page-orb-faint absolute top-[49%]" />
          <span className="layout-orb-left-small page-orb page-orb-blue page-orb-small absolute top-[68%]" />
          <span className="layout-orb-right-medium page-orb page-orb-red page-orb-faint absolute top-[76%]" />
          <span className="layout-orb-right-small page-orb page-orb-red page-orb-small absolute top-[87%]" />
          <span className="layout-orb-left-tiny page-orb page-orb-blue page-orb-faint absolute top-[94%]" />
        </div>
      )}

      <main id="main-content" className={isIntro ? "flex-1" : "relative z-10 mx-auto w-full max-w-6xl flex-1 px-6 py-10"}>
        {children}
      </main>

      {!isIntro && (
        <footer className="relative z-10 border-t border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <span className="text-center md:text-left">© {new Date().getFullYear()} RedBlue.sk</span>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            <Link to="/web-riesenia" className="hover:text-blue-700">
              {t.nav.web}
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
            <Link to="/impressum" className="hover:text-blue-700">
              {t.nav.impressum || "Impressum"}
            </Link>
          </div>
        </div>
        </footer>
      )}

      {!isIntro && <BackToTopButton />}
    </div>
  );
};

export default Layout;
