let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlTemplatePlugin = require('webpack-template-plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let CopyWebpackPlugin = require("copy-webpack-plugin");

let path = require("path");
require('@babel/polyfill');

module.exports = {
    entry: {
      app: ['babel-polyfill', "./src/index.js"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./bundle.js"
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
        
        compress: true,
        port: 8100
    },
    mode: "development",
    module: {
        rules: [
            { test: /\.css$/i,
                
                use: [MiniCssExtractPlugin.loader, {
                  loader: "css-loader",
                  options: {
                    sourceMap: true,
                    url: false,
                  }
                }]
            },
            { test: /\.m?js$/,
                // exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            },
            { test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: {
                  outputPath: "./img/",
                  name: "[name].[ext]",
                  publicPath: "/"
                }
            },
            {
                test: /\.(scss)$/,
                loader: "style-loader"
              },
              
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // inject: false,
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new HtmlTemplatePlugin({
            inject: false,
            root: __dirname,
            template: "./src/index.html",
            appMountId: "root"
          }),
          new MiniCssExtractPlugin({
            filename: "css/index.css"
          }),
          new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, "src/img"),
                to: path.resolve(__dirname, "dist/img")
            }],
          })
    ]
}