const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "development",
  entry: path.resolve(__dirname,'../src/server/index.ts'),
  target: "node",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "server_build"),
  },
  resolve: {
    // fallback: {
    //   fs: false,
    //   async_hooks: false,
    //   net: false,
    // },
  },
  // plugins: [new NodePolyfillPlugin()],
});
