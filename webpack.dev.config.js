const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks (module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({ disable: true }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, '/dist'),
    hot: true,
    port: 5000
  },

  devtool: 'inline-source-map'

})
