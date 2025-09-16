// Imports
import utils from "../../utils/";

function notFound() {
  utils.title("settings");

  return (
    <>
      {utils.translate.use("pages.settings.title")}
    </>
  );
};

export { notFound };
