const glob = require("glob-all");
const paths = require("react-scripts/config/paths");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    paths.appHtml,
    ...glob.sync(`${paths.appSrc}/**/*.tsx`, { nodir: true }),
    ...glob.sync(`${paths.appSrc}/**/*.ts`, { nodir: true }),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
