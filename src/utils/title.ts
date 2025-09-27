import { useTranslate } from "@/hooks/translate"

const setTitle = (name: string) => {
  const { translate } = useTranslate()
  const path = `pages.${name}.title`

  document.title = `${import.meta.env.VITE_TITLE} | ${translate(path)}`
}

const viewTitle = () => {
  return import.meta.env.VITE_TITLE
}

export { setTitle, viewTitle }
