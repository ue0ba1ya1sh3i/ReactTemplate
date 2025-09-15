// Imports
import utils from "../../../utils/";
import { useNavigate } from "react-router-dom";

function home() {
  // Settings
  utils.title("home");

  const navigate = useNavigate();

  const handle = () => {
    navigate("/welcome");
  };

  return (
    <>
      {utils.translate.use("pages.home.title")}
      <button onClick={handle}>{utils.translate.use("pages.home.return_button")}</button>
    </>
  );
};

export { home };
