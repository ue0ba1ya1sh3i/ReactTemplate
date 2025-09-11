// Imports
import { tailwind } from "../../css/tailwind/";
import { translate_use, title_set } from "../../utils/";

function App() {
  // Settings
  title_set(translate_use("pages.welcome.title"));

  console.log(tailwind);

  return (
    <>
      <div className={tailwind.page.welcome.main.main}>
        <p className={tailwind.page.welcome.main.title}>{translate_use("pages.welcome.title")}</p>
      </div>
    </>
  );
};

export default App;