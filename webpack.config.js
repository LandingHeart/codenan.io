const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CODEMIRROR_PATH = path.resolve(__dirname, "./node_modules/codemirror");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: path.resolve(__dirname, "public", "favicon.ico"),
      manifest: path.resolve(__dirname, "public", "manifest.json")
    })
  ],
  devServer: {
    compress: true,
    port: 3000,
    https: false,
    hot: true,
    historyApiFallback: true
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
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "file-loader",
        options: { limit: false }
      },
      {
        test: /\.css$/i,
        include: [CODEMIRROR_PATH],
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
