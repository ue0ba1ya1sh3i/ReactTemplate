import { set as setTitle, use as useTitle } from './title'
import { use as useTranslate, set as setTranslate } from './translate'

const utils = {
  translate: {
    use: useTranslate,
    set: setTranslate,
  },

  title: {
    use: useTitle,
    set: setTitle,
  },
}

export default utils
