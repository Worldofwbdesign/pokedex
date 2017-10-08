const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'material-ui'],
    main: './src/entry.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          // for development
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'file-loader',
        options: {
          outputPath: 'images/'
        }
      }
    ]
  }
}
