import i18next from "../library/i18next"

const setTranslate = (language: string) => {
  i18next.changeLanguage(language)
}

export { setTranslate }
