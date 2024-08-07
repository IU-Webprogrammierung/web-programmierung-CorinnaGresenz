const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
        { from: "style", to: "style" },
        { from: "js/vendor", to: "js/vendor" },
        { from: "favicon.ico", to: "favicon.ico" },
        { from: "404.html", to: "404.html" },
        { from: "assets", to: "assets" },
      ],
    }),
  ],
});
