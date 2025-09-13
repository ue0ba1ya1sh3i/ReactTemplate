// Imports
import { tailwind } from "../../../css/tailwind/";
import utils from "../../../utils/";
import { useNavigate } from "react-router-dom";

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
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
          <h1 className="text-2xl font-bold">{utils.translate.use("components.pages.welcome.header.title")}</h1>
          <nav>
            <a href="https://site-ue0ba1ya1sh3i.web.app/all" className="hover:text-blue-500">{utils.translate.use("components.pages.welcome.header.navigation")}</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between p-10 bg-blue-50">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">{utils.translate.use("components.pages.welcome.hero.title")}</h2>
            <p className="mb-6 text-gray-700">{utils.translate.use("components.pages.welcome.hero.subTitle")}</p>
            <button onClick={handle} className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
              {utils.translate.use("components.pages.welcome.hero.button")}
            </button>
          </div>
        </section>

        {/* Feature */}
        <section className="p-10 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p className="text-gray-600">ここに機能の説明を簡単に書きます。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p className="text-gray-600">ここに機能の説明を簡単に書きます。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p className="text-gray-600">ここに機能の説明を簡単に書きます。</p>
          </div>
        </section>

        {/* CTA */}
        <section className="p-10 bg-blue-500 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start?</h2>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            Sign Up
          </button>
        </section>

        {/* Footer */}
        <footer className="p-6 bg-gray-800 text-white text-center">
          © 2025 MyApp. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export { welcome };