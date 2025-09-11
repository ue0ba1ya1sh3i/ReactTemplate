// Imports
import { tailwind } from "../../css/tailwind/";
import { translate_use, title_set } from "../../utils/";

function App() {
  // Settings
  title_set(translate_use("pages.home.title"));

  console.log(tailwind);

  return (
    <>
      {translate_use("pages.home.title")}
    </>
  );
};

export default App;