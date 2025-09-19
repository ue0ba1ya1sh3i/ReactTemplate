// Librarys
import settings from "i18next";
import { initReactI18next } from "react-i18next";

// Datas
import english from "../data/translate/english.json";
import japanese from "../data/translate/japanese.json";


// Get language
const storage = localStorage.getItem("language");
const system = navigator.language.split("-")[0];

// Set language
let language;

if (storage && ["ja", "en"].includes(storage)) {
  language = storage;
} else if (["ja", "en"].includes(system)) {
  language = system;
} else {
  language = "en";
}

const resources = {
  ja: { translation: japanese },
  en: { translation: english }
};

settings.use(initReactI18next).init({
  resources: resources,
  lng: language,
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default settings;
