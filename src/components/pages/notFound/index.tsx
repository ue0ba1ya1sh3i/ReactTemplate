// Imports
import { tailwind } from "../../../css/tailwind/";
import utils from "../../../utils/";

function notFound() {
  utils.title("notFound");
  
  console.log(tailwind);

  return (
    <>
      {utils.translate.use("pages.notFound.title")}
    </>
  );
};

export { notFound };
