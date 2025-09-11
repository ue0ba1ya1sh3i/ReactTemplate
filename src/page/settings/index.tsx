// Imports
import { tailwind } from "../../css/tailwind/";
import { translate_use, title_set } from "../../utils/";

function App() {
  // Settings
  title_set(translate_use("page.home.title"));

  console.log(tailwind);

  return (
    <>
      {translate_use("page.home.title")}
    </>
  );
};

export default App;