// Modules
import settings from "i18next";
import { initReactI18next } from "react-i18next";

// Data
import english from "../data/translate/english.json";
import japanese from "../data/translate/japanese.json";

// Resources
const resources = {
  ja: { translation: japanese },
  en: { translation: english }
};

// Get language
const language_storage = localStorage.getItem("language");
const language_system = navigator.language.split("-")[0];

// Set language
const language_definition = language_storage && ["ja", "en"].includes(language_storage)
  ? language_storage : ["ja", "en"].includes(language_system)
  ? language_system : "en";

// Init
settings.use(initReactI18next).init({
  resources: resources,
  lng: language_definition,
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default settings;
