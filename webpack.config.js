const path = require("path");

const configPaths = require("./webpack/webpack.config-paths");
const getPlugins = require("./webpack/webpack.plugins");
const getRules = require("./webpack/webpack.rules");

const isDebug = process.env.NODE_ENV !== "production";
const isVerbose = process.argv.includes("--verbose");
const isHot = process.env.HOT_REPLACE === "yes";

module.exports = {
  context: configPaths.rootPath,
  entry: {
    main: [
      // 'react-hot-loader/patch',
      `webpack-dev-server/client?http://${process.env.NODE_HOST || 'localhost'}:${process.env.NODE_PORT || 8080}`,
      "@babel/polyfill",
      path.join(configPaths.rootPath, "src/index.js"),
    ],
  },
  output: {
    path: configPaths.buildPath,
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: getRules(isDebug),
  },
  plugins: getPlugins(isDebug, isHot),
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".css", ".scss"],
  },
  bail: !isDebug,
  cache: isDebug,
  devtool: isDebug ? "cheap-module-inline-source-map" : "source-map",
  mode: isDebug ? "development" : "production",
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty",
  },
  stats: {
    cached: isVerbose,
    cachedAssets: isVerbose,
    chunks: isVerbose,
    chunkModules: isVerbose,
    colors: true,
    hash: isVerbose,
    modules: isVerbose,
    reasons: isDebug,
    timings: true,
    version: isVerbose,
  },
  devServer: {
    contentBase: configPaths.buildPath,
    publicPath: "/",
    historyApiFallback: true,
    hot: isHot,
    noInfo: false,
    inline: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: true,
    },
  },
};
