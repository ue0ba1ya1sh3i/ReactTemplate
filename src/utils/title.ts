import utils from "./"

const set = (name: string) => {
  const path = `components.pages.${name}.title`;

  document.title = `${utils.translate.use("title")} | ${utils.translate.use(path)}`;
};

export { set }
