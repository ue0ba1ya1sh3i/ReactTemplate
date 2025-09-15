// Imports
import { tailwind } from "../../../css/tailwind/";
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
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400 text-white">
        <section className="h-screen flex flex-col justify-center items-center px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Template
          </h1>

          <p className="text-xl mb-8 text-center">
            {utils.translate.use("components.pages.welcome.main.message")}
          </p>

          <button onClick={handle} className="bg-white text-gray-800 font-bold py-3 px-5 rounded-xl shadow-lg-lg hover:bg-gray-200 transition">
            {utils.translate.use("components.pages.welcome.main.button")}
          </button>
        </section>

        <section className="pb-16 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg transition text-center text-gray-800">
            <h3 className="text-xl font-bold mb-2">{utils.translate.use("components.pages.welcome.features.0.title")}</h3>
            <p>{utils.translate.use("components.pages.welcome.features.0.subTitle")}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transition text-center text-gray-800">
            <h3 className="text-xl font-bold mb-2">{utils.translate.use("components.pages.welcome.features.1.title")}</h3>
            <p>{utils.translate.use("components.pages.welcome.features.1.subTitle")}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg transition text-center text-gray-800">
            <h3 className="text-xl font-bold mb-2">{utils.translate.use("components.pages.welcome.features.2.title")}</h3>
            <p>{utils.translate.use("components.pages.welcome.features.2.subTitle")}</p>
          </div>
        </section>

        <footer className="bg-black bg-opacity-50 py-6 mt-auto">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="mb-2 md:mb-0">&copy; 2025 ue0ba1ya1sh3i Template. All rights reserved.</p>

            <div className="flex space-x-6 items-center text-xl">
              <a href="https://github.com/ue0ba1ya1sh3i" className="hover:text-gray-200 transition">
                <FaGithub />
              </a>

              <a href="https://www.tiktok.com/@ue0ba1ya1sh3i" className="hover:text-gray-200 transition">
                <FaTiktok />
              </a>

              <a href="https://www.youtube.com/@ue0ba1ya1sh3i" className="hover:text-gray-200 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export { welcome };
