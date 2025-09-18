// Library
import { createRoot } from "react-dom/client";

// Components
import pages from "./pages";
import { StrictMode, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstVisit } from "./components";

const Components = {
  pages,

  react: {
    strict: StrictMode,
    suspense: Suspense
  },

  router: {
    router: BrowserRouter,
    routes: Routes,
    route: Route
  },

  settings: ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <FirstVisit>
          {children}
        </FirstVisit>
      </>
    );
  }
}

// Files
import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <Components.react.strict>
    <Components.router.router>
      <Components.settings>
        <Components.react.suspense>
          <Components.router.routes>
            {/* Only */}
            <Components.router.route path="/" element={<Components.pages.home />} />
            <Components.router.route path="/settings" element={<Components.pages.settings />} />
            <Components.router.route path="/welcome" element={<Components.pages.welcome />} />
            <Components.router.route path="*" element={<Components.pages.notFound />} />
          </Components.router.routes>
        </Components.react.suspense>
      </Components.settings>
    </Components.router.router>
  </Components.react.strict>
);
