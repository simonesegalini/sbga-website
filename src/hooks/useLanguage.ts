import { useTranslation } from "react-i18next";
import { Language } from "../state/global/global.types";
import { useEffect } from "react";
import { useGlobal } from "../state/global/useGlobal";

export const useLanguage = () => {
  const { language, setLanguage } = useGlobal();
  const { i18n } = useTranslation();
  const browserLang = window.navigator.language.split("-")[0] as Language;

  useEffect(() => {
    if (language) return;
    if (browserLang !== language) {
      setLanguage({ language: browserLang });
    }
  }, [browserLang, language, setLanguage]);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);
};
