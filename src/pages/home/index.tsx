// Imports
import utils from "../../utils/";

function home() {
  utils.title("settings");

  return (
    <>
      {utils.translate.use("pages.settings.title")}
    </>
  );
};

export { home };
