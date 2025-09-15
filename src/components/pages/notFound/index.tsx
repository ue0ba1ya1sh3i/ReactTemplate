// Imports
import utils from "../../../utils/";

function notFound() {
  utils.title("notFound");

  return (
    <>
      {utils.translate.use("pages.notFound.title")}
    </>
  );
};

export { notFound };
