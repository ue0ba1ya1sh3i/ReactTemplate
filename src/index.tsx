// Librarys
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
    <BrowserRouter>
      <Components.settings>
        <Components.react.suspense>
          <Routes>
            {/* Only */}
            <Route path="/" element={<Components.pages.home />} />
            <Route path="/settings" element={<Components.pages.settings />} />
            <Route path="/welcome" element={<Components.pages.welcome />} />
            <Route path="*" element={<Components.pages.notFound />} />
          </Routes>
        </Components.react.suspense>
      </Components.settings>
    </BrowserRouter>
  </Components.react.strict>
);
