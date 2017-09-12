const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/entry.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: './dist'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          // for development
          fallback: "style-loader",
          //resolve-url-loader may be chained before sass-loader if necessary
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'file-loader',
        options: {
          outputPath: 'images/'
        }
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/'
        }
      }
    ]
  }

}
