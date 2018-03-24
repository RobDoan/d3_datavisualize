/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");

const ROOT_PATH = path.resolve(__dirname, "..");

module.exports = {
  rootPath: ROOT_PATH,
  srcPath: path.join(ROOT_PATH, "./src"),
  buildPath: path.join(ROOT_PATH, "./dist"),
  htmlTemplate: path.join(ROOT_PATH, "./src/index.html"),
};
