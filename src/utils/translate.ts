// Library
import settings from "../settings/"
import { TOptions } from "i18next"

// Library map
const libraries = {
  i18next: settings.i18next
}

const use = (key: string, options?: TOptions) => {
  return libraries.i18next.t(key, options)
}

const set = (language: "ja" | "en") => {
  localStorage.setItem("language", language)
  libraries.i18next.changeLanguage(language)
}

export { use , set }
