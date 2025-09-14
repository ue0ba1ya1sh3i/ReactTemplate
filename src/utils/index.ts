import { set as setTitle } from "./title";
import { use as useTranslate, set as setTranslate } from "./translate";

const utils = {
  translate: {
    use: useTranslate,
    set: setTranslate
  },

  title: setTitle
};

export default utils;
