// Imports
import { tailwind } from "../../../css/tailwind/";
import utils from "../../../utils/";

function settings() {
  utils.title("settings");
  
  console.log(tailwind);

  return (
    <>
      {utils.translate.use("pages.settings.title")}
    </>
  );
};

export { settings };