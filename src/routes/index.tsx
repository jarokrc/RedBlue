import { lazy, type ReactElement } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("@/pages/ProjectDetailPage"));
const WebSolutionsPage = lazy(() => import("@/pages/WebSolutionsPage"));
const MarketingPage = lazy(() => import("@/pages/MarketingPage"));
const SupportPage = lazy(() => import("@/pages/SupportPage"));
const EducationPage = lazy(() => import("@/pages/EducationPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const PrivacyPage = lazy(() => import("@/pages/PrivacyPage"));
const CookiesPage = lazy(() => import("@/pages/CookiesPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export type AppRoute = {
  path: string;
  element: ReactElement;
};

export const appRoutes: AppRoute[] = [
  { path: "/", element: <HomePage /> },
  { path: "/o-mne", element: <AboutPage /> },
  { path: "/projekty", element: <ProjectsPage /> },
  { path: "/projekty/:slug", element: <ProjectDetailPage /> },
  { path: "/web-riesenia", element: <WebSolutionsPage /> },
  { path: "/marketing", element: <MarketingPage /> },
  { path: "/podpora", element: <SupportPage /> },
  { path: "/vzdelavanie", element: <EducationPage /> },
  { path: "/kontakt", element: <ContactPage /> },
  { path: "/zasady-ochrany-osobnych-udajov", element: <PrivacyPage /> },
  { path: "/privacy", element: <PrivacyPage /> },
  { path: "/cookies", element: <CookiesPage /> },
  { path: "*", element: <NotFoundPage /> },
];
