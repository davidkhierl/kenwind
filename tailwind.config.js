const glob = require("glob-all");
const paths = require("react-scripts/config/paths");

module.exports = {
  purge: [
    paths.appHtml,
    ...glob.sync(`${paths.appSrc}/**/*.tsx`, { nodir: true }),
    ...glob.sync(`${paths.appSrc}/**/*.ts`, { nodir: true }),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
