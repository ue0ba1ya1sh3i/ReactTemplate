// Imports
import tailwind from "../../../css/tailwind"
import utils from "../../../utils/";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaTiktok, FaYoutube } from "react-icons/fa";

function welcome() {
  // Settings
  utils.title("welcome");

  console.log(tailwind);

  const navigate = useNavigate();

  const handle = () => {
    localStorage.setItem("firstVisit", "true");
    navigate("/");
  };

  return (
      <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400 text-white">
        <section className="h-screen flex flex-col justify-center items-center px-4">
          <p className="text-5xl font-bold mb-4 text-center">
            Template
          </p>

          <p className="text-xl mb-8 text-center">
            {utils.translate.use("components.pages.welcome.main.message")}
          </p>

          <div className="flex gap-5">
            <button onClick={handle} className={tailwind.button("white", "gray-800", "gray-200")}>
              {utils.translate.use("components.pages.welcome.main.start")}
            </button>

            <a href="https://site-ue0ba1ya1sh3i.web.app/products" className={tailwind.button("white", "gray-800", "gray-200")}>
              {utils.translate.use("components.pages.welcome.main.product")}
            </a>
          </div>
        </section>

        <section className="mb-16 max-w-6xl mx-auto px-4">
          <p className="text-white text-center pb-9 text-3xl font-bold">主な特徴</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg transition text-center text-gray-800">
              <p className="text-xl font-bold mb-2">{utils.translate.use("components.pages.welcome.features.0.title")}</p>
              <p>{utils.translate.use("components.pages.welcome.features.0.subTitle")}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transition text-center text-gray-800">
              <p className="text-xl font-bold mb-2">{utils.translate.use("components.pages.welcome.features.1.title")}</p>
              <p>{utils.translate.use("components.pages.welcome.features.1.subTitle")}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transition text-center text-gray-800">
              <p className="text-xl font-bold mb-2">{utils.translate.use("components.pages.welcome.features.2.title")}</p>
              <p>{utils.translate.use("components.pages.welcome.features.2.subTitle")}</p>
            </div>
          </div>
        </section>

        <section className="py-12 px-12 mb-16 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            
            {/* 左：画像（PCでは左、スマホでは下） */}
            <div className="md:w-1/2 order-2 md:order-1">
              <img
                src="https://placehold.co/600x400"
                alt="アプリイメージ"
                className="w-full rounded-xl shadow-lg"
              />
            </div>

            {/* 右：テキスト（PCでは右、スマホでは上） */}
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl font-bold mt-8 text-gray-800">アプリの特徴</h2>
            </div>

          </div>
        </section>

        <section className="py-12 px-12 mb-16 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-right text-3xl font-bold mb-8 text-gray-800">アプリの特徴</h2>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://placehold.co/600x400"
                alt="アプリイメージ"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section>

        </section>

        <footer className="bg-black bg-opacity-30 py-6 mt-auto">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="mb-2 md:mb-0">&copy; 2025 ue0ba1ya1sh3i Template. All rights reserved.</p>

            <div className="flex space-x-6 items-center text-xl">
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

export { welcome };
