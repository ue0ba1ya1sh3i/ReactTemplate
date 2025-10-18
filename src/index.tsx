// Librarys
import { createRoot } from "react-dom/client"
import { StrictMode, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// File
import "@/assets/css/index.css"

// Code
import "@/library/i18next"

// Components
import { Home, NotFound, Welcome } from "./pages"
import { FirstVisit } from "./features/firstVisit"

const AppSettings = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <FirstVisit>{children}</FirstVisit>
    </>
  )
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppSettings>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppSettings>
    </BrowserRouter>
  </StrictMode>
)
