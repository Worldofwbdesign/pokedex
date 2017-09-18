const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },

  plugins: [
    new CleanWebpackPlugin((['dist'])),
    new HtmlWebpackPlugin({
      template: './templates/index.html',
      filename: 'index.html',
      inject: true
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin({
      comments: false,
      exclude: /(node_modules)/
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]

})
