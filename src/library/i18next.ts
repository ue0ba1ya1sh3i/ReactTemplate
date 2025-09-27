// Library
import i18next from "i18next"
import languageDetector from "i18next-browser-languagedetector"

// Data
import english from "@/assets/json/translate/english.json"
import japanese from "@/assets/json/translate/japanese.json"

const resources = {
  ja: { translation: japanese },
  en: { translation: english }
}

i18next.use(languageDetector).init({
  resources,
  fallbackLng: ["en", "ja"],
  interpolation: { escapeValue: false },
  detection: {
    caches: ["localstorage"],
    order: ["localStorage", "navigator"]
  }
})

export default i18next
