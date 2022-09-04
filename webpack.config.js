const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CODEMIRROR_PATH = path.resolve(__dirname, "./node_modules/codemirror");
// let ROOT_PATH = path.resolve(__dirname);
// let DEMO_PATH = path.resolve(ROOT_PATH, "demos");
// let STYLE_PATHS = [
//   DEMO_PATH,
//   path.resolve(ROOT_PATH, "node_modules/codemirror/lib/"),
//   path.resolve(ROOT_PATH, "node_modules/codemirror/theme/"),
//   path.resolve(ROOT_PATH, "node_modules/prismjs-default-theme/"),
// ];
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // to import index.html file inside index.js
      filename: "./index.html",
      favicon: "./public/favicon.ico",
      manifest: "./public/manifest.json",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      "~": path.resolve("./node_modules"),
    },
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "file-loader",
        options: { limit: false },
      },
      {
        test: /\.css$/i,
        include: [CODEMIRROR_PATH],
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
