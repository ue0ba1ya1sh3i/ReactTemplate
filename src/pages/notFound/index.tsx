// Imports
import utils from "../../utils/";

function App() {
  utils.title("settings");

  return (
    <>
      {utils.translate.use("pages.settings.title")}
    </>
  );
};

export { App };
