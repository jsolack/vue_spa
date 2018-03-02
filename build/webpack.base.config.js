const path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /(\.js$)|(\.vue$)/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        css: 'css-loader',
        'scss': 'css-loader|sass-loader'
      }
    },
    {
      test: /\.(jpg|jpeg|gif|png)$/,
      exclude: /node_modules/,
      loader: 'url-loader?limit=1024&name=images/[name].[ext]'
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      exclude: /node_modules/,
      loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
}
