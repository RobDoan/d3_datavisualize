/* eslint-disable import/no-extraneous-dependencies */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const configPaths = require("./webpack.config-paths");

function getPlugins(isDebug, isHot) {
  const definedPlugin = new webpack.DefinePlugin({
    DEBUG: isDebug,
  });

  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: configPaths.htmlTemplate,
  });

  const plugins = [definedPlugin, htmlWebpackPlugin];

  if (isHot) {
    const hotModulePlugin = new webpack.HotModuleReplacementPlugin();
    plugins.push(hotModulePlugin);
  }

  return plugins;
}

module.exports = getPlugins;
