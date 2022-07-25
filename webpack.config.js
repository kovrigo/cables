const { VueLoaderPlugin } = require('vue-loader')

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
  entry: {
    main: {
      import: "./src/index.js",
    },
    bundle: {
      import: "./src/UI/app.js",
      library: {
        name: 'CableWidget',
        type: 'umd',
      },
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      //{
      //  test: /\.css$/i,
      //  use: [stylesHandler, "css-loader"],
      //},
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
