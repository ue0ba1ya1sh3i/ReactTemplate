import { translate_use } from "./"

export const title_set = (title: string) => {
  document.title = `${translate_use("title")} | ${title}`;
};