import { useTranslate } from "@/hooks/translate"

import { setTitle } from "@/utils/title"

function App() {
  const { translate } = useTranslate()
  const name = "home"

  setTitle(name)

  return <>{translate(`pages.${name}.title`)}</>
}

export default App
