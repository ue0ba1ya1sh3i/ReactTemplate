// Imports
import { useTranslate } from "@/hooks/translate"
import { useNavigate } from "react-router-dom"
import InstallButton from "@/parts/install"

import { setTitle, viewTitle } from "@/utils/title"
import tailwindget from "@/hooks/tailwind"

import { FaGithub, FaTiktok, FaYoutube } from "react-icons/fa"

function App() {
  const classes = tailwindget({
    page: "normal.root",
    parts: "button",
    unit: "px.page"
  });

  console.log(classes);

  const name = "welcome"
  setTitle(name)
  const navigate = useNavigate()
  const { translate } = useTranslate()

  const handle = () => {
    localStorage.setItem("firstVisit", "true")
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400 text-white gap-20 flex flex-col">
      <InstallButton />

      <section className="flex h-[100dvh] flex-col items-center justify-center px-4 gap-5">
        <p className="text-center text-5xl font-bold break-all">{viewTitle()}</p>
        <p className="text-center text-3xl break-all">{translate(`pages.${name}.main.message.0`)}</p>
        <button onClick={handle} className="rounded-lg bg-white px-4 py-3 text-black transition hover:bg-white/70">{translate(`pages.${name}.main.start`)}</button>
      </section>

      <section className="mx-auto max-w-5xl px-4 gap-5 flex flex-col">
        <p className="text-center text-3xl font-bold break-all">{translate(`pages.${name}.features.0.title`)}</p>

        <div className="grid gap-5 text-xl md:grid-cols-3">
          <div className="rounded-xl bg-white p-5 text-center text-gray-800 shadow-lg transition">
            <p className="mb-2 font-bold break-all">{translate(`pages.${name}.features.0.main.0.title`)}</p>
            <p className="break-all">{translate(`pages.${name}.features.0.main.0.subTitle`)}</p>
          </div>

          <div className="rounded-xl bg-white p-5 text-center text-gray-800 shadow-lg transition">
            <p className="mb-2 font-bold break-all">{translate(`pages.${name}.features.0.main.1.title`)}</p>
            <p className="break-all">{translate(`pages.${name}.features.0.main.1.subTitle`)}</p>
          </div>

          <div className="rounded-xl bg-white p-5 text-center text-gray-800 shadow-lg transition">
            <p className="mb-2 font-bold break-all">{translate(`pages.${name}.features.0.main.2.title`)}</p>
            <p className="break-all">{translate(`pages.${name}.features.0.main.2.subTitle`)}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 gap-5 flex flex-col">
        <p className="text-center text-3xl font-bold break-all">{translate(`pages.${name}.features.1.title`)}</p>

        <div className="grid gap-5 text-xl md:grid-cols-3">
          <div className="rounded-xl bg-white p-5 text-center text-gray-800 shadow-lg transition">
            <p className="mb-2 font-bold break-all">{translate(`pages.${name}.features.1.main.0.title`)}</p>
            <p className="break-all">{translate(`pages.${name}.features.1.main.0.subTitle`)}</p>
          </div>

          <div className="rounded-xl bg-white p-5 text-center text-gray-800 shadow-lg transition">
            <p className="mb-2 font-bold break-all">{translate(`pages.${name}.features.1.main.1.title`)}</p>
            <p className="break-all">{translate(`pages.${name}.features.1.main.1.subTitle`)}</p>
          </div>

          <div className="rounded-xl bg-white p-5 text-center text-gray-800 shadow-lg transition">
            <p className="mb-2 font-bold break-all">{translate(`pages.${name}.features.1.main.2.title`)}</p>
            <p className="break-all">{translate(`pages.${name}.features.1.main.2.subTitle`)}</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-10 w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">
          <div className="order-2 md:order-1 md:w-1/2"><img src="https://placehold.co/600x400" alt="Image" className="w-full rounded-xl shadow-lg" /></div>
          <div className="order-1 md:order-2 md:w-1/2"><p className="text-3xl font-bold break-all text-gray-800">{translate(`pages.${name}.hero.0`)}</p></div>
        </div>
      </section>

      <section className="bg-white p-10 w-full">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 md:flex-row">
          <div className="md:w-1/2"><p className="text-3xl font-bold break-all text-gray-800">{translate(`pages.${name}.hero.1`)}</p></div>
          <div className="md:w-1/2"><img src="https://placehold.co/600x400" alt="Image" className="w-full rounded-xl shadow-lg" /></div>
        </div>
      </section>

      <section className="mx-auto flex h-[50dvh] max-w-5xl flex-col items-center justify-center p-5 px-4">
        <p className="mb-10 text-center text-3xl font-bold break-all">{translate(`pages.${name}.main.message.1`)}</p>
        <button onClick={handle} className="rounded-lg bg-white px-4 py-3 text-black transition hover:bg-white/70">{translate(`pages.${name}.main.start`)}</button>
      </section>

      <footer className="mt-auto bg-black/30 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between px-4 text-sm md:flex-row">
          <p className="mb-5 text-center text-sm break-all md:mb-0">&copy; {new Date().getFullYear()} {import.meta.env.VITE_AUTHOR} {viewTitle()}. All rights reserved.</p>

          <div className="flex items-center space-x-5 text-lg">
            <a href="https://github.com/ue0ba1ya1sh3i" aria-label="GitHub" className="transition hover:text-white/70"><FaGithub /></a>
            <a href="https://www.tiktok.com/@ue0ba1ya1sh3i" aria-label="TikTok" className="transition hover:text-white/70"><FaTiktok /></a>
            <a href="https://www.youtube.com/@ue0ba1ya1sh3i" aria-label="YouTube" className="transition hover:text-white/70"><FaYoutube /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
