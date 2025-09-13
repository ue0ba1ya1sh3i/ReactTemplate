// Imports
import { tailwind } from "../../css/tailwind/";
import { translate_use, title_set } from "../../utils/";
import { useNavigate } from "react-router-dom";

function App() {
  // Settings
  title_set(translate_use("pages.home.title"));

  console.log(tailwind);

  const navigate = useNavigate();

  const handle = () => {
    navigate("/welcome");
  };

  return (
    <>
      {translate_use("pages.home.title")}
      <button onClick={handle}>{translate_use("pages.home.return_button")}</button>
    </>
  );
};

export default App;