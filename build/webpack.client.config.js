const base = require('./webpack.base.config')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = Object.assign({}, base, {
  plugins: (base.plugins || []).concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'assets/js/[name].js'
    })
  ])
})

// since we dont want the css extract to happen server-side, 
// find the vue-loader and append extractCSS = true through the client config, not base config

// uncomment this once in production -- this is breaking the hot module reload for style changes
config.module.rules
  .filter(x => { return x.loader === 'vue-loader' })
  .forEach(x => x.options.extractCSS = true)

config.plugins.push(
  new ExtractTextPlugin('assets/styles.css'),
  new CopyWebpackPlugin([
    { from: './static', to: 'assets/static' }
  ])
)

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  )
}

module.exports = config
