import { useEffect, useState } from "react";

import { useTranslation, initReactI18next } from "react-i18next";

const Collapse = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <div class="flex flex-wrap justify-center items-center md:justify-start gap-6">
      <button
        class="p-4 rounded-xl border-2 border-teal-700 bg-teal-400 text-white font-mono font-black shadow-xl hover:shadow-lg active:shadow-inner w-60 max-h-28"
        onClick={() => setIsVisible(!isVisible)}
      >
        {t(item)}
      </button>
      {isVisible && (
        <div class="rounded-lg shadow-lg border-2 border-teal-700 max-w-2xl animate-transitionIn">
          <div class="bg-teal-400 rounded p-6 text-teal-50 font-mono font-black whitespace-pre-line">
            {t(`${item}Details`)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Collapse;
