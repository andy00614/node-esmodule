const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  entry: "./src/client/index.tsx",
  output: {
    filename: "index.js",
    path: path.resolve(process.cwd(), "client_build"),
  },
});
