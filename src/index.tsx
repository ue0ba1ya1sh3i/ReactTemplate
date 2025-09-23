// Librarys
import { createRoot } from "react-dom/client"
import { StrictMode, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// File
import "./css/index.css"

// Setting
import { customTheme } from "./settings/tailwind/flowbite"

// Components
import { Home, NotFound, Welcome } from "./pages"
import { FirstVisit } from "./components"
import { ThemeProvider } from "flowbite-react"

const AppSettings = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <FirstVisit>{children}</FirstVisit>
      </ThemeProvider>
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
