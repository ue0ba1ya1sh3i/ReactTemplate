import utils from "./"

const set = (name: string) => {
  const path = `components.pages.${name}.title`;

  document.title = `Template | ${utils.translate.use(path)}`;
};

export { set }
