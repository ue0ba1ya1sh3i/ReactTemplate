// Import modules
import { i18next } from "../settings/";
import { TOptions } from "i18next";

// Translate text
const translate_use = (key: string, options?: TOptions) => {
  return i18next.t(key, options);
};

// Set language
const language_set = (language: "ja" | "en") => {
  localStorage.setItem("language", language);
  i18next.changeLanguage(language);
};

export { translate_use, language_set };