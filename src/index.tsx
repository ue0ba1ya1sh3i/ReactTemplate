// Librarys
import { createRoot } from "react-dom/client";

// Set librarys
const librarys = {
  react: {
    create: createRoot
  }
}

// Components
import pages from "./components/pages";
import { StrictMode, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstVisit } from "./components";

// Set componets
const Components = {
  pages,
  
  handmade: {
    firstVisit: FirstVisit
  },

  react: {
    strict: StrictMode,
    suspense: Suspense
  },

  router: {
    router: BrowserRouter,
    routes: Routes,
    route: Route
  }
}

// Files
import "./css/index.css";

function Settings({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Components.handmade.firstVisit>
        {children}
      </Components.handmade.firstVisit>
    </>
  );
};

librarys.react.create(document.getElementById("root")!).render(
  <Components.react.strict>
    <Components.router.router>
      <Settings>
        <Components.react.suspense>
          <Routes>
            {/* Only */}
            <Route path="/" element={<Components.pages.home />} />
            <Route path="/settings" element={<Components.pages.settings />} />
            <Route path="/welcome" element={<Components.pages.welcome />} />
            <Route path="*" element={<Components.pages.notFound />} />
          </Routes>
        </Components.react.suspense>
      </Settings>
    </Components.router.router>
  </Components.react.strict>
);