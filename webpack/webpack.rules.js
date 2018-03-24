/* eslint-disable import/no-extraneous-dependencies */
const configPaths = require("./webpack.config-paths");

const reScript = /\.(js|jsx|mjs)$/;
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
const reImage = /\.(bmp|gif|jpg|jpeg|png|svg)$/;

const minimizeCssOptions = { discardComments: { removeAll: true } };

function getRules(isDebug) {
  const staticAssetName = isDebug
    ? "[path][name].[ext]?[hash:8]"
    : "[hash:8].[ext]";
  return [
    {
      test: reScript,
      exclude: /(node_modules|bower_components)/,
      use: { loader: "babel-loader" },
    },
    {
      test: reStyle,
      rules: [
        // Process external/third-party styles
        {
          exclude: configPaths.srcPath,
          loader: "css-loader",
          options: {
            sourceMap: isDebug,
            minimize: isDebug ? false : minimizeCssOptions,
          },
        },
        {
          include: configPaths.srcPath,
          loader: "css-loader",
          options: {
            importLoaders: 1,
            sourceMap: isDebug,
            modules: true,
            localIdentName: isDebug
              ? "[name]-[local]-[hash:base64:5]"
              : "[hash:base64:5]",
            minimize: isDebug ? false : minimizeCssOptions,
          },
        },
        {
          loader: "postcss-loader",
        },
        {
          test: /\.(scss|sass)$/,
          loader: "sass-loader",
        },
      ],
    },
    {
      test: reImage,
      oneOf: [
        // Inline lightweight images into CSS
        {
          issuer: reStyle,
          oneOf: [
            // Inline lightweight SVGs as UTF-8 encoded DataUrl string
            {
              test: /\.svg$/,
              loader: "svg-url-loader",
              options: {
                name: staticAssetName,
                limit: 4096, // 4kb
              },
            },

            // Inline lightweight images as Base64 encoded DataUrl string
            {
              loader: "url-loader",
              options: {
                name: staticAssetName,
                limit: 4096, // 4kb
              },
            },
          ],
        },

        // Or return public URL to image resource
        {
          loader: "file-loader",
          options: {
            name: staticAssetName,
          },
        },
      ],
    },
  ];
}

module.exports = getRules;
