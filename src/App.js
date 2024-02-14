import "./App.css";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import Divider from "./Divider";
import Collapse from "./Collapse";

import translation from "./i18n.json";
import profilePhoto from "./profile.png";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";

i18n.use(initReactI18next).init({ resources: translation, fallbackLng: "en" });

const availableLang = ["en", "fr"];
const menu = ["aboutMe", "study", "experience"];

function App() {
  const { t } = useTranslation();

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div class="overflow-y-hidden max-w-screen-lg mx-auto shadow-2xl">
      <div class="bg-yellow-100 w-full h-screen items-center p-4 border-8 border-teal-500 overflow-y-scroll no-scrollbar">
        <div class="flex space-x-2 pb-4">
          {availableLang.map((lang) => (
            <button
              class="bg-teal-400 p-1 rounded shadow-xl active:shadow-inner uppercase text-xs font-bold border border-teal-700"
              onClick={() => changeLanguageHandler(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
        <Divider />
        <div class="bg-teal-500 flex gap-4 font-mono rounded border-2 border-teal-700 ">
          <img
            src={profilePhoto}
            class="bg-yellow-500 w-40 h-40 shadow-lg rounded-full m-2"
            alt="profile picture"
          />
          <div class="m-2">
            <p class="uppercase font-black text-white text-4xl my-2 overflow-hidden break-words border-2">
              {t("name")}
            </p>
            <p class="uppercase font-black text-gray-100 mt-2 overflow-hidden break-words">
              {t("poste")}
            </p>
            <div class="flex flex-wrap items-center gap-6">
              <GithubIcon />
              <LinkedinIcon />
            </div>
          </div>
        </div>
        <Divider />
        <div class="flex flex-col md:items-start md:justify-start justify-center items-center gap-4 p-4">
          {menu.map((item) => (
            <Collapse item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
