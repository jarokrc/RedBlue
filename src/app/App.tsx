import { Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import { appRoutes } from "@/routes";
import faviconIco from "@/assets-webp/favicon/favicon.ico";
import favicon16 from "@/assets-webp/favicon/favicon-16x16.png";
import favicon32 from "@/assets-webp/favicon/favicon-32x32.png";
import appleTouchIcon from "@/assets-webp/favicon/apple-touch-icon.png";
import android192 from "@/assets-webp/favicon/android-chrome-192x192.png";
import android512 from "@/assets-webp/favicon/android-chrome-512x512.png";
import siteManifest from "@/assets-webp/favicon/site.webmanifest";

const App = () => {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="icon" type="image/x-icon" href={faviconIco} />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="192x192" href={android192} />
        <link rel="icon" type="image/png" sizes="512x512" href={android512} />
        <link rel="manifest" href={siteManifest} />
      </Helmet>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<div className="py-10 text-center text-slate-600">Loading...</div>}>
            <Routes>
              {appRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
