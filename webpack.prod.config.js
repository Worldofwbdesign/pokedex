const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {

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
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      exclude: /(node_modules|libs)/
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]

})
