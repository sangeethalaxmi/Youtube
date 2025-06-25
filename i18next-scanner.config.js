// i18next-scanner.config.js
module.exports = {
  input: ["src/components/SideBar.js"], // or use glob: 'src/**/*.js'
  output: "./public/locales/",
  options: {
    debug: true,
    removeUnusedKeys: false,
    sort: true,
    func: {
      list: ["t"], // function to look for
      extensions: [".js", ".jsx"],
    },
    lngs: [
      "en",
      "fr",
      "es",
      "hi",
      "pt-BR",
      "ar",
      "id",
      "ru",
      "ja",
      "ko",
      "de",
      "tr",
      "ta",
      "te",
      "vi",
    ],
    defaultLng: "en",
    defaultNs: "translation",
    ns: ["translation"],
  },
};
