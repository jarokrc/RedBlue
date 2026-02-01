import { lazy, type ReactElement } from "react";
import HomePage from "@/pages/HomePage";
import IntroPage2 from "@/pages/IntroPage2";

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
  { path: "/", element: <IntroPage2 /> },
  { path: "/intro2", element: <IntroPage2 /> },
  { path: "/home", element: <HomePage /> },
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
