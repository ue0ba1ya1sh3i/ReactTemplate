// Library
import utils from "../../utils/"

function App() {
  utils.title.set("notFound")

  return <>{utils.translate.use("pages.notFound.title")}</>
}

export default App
