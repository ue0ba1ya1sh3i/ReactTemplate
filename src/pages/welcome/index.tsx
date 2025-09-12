// Imports
import { tailwind } from "../../css/tailwind/";
import { translate_use, title_set } from "../../utils/";
import { useNavigate } from "react-router-dom";

function App() {
  // Settings
  title_set(translate_use("pages.welcome.title.main"));

  console.log(tailwind);

  const navigate = useNavigate();

  const handle = () => {
    localStorage.setItem("firstVisit", "true");
    navigate("/");
  };

  return (
    <>
      <div className={tailwind.page.welcome.main.main}>
        <p className={tailwind.page.welcome.main.title}>{translate_use("pages.welcome.title.main")}</p>
        <button onClick={handle}>{translate_use("pages.welcome.title.button")}</button>
      </div>
    </>
  );
};

export default App;