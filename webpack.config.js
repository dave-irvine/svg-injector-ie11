const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");

module.exports = {
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "static"),
    historyApiFallback: true,
    hot: true
  },
  entry: {
    main: "./src/index.js"
  },
  output: {
    filename: "main.js",
    globalObject: "(typeof self != 'undefined' ? self : this)",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(), new HtmlWebpackRootPlugin()],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  target: "web"
};
