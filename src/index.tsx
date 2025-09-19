// Librarys
import { createRoot } from "react-dom/client";

// Files
import "./css/index.css";

// Components
import { Home, NotFound, Settings, Welcome } from "./pages";
import { StrictMode, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstVisit } from "./components";

const AppSettings = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FirstVisit>
        {children}
      </FirstVisit>
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppSettings>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppSettings>
    </BrowserRouter>
  </StrictMode>
);
