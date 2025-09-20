// Library
import i18next from '../settings/translate'
import { TOptions } from 'i18next'

const use = (key: string, options?: TOptions) => {
  return i18next.t(key, options)
}

const set = (language: 'ja' | 'en') => {
  localStorage.setItem('language', language)
  i18next.changeLanguage(language)
}

export { use, set }
