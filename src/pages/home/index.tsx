// Library
import utils from "../../utils/"

function App() {
  utils.title.set("home")

  return <>{utils.translate.use("pages.home.title")}</>
}

export default App
