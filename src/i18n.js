// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { DEFAULTLANG } from "./utils/constants";

i18n
  .use(HttpBackend) // loads translations from backend or public folder
  .use(LanguageDetector) // auto-detects user language
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULTLANG.value,
    debug: false,
    load: "languageOnly",
    interpolation: {
      escapeValue: false, // React already escapes
    },
    ns: ["translation"], // namespace
    defaultNS: "translation", // default namespace
    backend: {
      loadPath: "/locales/i18n/{{lng}}/{{ns}}.json", // translation files
    },
  });

export default i18n;
