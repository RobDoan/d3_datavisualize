/* eslint-disable import/no-extraneous-dependencies,prettier/prettier */
// eslint-disable-next-line no-unused-vars
module.exports = function({ file, options, env }) {
  return {
    plugins: {
      "postcss-custom-media": true,
      "postcss-media-minmax": true,
      "postcss-calc": true,
      "postcss-color-function": true,
      "pixrem": true,
      "postcss-selector-not": true,
      "postcss-flexbugs-fixes": true,
      "autoprefixer": true,
    }
  };
};
