import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Layout from "@/components/Layout";
import { appRoutes } from "@/routes";

const App = () => {
  return (
    <BrowserRouter>
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
  );
};

export default App;
