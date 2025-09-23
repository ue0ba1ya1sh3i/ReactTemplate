import utils from "./"

const set = (name: string) => {
  const path = `pages.${name}.title`

  document.title = `${import.meta.env.VITE_TITLE} | ${utils.translate.use(path)}`
}

const use = () => {
  return import.meta.env.VITE_TITLE
}

export { set, use }
