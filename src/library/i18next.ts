// Library
import i18next from "i18next"
import languageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

// Data
import english from "@/assets/json/translate/english.json"
import japanese from "@/assets/json/translate/japanese.json"

const resources = {
  ja: { translation: japanese },
  en: { translation: english }
}

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ["en", "ja"],
    interpolation: { escapeValue: false },
    detection: {
      caches: ["localstorage"],
      order: ["localStorage", "navigator"]
    }
  })

export default i18next
