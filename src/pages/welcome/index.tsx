// Imports
import data from "../../css/tailwind"
import utils from "../../utils/";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaTiktok, FaYoutube } from "react-icons/fa";

function App() {
  utils.title("welcome");
  const navigate = useNavigate();

  const handle = () => {
    localStorage.setItem("firstVisit", "true");
    navigate("/");
  };

  return (
      <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400 text-white">
        <section className="h-screen flex flex-col justify-center items-center px-4">
          <p className="text-5xl font-bold mb-5 text-center">
            Template
          </p>

          <p className="text-3xl mb-10 text-center">
            {utils.translate.use("components.pages.welcome.main.message.0")}
          </p>

          <button onClick={handle} className={data.button("white")}>
            {utils.translate.use("components.pages.welcome.main.start")}
          </button>
        </section>

        <section className="mb-20 max-w-5xl mx-auto px-4">
          <p className="text-center mb-5 text-3xl font-bold">{utils.translate.use("components.pages.welcome.features.0.title")}</p>

          <div className="grid md:grid-cols-3 gap-5 text-xl">
            <div className="bg-white p-5 rounded-xl shadow-lg transition text-center text-gray-800">
              <p className="font-bold mb-2">{utils.translate.use("components.pages.welcome.features.0.main.0.title")}</p>
              <p>{utils.translate.use("components.pages.welcome.features.0.main.0.subTitle")}</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg transition text-center text-gray-800">
              <p className="font-bold mb-2">{utils.translate.use("components.pages.welcome.features.0.main.1.title")}</p>
              <p>{utils.translate.use("components.pages.welcome.features.0.main.1.subTitle")}</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg transition text-center text-gray-800">
              <p className="font-bold mb-2">{utils.translate.use("components.pages.welcome.features.0.main.2.title")}</p>
              <p>{utils.translate.use("components.pages.welcome.features.0.main.2.subTitle")}</p>
            </div>
          </div>
        </section>

        <section className="mb-20 max-w-5xl mx-auto px-4">
          <p className="text-center mb-5 text-3xl font-bold">{utils.translate.use("components.pages.welcome.features.1.title")}</p>

          <div className="grid md:grid-cols-3 gap-5 text-xl">
            <div className="bg-white p-5 rounded-xl shadow-lg transition text-center text-gray-800">
              <p className="font-bold mb-2">{utils.translate.use("components.pages.welcome.features.1.main.0.title")}</p>
              <p>{utils.translate.use("components.pages.welcome.features.1.main.0.subTitle")}</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg transition text-center text-gray-800">
              <p className="font-bold mb-2">{utils.translate.use("components.pages.welcome.features.1.main.1.title")}</p>
              <p>{utils.translate.use("components.pages.welcome.features.1.main.1.subTitle")}</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-lg transition text-center text-gray-800">
              <p className="font-bold mb-2">{utils.translate.use("components.pages.welcome.features.1.main.2.title")}</p>
              <p>{utils.translate.use("components.pages.welcome.features.1.main.2.subTitle")}</p>
            </div>
          </div>
        </section>

        <section className="p-10 mb-20 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 order-2 md:order-1">
              <img src="https://placehold.co/600x400" alt="Image" className="w-full rounded-xl shadow-lg" />
            </div>

            <div className="md:w-1/2 order-1 md:order-2">
              <p className="text-3xl font-bold text-gray-800">{utils.translate.use("components.pages.welcome.hero.0")}</p>
            </div>
          </div>
        </section>

        <section className="p-10 mb-20 bg-white">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <p className="text-3xl font-bold text-gray-800">{utils.translate.use("components.pages.welcome.hero.1")}</p>
            </div>

            <div className="md:w-1/2">
              <img src="https://placehold.co/600x400" alt="Image" className="w-full rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

        <section className="max-w-5xl h-[50vh] mx-auto p-5 flex flex-col justify-center items-center px-4">
          <p className="font-bold text-3xl mb-10 text-center">
            {utils.translate.use("components.pages.welcome.main.message.1")}
          </p>

          <button onClick={handle} className={data.button("white")}>
            {utils.translate.use("components.pages.welcome.main.start")}
          </button>
        </section>

        <footer className="bg-black bg-opacity-30 py-10 mt-auto">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-center text-sm mb-5 md:mb-0">&copy; 2025 ue0ba1ya1sh3i Template. All rights reserved.</p>

            <div className="flex space-x-5 items-center text-lg">
              <a href="https://github.com/ue0ba1ya1sh3i" aria-label="GitHub" className="hover:text-gray-200 transition">
                <FaGithub />
              </a>

              <a href="https://www.tiktok.com/@ue0ba1ya1sh3i" aria-label="TikTok" className="hover:text-gray-200 transition">
                <FaTiktok />
              </a>

              <a href="https://www.youtube.com/@ue0ba1ya1sh3i" aria-label="YouTube" className="hover:text-gray-200 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </footer>
      </div>
  );
};

export { App };
