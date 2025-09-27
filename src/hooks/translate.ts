import { useTranslation } from "react-i18next"

const useTranslate = () => {
  const { t, i18n } = useTranslation()

  return {
    translate: t,
    current: i18n.language
  }
}

export { useTranslate }
