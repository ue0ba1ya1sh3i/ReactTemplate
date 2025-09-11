// Import components & modules
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstVisit } from "./components";

// Import files
import "./css/index.css";

// Set route
import Route_home from "./page/home";
import Route_settings from "./page/settings";
import Route_welcome from "./page/welcome";
import Route_notfound from "./page/notFound";

// App providers
function App_providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FirstVisit>
        {children}
      </FirstVisit>
    </>
  );
};

// Render settings
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App_providers>
        <Suspense>
          <Routes>
            {/* Only */}
            <Route path="/" element={<Route_home />} />
            <Route path="/settings" element={<Route_settings />} />
            <Route path="/welcome" element={<Route_welcome />} />
            <Route path="*" element={<Route_notfound />} />
          </Routes>
        </Suspense>
      </App_providers>
    </BrowserRouter>
  </StrictMode>
);