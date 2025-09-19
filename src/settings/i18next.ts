// Library
import i18next from "i18next"
import { initReactI18next } from "react-i18next"

// Data
import english from "../data/translate/english.json"
import japanese from "../data/translate/japanese.json"

// Get
const storage = localStorage.getItem("language")
const system = navigator.language.split("-")[0]

// Set
let language

if (storage && ["ja", "en"].includes(storage)) {
  language = storage
} else if (["ja", "en"].includes(system)) {
  language = system
} else {
  language = "en"
}

const resources = {
  ja: { translation: japanese },
  en: { translation: english }
}

i18next.use(initReactI18next).init({
  resources: resources,
  lng: language,
  fallbackLng: "en",
  interpolation: { escapeValue: false }
})

export default i18next
