import { lazy, type ReactElement } from "react";
import HomePage from "@/pages/home/HomePage";
import IntroPage from "@/pages/intro/IntroPage";

const ProjectsPage = lazy(() => import("@/pages/projects/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("@/pages/projects/ProjectDetailPage"));
const WebSolutionsPage2 = lazy(() => import("@/pages/web-solutions/WebSolutionsPage2"));
const SupportPage = lazy(() => import("@/pages/support/SupportPage"));
const EducationPage = lazy(() => import("@/pages/education/EducationPage"));
const ContactPage = lazy(() => import("@/pages/contact/ContactPage"));
const NavrhPage = lazy(() => import("@/pages/navrh/NavrhPage"));
const PrivacyPage = lazy(() => import("@/pages/privacy/PrivacyPage"));
const CookiesPage = lazy(() => import("@/pages/cookies/CookiesPage"));
const NotFoundPage = lazy(() => import("@/pages/not-found/NotFoundPage"));

export type AppRoute = {
  path: string;
  element: ReactElement;
};

export const appRoutes: AppRoute[] = [
  { path: "/", element: <IntroPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/projekty", element: <ProjectsPage /> },
  { path: "/projekty/:slug", element: <ProjectDetailPage /> },
  { path: "/web-riesenia", element: <WebSolutionsPage2 /> },
  { path: "/web-riesenia-2", element: <WebSolutionsPage2 /> },
  { path: "/podpora", element: <SupportPage /> },
  { path: "/vzdelavanie", element: <EducationPage /> },
  { path: "/kontakt", element: <ContactPage /> },
  { path: "/navrh", element: <NavrhPage /> },
  { path: "/zasady-ochrany-osobnych-udajov", element: <PrivacyPage /> },
  { path: "/privacy", element: <PrivacyPage /> },
  { path: "/cookies", element: <CookiesPage /> },
  { path: "*", element: <NotFoundPage /> },
];
