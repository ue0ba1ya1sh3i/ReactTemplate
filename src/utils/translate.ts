// Librarys
import settings from "../settings/";
import { TOptions } from "i18next";

// Set librarys
const librarys = {
  i18next: settings.i18next
}

const use = (key: string, options?: TOptions) => {
  return librarys.i18next.t(key, options);
};

const set = (language: "ja" | "en") => {
  localStorage.setItem("language", language);
  librarys.i18next.changeLanguage(language);
};

export { use , set };
